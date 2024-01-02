import { useState, useEffect } from "react";
import Card from "./Card";
function BookList() {
  const [books, setBooks] = useState([]);


  return (
    <div>
      <h2>Book List</h2>
      <ul>
        <Card />
      </ul>
    </div>
  );
}

export default BookList;
