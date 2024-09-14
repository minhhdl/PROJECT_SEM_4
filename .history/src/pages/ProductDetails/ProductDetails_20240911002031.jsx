import React from "react";
import { useParams } from "react-router-dom";
import { booksData } from "../../data/data";
import ReactReadMoreReadLess from "react-read-more-read-less";
// import icons
import { FaUser } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { CiPlay1 } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShareForwardFill } from "react-icons/ri";

export default function ProductDetails() {
  const { productId } = useParams();

  // Tìm sản phẩm dựa trên ID
  const books = booksData.find((book) => book.id === parseInt(productId));

  if (!books) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="bg-darkGray">
      <div className="py-20 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          {books.title}
        </h2>
      </div>
      {/* Book Details  */}
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Phần ảnh bên trái */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <img
              src={books.image}
              alt={books.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Phần thông tin bên phải */}
          <div className="md:w-2/3 p-6 md:p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              [Audiobook] | {books.title}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              <FaUser className="inline-flex items-center mr-2" />
              {books.author}
            </p>
            <p className="text-md text-gray-500 mb-6">
              Category: {books.category}
            </p>

            {/* Các nút hành động */}
            <div className="flex space-x-4 mb-8">
              <button className="px-6 py-2 bg-primary text-white font-semibold rounded-full shadow-md hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                <CiPlay1 className="inline-flex items-center mr-2" /> Play audio
              </button>
              <button className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                <IoMdHeartEmpty className="w-5 h-5" />
              </button>
              <button className="bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                <RiShareForwardFill className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                About this book
              </h2>
              <ReactReadMoreReadLess
                charLimit={100}
                readMoreText={
                  <span className="text-blue-500 hover:underline">
                    Read a book
                  </span>
                }
                readLessText={
                  <span className="text-blue-500 hover:underline">
                    Read less
                  </span>
                }
                className="text-gray-700 leading-relaxed"
              >
                {books.content}
              </ReactReadMoreReadLess>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
