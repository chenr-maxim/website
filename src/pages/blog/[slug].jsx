import React from 'react';
import axios from 'axios';

export default function BlogPost({ title, content }) {
  return (
    <div>
      <h1>{title}</h1>
      <pre>{JSON.stringify(content, null, 2)}</pre>
    </div>
  );
}

export async function getStaticPaths() {
  // POST + body (filter), headers as 3rd arg
  const { data } = await axios.post(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      filter: { property: 'Published', checkbox: { equals: true } },
      sorts: [{ timestamp: 'created_time', direction: 'descending' }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
    }
  );

  const paths = data.results
    .map((page) => page?.properties?.Slug?.rich_text?.[0]?.plain_text)
    .filter(Boolean)
    .map((slug) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // 1) Find the page by slug
  const lookup = await axios.post(
    `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
    {
      filter: {
        and: [
          { property: 'Published', checkbox: { equals: true } },
          { property: 'Slug', rich_text: { equals: params.slug } },
        ],
      },
      page_size: 1,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
    }
  );

  const page = lookup.data.results[0];
  if (!page) {
    return { notFound: true };
  }

  // 2) Fetch its blocks
  const blocksRes = await axios.get(
    `https://api.notion.com/v1/blocks/${page.id}/children?page_size=100`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
      },
    }
  );

  const title =
    page.properties?.Title?.title?.[0]?.plain_text ||
    page.properties?.Title?.title?.[0]?.text?.content ||
    'Untitled';

  return {
    props: {
      title,
      content: blocksRes.data.results, // serializable
    },
    // Optional ISR to pick up edits without full rebuilds
    revalidate: 600,
  };
}
