import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [formData, setFormData] = useState({
    bookId: "",
    bookName: "",
    author: "",
    publisher: "",
    bookPrice: "",
    bookDescription: "",
    picture: "",
    readCount: 0,
    star: 0,
    isFavorite: false,
    createdAt: new Date().toISOString(),
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5173/book", formData);
      alert("Book created successfully");
      setFormData({
        bookId: "",
        bookName: "",
        author: "",
        publisher: "",
        bookPrice: "",
        bookDescription: "",
        picture: "",
        readCount: 0,
        star: 0,
        isFavorite: false,
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error creating book:", error);
    }
    const[bookId, setBookId] = useState('')
    const[bookName, setBookName] = useState('')
    const[author, setAuthor] = useState('')
    const[publisher, setPublisher] = useState('')
    const[bookPrice, setBookPrice] = useState('')
    const[bookDescription, setBookDescription] = useState('')
    const[picture, setPicture] = useState(null)
    const[readCount, setReadCount] = useState(0)
    const[star, setStar] = useState(0)
    const[isFavorite, setIsFavorite] = useState(false)
    const[createdAt, setCreatedAt] = useState('')
    const[updatedAt, setUpdatedAt] = useState('')

//1.
//     const handleChange (e){
//         console.log(e.target.files);
//         setPicture(URL.createObjectURL(e.target.files[0]));
//     }

// 2.    function handleChange(e) {
//             console.log(e.target.files);
//             if (e.target.files && e.target.files[0]) {
//                   setPicture(URL.createObjectURL(e.target.files[0]));
//                 }
//         }
    const navigator = useNavigate();

    function saveBook(e){
        e.preventDefault();

        const books = {bookId,bookName,author,publisher,
                    bookPrice,bookDescription,picture,
                    readCount,star,isFavorite,createdAt,updatedAt}
        console.log(books)
        const createdBook = (books) => axios.post('"http://localhost:8080/book/books", books');
        createdBook(books).then((response) =>{
            console.log(response.data);
            navigator('/books')
        })
  };

  return (
    <div>
      <h2>Create Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="bookId"
          value={formData.bookId}
          onChange={handleChange}
          placeholder="Book ID"
        />
        <input
          name="bookName"
          value={formData.bookName}
          onChange={handleChange}
          placeholder="Book Name"
        />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input
          name="publisher"
          value={formData.publisher}
          onChange={handleChange}
          placeholder="Publisher"
        />
        <input
          name="bookPrice"
          value={formData.bookPrice}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          name="bookDescription"
          value={formData.bookDescription}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          name="picture"
          value={formData.picture}
          onChange={handleChange}
          placeholder="Picture URL"
        />
        <input
          name="readCount"
          type="number"
          value={formData.readCount}
          onChange={handleChange}
          placeholder="Read Count"
        />
        <input
          name="star"
          type="number"
          value={formData.star}
          onChange={handleChange}
          placeholder="Star"
        />
        <label>
          Favorite:
          <input
            name="isFavorite"
            type="checkbox"
            checked={formData.isFavorite}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create Book</button>
      </form>
    </div>
  );
};

