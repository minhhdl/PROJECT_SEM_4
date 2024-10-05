import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const CreateBook = () => {
  let [msg, setMsg] = useState("");
  let [error, setError] = useState("");
  let [categoryId, setCategoryId] = useState("");
  let [bookName, setBookName] = useState("");
  let [author, setAuthor] = useState("");
  let [publisher, setPublisher] = useState("");
  let [bookPrice, setBookPrice] = useState("");
  let [bookDescription, setBookDescription] = useState("");
  let [picture, setPicture] = useState("");
  let [initialCateName, setInitialCateName] = useState("");
  const id = window.location.pathname.split("/").pop();

  const handleCreate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/book/insertbook",
        {
          categoryId: categoryId,
          bookName: bookName,
          author: author,
          publisher: publisher,
          bookPrice: bookPrice,
          bookDescription: bookDescription,
          picture: picture,
        }
      );
      setMsg(response.data);
      setError(response.data);
      if (response.status === 200) {
        window.location.href = "/admin/cate-book";
      }
    } catch (error) {
      setError("Network problem or server not working");
      console.log(
        `There was a problem with the fetch operation: ${error.message}`
      );
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (bookName === initialCateName) {
      window.history.back();
    } else {
      try {
        const response = await axios.put(
          `http://localhost:8080/catebook/updatecatebook/${id}`,
          { categoryId: categoryId }
        );
        setMsg(response.data);
        setError(response.data);
        if (response.status === 200) {
          window.location.href = "/admin/cate-book";
        }
      } catch (error) {
        setError("Network problem or server not working");
        console.log(
          `There was a problem with the fetch operation: ${error.message}`
        );
      }
    }
  };

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      {location.pathname.includes("update") && <h1>Update</h1>}
      {location.pathname.includes("create") && <h1>Create</h1>}
      <br />
      <h3 style={{ color: "red" }}>{error}</h3>
      <form>
        <label htmlFor="categoryId">Category Id</label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="categoryId"
            onChange={(e) => setCategoryId(e.target.value)}
            value={categoryId}
            required
          />
        </div>
        <br />
        <label htmlFor="bookName">Book name</label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="bookName"
            onChange={(e) => setBookName(e.target.value)}
            value={bookName}
            required
          />
        </div>
        <br />
        <label htmlFor="author">Author</label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </div>
        <br />
        <label htmlFor="publisher">Publisher</label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="publisher"
            onChange={(e) => setPublisher(e.target.value)}
            value={publisher}
            required
          />
        </div>
        <br />
        <label htmlFor="bookPrice">Price</label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="bookPrice"
            onChange={(e) => setBookPrice(e.target.value)}
            value={bookPrice}
            required
          />
        </div>
        <br />
        <label htmlFor="bookDescription">Summary</label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="bookDescription"
            onChange={(e) => setBookDescription(e.target.value)}
            value={bookDescription}
            required
          />
        </div>
        <br />
        <label htmlFor="image">Picture</label>
        <div className="col-md-4">
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => setPicture(e.target.files[0])}
            required
          />
        </div>
        <br />
        <div className="col-md-4">
          {location.pathname.includes("update") && (
            <button onClick={handleUpdate} className="btn btn-primary">
              Update
            </button>
          )}
          {location.pathname.includes("create") && (
            <button onClick={handleCreate} className="btn btn-primary">
              Create
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
