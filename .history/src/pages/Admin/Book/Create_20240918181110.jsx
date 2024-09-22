import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const [bookId, setBookId] = useState("");
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [picture, setPicture] = useState(null);
  const [readCount, setReadCount] = useState(0);
  const [star, setStar] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [createdAt, setCreatedAt] = useState("");
  const [updatedAt, setUpdatedAt] = useState("");

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

  function saveBook(e) {
    e.preventDefault();

    const books = {
      bookId,
      bookName,
      author,
      publisher,
      bookPrice,
      bookDescription,
      picture,
      readCount,
      star,
      isFavorite,
      createdAt,
      updatedAt,
    };
    console.log(books);
    const createdBook = (books) =>
      axios.post('"http://localhost:8080/book/books", books');
    createdBook(books).then((response) => {
      console.log(response.data);
      navigator("/books");
    });
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Create book</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Book ID</label>
                <input
                  type="text"
                  placeholder="Enter Book ID"
                  name="bookId"
                  value={bookId}
                  className="form-control"
                  onChange={(e) => setBookId(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Book Name</label>
                <input
                  type="text"
                  placeholder="Enter Book Name"
                  name="bookName"
                  value={bookName}
                  className="form-control"
                  onChange={(e) => setBookName(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Author</label>
                <input
                  type="text"
                  placeholder="Enter Author"
                  name="author"
                  value={author}
                  className="form-control"
                  onChange={(e) => setAuthor(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Publisher</label>
                <input
                  type="text"
                  placeholder="Enter Publisher"
                  name="publisher"
                  value={publisher}
                  className="form-control"
                  onChange={(e) => setPublisher(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">BookPrice</label>
                <input
                  type="text"
                  placeholder="Enter BookPrice"
                  name="bookPrice"
                  value={bookPrice}
                  className="form-control"
                  onChange={(e) => setBookPrice(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">BookDescription</label>
                <input
                  type="text"
                  placeholder="Enter BookDescription"
                  name="bookDescription"
                  value={bookDescription}
                  className="form-control"
                  onChange={(e) => setBookDescription(e.target.value)}
                ></input>
              </div>
              <div className="form-group mb-2">
                <form method="post" encType="multipart/form-data">
                  <div>
                    <label htmlFor="file">Choose file to upload</label>
                    <input type="file" id="file" name="file" multiple />
                  </div>
                  <div>
                    <button>Submit</button>
                  </div>
                </form>
              </div>

              {/*                           <div className= 'form-group mb-2'> */}
              {/*                               <h5>Upload Picture</h5> */}
              {/*                               <input type="file" onChange={handleChange} /> */}
              {/*                               {picture && <img src={picture} alt="Preview" />} */}
              {/*                           </div> */}

              <div className="form-group mb-2">
                <label className="form-label">Read Count: </label>
                <input
                  type="number"
                  name="readCount"
                  value={readCount}
                  className="form-control"
                  onChange={(e) => setReadCount(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Star: </label>
                <input
                  type="number"
                  name="star"
                  value={star}
                  className="form-control"
                  onChange={(e) => setStar(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Favorite: </label>
                <input
                  type="number"
                  name="isFavorite"
                  value={isFavorite}
                  className="form-control"
                  onChange={(e) => setIsFavorite(e.target.value)}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label htmlFor="createdAt">CreatedAt</label>
                <input type="date" name="createdAt">
                  value= {createdAt}
                  onChange= {(e) => setCreatedAt(e.target.value)}
                </input>
                <input type="submit" />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="updatedAt">UpdatedAt</label>
                <input type="date" name="updatedAt">
                  value= {updatedAt}
                  onChange= {(e) => setUpdatedAt(e.target.value)}
                </input>
                <input type="submit" />
              </div>

              <button className="btn btn-success" onClick={saveBook}>
                Create Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
