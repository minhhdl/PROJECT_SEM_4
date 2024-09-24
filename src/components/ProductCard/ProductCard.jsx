import React from "react";
import { Link } from "react-router-dom";

// imprort icons
import { FaUser } from "react-icons/fa";

export default function ProductCard({ book }) {
  return (
    <Link to={`/products/${book.id}`}>
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
        <img
          src={book.image}
          alt={book.title}
          className="w-full object-cover rounded-t-lg"
        />
        <h3 className=" text-darkGray mt-4 mb-2 font-bold text-lg hover:text-primary cursor-pointer text-center">
          {book.title}
        </h3>
        <p className="mb-2 text-gray text-center">
          <FaUser className="inline-flex items-center mr-2" />
          {book.author}
        </p>
        <p className="text-sm text-darkGray text-center">
          Published: {book.published_date}
        </p>
        <button className="text-sm bg-primary rounded-md px-3 py-1  text-center text-white">
          Category: {book.category}
        </button>
      </div>
    </Link>
  );
}
