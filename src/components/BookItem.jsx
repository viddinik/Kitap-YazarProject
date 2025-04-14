import React from "react";
import "./BookItem.css";

const BookItem = ({ book }) => {
  const { title, author } = book;

  return (
    <div className="book-item">
      <h3>{title}</h3>
      <p>Yazar: {author}</p>
    </div>
  );
};

export default BookItem;
