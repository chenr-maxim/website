import React, { Suspense } from "react";
import Photography from "@/src/components/Photography";
import axios from "axios";

export default function photos({ photosData }) {
  return (
    <Suspense fallback={<p> Loading Photos...</p>}>
      <Photography photosData={photosData.data} />
    </Suspense>
  );
}

export async function getStaticProps() {
  const fields = [
    "id",
    "caption",
    "media_url",
    "media_type",
    // "children{media_type,media_url}",
  ].join(",");

  const instagram_url = `https://graph.instagram.com/v16.0/${process.env.USER_ID}/media?fields=${fields}&access_token=${process.env.ACCESS_TOKEN}`;
  const obj = { success: true };
  try {
    const { data } = await axios.get(instagram_url, {
      headers: { "Accept-Encoding": "gzip,deflate,compress" },
    });

    if (!data) {
      return { notFound: true };
    }
    return { props: { photosData: data } };
  } catch (err) {
    return { notFound: true };
  }
}
