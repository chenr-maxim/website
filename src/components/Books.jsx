import React, { useEffect, useState } from "react";
import Book from "./Book";

import styles from "@/src/styles/Books.module.scss";
import Loader from "./Loader";

const Books = ({ haveReadVolumesData, currReadingVolumeData }) => {
  const [bookshelf, setBookshelf] = useState(haveReadVolumesData);
  const [currentlyReading, setCurrentlyReading] = useState(
    currReadingVolumeData
  );

  const bookList = bookshelf.map((book) => {
    return <Book key={book.id} book={book} />;
  });

  return (
    <div className={styles.booksContainer}>
      {bookList}

      <div style={{ width: `200px`, height: `200px` }}>
        <Loader />
      </div>
    </div>
  );
};

export default Books;
