import React, { useEffect, useState } from "react";
import Book from "./Book";

import styles from "@/src/styles/Books.module.scss";

const Books = ({ haveReadVolumesData, currReadingVolumeData }) => {
  const [bookshelf, setBookshelf] = useState(haveReadVolumesData);
  const [currentlyReading, setCurrentlyReading] = useState(
    currReadingVolumeData
  );

  const bookList = bookshelf.map((book) => {
    return <Book key={book.id} book={book} />;
  });

  const currentlyReadingBook = (
    <Book key={currentlyReading.id} book={currentlyReading} />
  );

  return (
    <div className={styles.booksContainer}>
      <div className={styles.currentlyReadingContainer}>
        <span> Currently Reading </span>
        {currentlyReadingBook}
      </div>
      <div className={styles.haveReadContainer}>
        <span> Have Read </span>
        <div className={styles.bookListContainer}>{bookList}</div>
      </div>
    </div>
  );
};

export default Books;
