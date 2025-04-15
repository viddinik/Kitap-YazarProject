import React from "react";
import "./BookItem.css";

function BookItem({ book }) {
  const { title, author, description, content, image } = book;

  return (
    <div className="book-card">
      <img src={image} alt={title} className="book-cover" />
      <div className="book-details">
        <h2>{title}</h2>
        <h4>Yazar: {author}</h4>
        <p><strong>Açıklama:</strong> {description}</p>
        <p><strong>İçerik:</strong> {content}</p>
      </div>
    </div>
  );
}

export default BookItem;
