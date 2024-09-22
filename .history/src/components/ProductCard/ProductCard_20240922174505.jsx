import { Link } from "react-router-dom";

// imprort icons
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductCard(book) {
  let [data, setData] = useState([]);
  let [err, setErr] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/book/books");
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          setErr("Unexpected data format");
        }
      } catch (error) {
        setErr("Network problem or server not working");
        console.log(
          `There was a problem with the fetch operation: ${error.message}`
        );
      }
    };

    fetchBooks();
  }, []);

  return (
    <Link key={book.bookId} to={`/product/${book.bookId}`}>
      <div className="flex flex-col books-center bg-white p-4 rounded-lg shadow-md">
        <img
          src={book.picture}
          alt={book.bookName}
          className="w-full object-cover rounded-t-lg"
        />
        <h3 className="mt-4 mb-2 font-bold text-lg hover:text-primary cursor-pointer text-center">
          {book.bookName}
        </h3>
        <p className="mb-2 text-gray text-center">
          <FaUser className="inline-flex books-center mr-2" />
          {book.author}
        </p>
        <p className="text-sm text-darkGray text-center">
          Published: {book.createdAt}
        </p>
        <p className="text-sm  text-center text-primary">
          Category: {book.categoryId}
        </p>
      </div>
    </Link>
  );
}
