import React, { useEffect, useState } from "react";
import Book from "./Book";

import styles from "@/src/styles/Books.module.scss";

const Books = ({ booksData }) => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    setBookshelf(booksData);
  }, []);

  console.log(booksData, "booksData");

  const bookList = bookshelf.map((book) => {
    return <Book key={book.id} book={book} />;
  });

  return <div className={styles.booksContainer}>{bookList}</div>;
};

export default Books;
