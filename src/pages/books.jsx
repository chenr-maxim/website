import React, { Suspense } from "react";
import Books from "@/src/components/Books";
import axios from "axios";

export default function books({ volumesData }) {
  return (
    <Suspense fallback={<p> Loading Books...</p>}>
      <Books booksData={volumesData} />
    </Suspense>
  );
}

export async function getStaticProps() {
  const my_bookshelves_url = `https://www.googleapis.com/books/v1/users/${process.env.GOOGLE_BOOKS_USERID}/bookshelves/4/volumes?key=${process.env.GOOGLE_BOOKS_API_KEY}`;
  const obj = { success: true };
  try {
    const { data } = await axios.get(my_bookshelves_url);

    if (!data) {
      console.log("data does not exist");
    }

    const volumesData = data.items.reduce((acc, currItem) => {
      if (currItem && currItem.volumeInfo) {
        acc.push({
          volumeInfo: currItem.volumeInfo,
          id: currItem.id,
        });
      }

      return acc;
    }, []);

    return { props: { volumesData } };
  } catch (err) {
    console.log(`error fetching books data`, err);
    return { notFound: true };
  }
}
