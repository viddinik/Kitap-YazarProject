import React, { useState } from "react";
import booksData from "./data/books.json";
import BookItem from "./components/BookItem";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(null); // Başlangıçta null

  const handleSearch = () => {
    const lowerQuery = query.toLowerCase();
    const results = booksData.filter(
      (book) =>
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery)
    );
    setFilteredBooks(results);
  };

  return (
    <div className="app-container">
      <h1 className="title">Kitabını Bul!</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Kitap veya yazar ara..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Ara</button>
      </div>

      <div className="book-list">
        {filteredBooks === null ? (
          <p style={{ textAlign: "center", color: "#888" }}>
            Aramak istediğiniz kitap veya yazarı girin.
          </p>
        ) : filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <BookItem key={index} book={book} />
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#cc0000" }}>
            Sonuç bulunamadı.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
