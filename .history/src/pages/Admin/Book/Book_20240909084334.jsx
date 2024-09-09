import { useState, useEffect } from "react";
import axios from "axios";

const Book = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/book/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Category ID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Price</th>
            <th>Description</th>
            <th>Picture</th>
            <th>Read Count</th>
            <th>Star</th>
            <th>Favorite</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            books.map((book) => (
              <tr key={book.bookId}>
                <td>{book.bookId}</td>
                <td>{book.categoryId}</td>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.bookPrice}</td>
                <td>{book.bookDescription}</td>
                <td>
                  <img src={book.picture} alt={book.bookName} width="50" />
                </td>
                <td>{book.readCount}</td>
                <td>{book.star}</td>
                <td>{book.isFavorite ? "Yes" : "No"}</td>
                <td>{new Date(book.createdAt).toLocaleDateString()}</td>
                <td>{new Date(book.updatedAt).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No books to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Book;
