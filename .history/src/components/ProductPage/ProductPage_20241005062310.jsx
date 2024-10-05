import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  let [booksData, setBooksData] = useState([]);
  let [errFetch, setErrFetch] = useState("");
  const pageSize = 6;

  // Lọc sách theo danh mục đã chọn
  const filteredBooks = selectedCategory
    ? booksData.filter((book) => book.category === selectedCategory)
    : booksData;

  // Phân trang
  const totalPages = Math.ceil(filteredBooks.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  // const currentBooks = filteredBooks.slice(startIndex, startIndex + pageSize);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/book/books");
        setBooksData(response.data);
        setErrFetch(response.data);
      } catch (error) {
        setErrFetch("Network problem or server not working");
        console.log("Error fetching books: " + error);
      }
    };

    fetchBooks();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset lại trang về trang đầu tiên khi đổi danh mục
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
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
      </div>

      {/* Product Section */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {Array.isArray(booksData) && booksData.length > 0 ? (
          booksData.map((book) => <ProductCard key={book.id} book={book} />)
        ) : (
          <h1 style={{ color: "white" }}>{errFetch}</h1>
        )}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === index + 1
                ? "bg-primary text-white border-white hover:bg-opacity-75"
                : "bg-gray-200 text-white border-white hover:bg-opacity-75"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
