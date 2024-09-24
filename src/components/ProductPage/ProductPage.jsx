import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { booksData } from "../../data/data";
import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Lọc sách theo danh mục đã chọn
  const filteredBooks = selectedCategory
    ? booksData.filter((book) => book.category === selectedCategory)
    : booksData;

  // Phân trang
  const totalPages = Math.ceil(filteredBooks.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentBooks = filteredBooks.slice(startIndex, startIndex + pageSize);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset lại trang về trang đầu tiên khi đổi danh mục
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    let pages = [];

    // Nếu số trang <= 5, hiển thị tất cả các trang
    if (totalPages <= 5) {
      pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }

    return pages.map((page, index) =>
      typeof page === "number" ? (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 border rounded ${
            currentPage === page
              ? "bg-primary text-white border-white hover:bg-opacity-75"
              : "bg-gray-200 text-white border-white hover:bg-opacity-75"
          }`}
        >
          {page}
        </button>
      ) : (
        <span key={index} className="px-3 py-2">
          {page}
        </span>
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <TitleTypeOne Title={"All Books"} />
      {/* Category Section */}
      <div className="mb-4 flex justify-center space-x-4">
        <button
          onClick={() => handleCategoryChange(null)}
          className={`px-4 py-2 rounded ${
            !selectedCategory
              ? "bg-primary text-white"
              : "bg-gray-200 text-white"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleCategoryChange("Fiction")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "Fiction"
              ? "bg-primary text-white"
              : "bg-gray-200 text-white"
          }`}
        >
          Fiction
        </button>
        <button
          onClick={() => handleCategoryChange("Health")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "Health"
              ? "bg-primary text-white"
              : "bg-gray-200 text-white"
          }`}
        >
          Health
        </button>
        <button
          onClick={() => handleCategoryChange("Horror")}
          className={`px-4 py-2 rounded ${
            selectedCategory === "Horror"
              ? "bg-primary text-white"
              : "bg-gray-200 text-white"
          }`}
        >
          Horror
        </button>
      </div>

      {/* Product Section */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {currentBooks.map((book) => (
          <ProductCard key={book.id} book={book} />
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 border rounded ${
            currentPage === 1
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-gray-200 text-white border-white hover:bg-opacity-75"
          }`}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>

        {/* Nút số trang */}
        {renderPaginationButtons()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-gray-200 text-white border-white hover:bg-opacity-75"
          }`}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
