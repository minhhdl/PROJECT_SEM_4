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
          title: book.title,
          text: `Check out this audio book: "${book.title}" by ${book.author}`,
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
    </div>
  );
}
