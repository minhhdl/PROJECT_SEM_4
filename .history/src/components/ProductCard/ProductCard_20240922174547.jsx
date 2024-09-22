import { Link } from "react-router-dom";

// import icons
import { FaUser } from "react-icons/fa";

export default function ProductCard(book) {
  return (
    <Link key={book.bookId} to={`/product/${book.bookId}`}>
      <div className="flex flex-col books-center bg-white p-4 rounded-lg shadow-md">
        <img
          src={`../${book.picture}`}
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
