import { useParams } from "react-router-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";
// import icons
import { FaUser } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShareForwardFill } from "react-icons/ri";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetails() {
  const { productId } = useParams();
  let [errFetch, setErrFetch] = useState("");
  // Get product by ID
  // const book = bookData.find((book) => book.id === parseInt(productId));
  const [book, setBook] = useState("");
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/book/book/${productId}`
        );
        setBook(response.data);
        setErrFetch(response.data);
      } catch (error) {
        setErrFetch("Network problem or server not working");
        console.log("Error fetching books: " + error);
      }
    };

    fetchBooks();
  }, []);
  if (!book) {
    return <div>Product not found!</div>;
  }

  // Function share and copy link
  const handleShare = () => {
    const urlToShare = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          title: book.bookName,
          text: `Check out this audio book: "${book.bookName}" by ${book.author}`,
          url: urlToShare,
        })
        .then(() => {
          console.log("Shared successfully!");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      navigator.clipboard.writeText(urlToShare).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
        alert("Link copied to clipboard!");
      });
    }
  };

  return (
    <div className="bg-darkGray">
      <div className="py-10 bg-black text-center text-white px-4"></div>
      {/* Book Details  */}
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left image */}
          <div className="md:w-1/3 flex justify-center md:justify-start">
            <img
              src={`../${book.picture}`}
              alt={book.bookName}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Right info */}
          <div className="md:w-2/3 p-6 md:p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              [Audio book] | {book.bookName}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              <FaUser className="inline-flex items-center mr-2" />
              {book.author}
            </p>
            <p className="text-md text-gray-500 mb-6">
              Category: {book.categoryId}
            </p>
            {/* More action button */}
            <div className="flex mb-8">
              {/* Button start audio */}
              <AudioPlayer
                image={book.picture}
                text={book.bookDescription}
                title={book.bookName}
                author={book.author}
              />
              <button className="bg-red-500 ml-4 text-white p-3 rounded-full shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75">
                <IoMdHeartEmpty className="w-5 h-5" />
              </button>
              <button
                onClick={handleShare}
                className="bg-blue-500 ml-4 text-white p-3 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              >
                <RiShareForwardFill className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Summary this book
              </h2>
              <ReactReadMoreReadLess
                charLimit={100}
                readMoreText={
                  <span className="text-blue-500 hover:underline">
                    Read more
                  </span>
                }
                readLessText={
                  <span className="text-blue-500 hover:underline">
                    Read less
                  </span>
                }
                className="text-gray-700 leading-relaxed"
              >
                {book.bookDescription}
              </ReactReadMoreReadLess>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
