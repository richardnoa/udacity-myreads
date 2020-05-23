import React from "react";
import Book from "../book/Book";

function Bookslist(props) {
  return (
    <ol className="books-grid">
      <li>
        <Book/>
      </li>
      <li>
        <Book/>
      </li>
    </ol>
  );
}

export default Bookslist;
