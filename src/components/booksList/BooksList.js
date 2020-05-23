import React from "react";
import Book from "../book/Book";

function Bookslist(props) {
  const books = props.books.map((book) => {
    return (
        <Book
          key = {book.title+book.author}
          title={book.title}
          author={book.author}
          backgroundImage={book.backgroundImage}
        />
    );
  });
  return (
    <ol className="books-grid">
      {books}
    </ol>
  );
}

export default Bookslist;
