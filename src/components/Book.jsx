import React from "react";
import Image from "next/image";

import styles from "@/src/styles/Books.module.scss";

const Book = ({ book }) => {
  const volumeInfo = book.volumeInfo;

  console.log(book);

  return (
    <div className={styles.bookContainer}>
      <Image
        quality={50}
        alt={volumeInfo.title || "book cover"}
        fill
        style={{ objectFit: "cover" }}
        src={volumeInfo.imageLinks.thumbnail}
      />
      {volumeInfo.title}
    </div>
  );
};

export default Book;
