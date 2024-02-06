import React from "react";

const Book = ({ book }) => {
  const volumeInfo = book.volumeInfo;

  return <div>{volumeInfo.title}</div>;
};

export default Book;
