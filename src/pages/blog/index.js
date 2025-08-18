import React from 'react';
import axios from 'axios';

export default function Blog({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
      {
        filter: {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
        sorts: [
          {
            timestamp: 'created_time',
            direction: 'descending',
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          'Notion-Version': '2022-06-28',
        },
      }
    );

    const posts = response.data.results.map((post) => {
      const title = post.properties.Title.title[0]?.text.content ?? 'untitled';
      const slug = post.properties.Slug.rich_text[0]?.plain_text ?? '';
      const pageId = post.id;
      // const published = post.properties.Published.checkbox;
      // const createdTime = post.created_time;
      // const updatedTime = post.last_edited_time;
      // const cover = post.properties.Cover.files[0]?.file.url ?? '';
      // const coverAlt = post.properties.Cover.files[0]?.file.name ?? '';
      // const coverType = post.properties.Cover.files[0]?.file.type ?? '';
      return {
        id: pageId,
        title,
        slug,
      };
    });

    return { props: { posts } };
  } catch (err) {
    console.error(`error fetching blog`, err);
    return { notFound: true };
  }
}
