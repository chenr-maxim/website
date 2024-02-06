import React, { Suspense } from "react";
import Books from "@/src/components/Books";
import axios from "axios";
import { getVolumesData } from "../util/getVolumesData";
import Loader from "../components/Loader";

export default function books({ haveReadVolumesData, currReadVolumeData }) {
  return (
    <Suspense
      fallback={
        <div style={{ width: `200px`, height: `200px` }}>
          <Loader />
        </div>
      }
    >
      <Books
        haveReadVolumesData={haveReadVolumesData}
        currReadingVolumeData={currReadVolumeData}
      />
    </Suspense>
  );
}

export async function getStaticProps() {
  const have_read_bookshelfUrl = `https://www.googleapis.com/books/v1/users/${process.env.GOOGLE_BOOKS_USERID}/bookshelves/4/volumes?key=${process.env.GOOGLE_BOOKS_API_KEY}`;
  const curr_read_bookshelf = `https://www.googleapis.com/books/v1/users/${process.env.GOOGLE_BOOKS_USERID}/bookshelves/3/volumes?key=${process.env.GOOGLE_BOOKS_API_KEY}`;
  try {
    const have_read_bookshelf_promise = await axios.get(have_read_bookshelfUrl);
    const curr_read_bookshelf_promise = await axios.get(curr_read_bookshelf);

    const bookshelfData = await Promise.all([
      have_read_bookshelf_promise,
      curr_read_bookshelf_promise,
    ]).then(async function ([first, second]) {
      return [first.data, second.data];
    });

    if (!bookshelfData) {
      console.log("bookshelf data does not exist");
      return { notFound: true };
    }

    const haveReadVolumesData = getVolumesData(bookshelfData[0]);
    const currReadVolumeData = bookshelfData[1].items[0];

    return { props: { haveReadVolumesData, currReadVolumeData } };
  } catch (err) {
    console.log(`error fetching books data`, err);
    return { notFound: true, ...err };
  }
}
