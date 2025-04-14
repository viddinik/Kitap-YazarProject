import React, { useState } from "react";
import booksData from "./data/books.json";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks =
    searchQuery.trim() === ""
      ? []
      : booksData.filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div className="App">
      <h1>Kitap Arama Uygulaması</h1>
      <input
        type="text"
        placeholder="Kitap adı ya da yazar ara..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />

      {searchQuery && filteredBooks.length > 0 && (
        <BookList books={filteredBooks} />
      )}

      {searchQuery && filteredBooks.length === 0 && (
        <p className="no-result">Aradığınız kitap ya da yazar bulunamadı.</p>
      )}
    </div>
  );
}

export default App;
