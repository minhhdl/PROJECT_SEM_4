import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const InsUpCateBook = () => {
  let [msg, setMsg] = useState("");
  let [error, setError] = useState("");
  let [cateName, setCateName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/catebook/insertcatebook",
        { categoryName: cateName }
      );
      setMsg(response.data);
      setError(response.data);
      if (response.status === 200) {
        window.location.href = "/admin/cate-book";
      }
    } catch (errors) {
      alert(errors);
    }
  };

  return (
    <div className="container mb-5" style={{ paddingTop: "100px" }}>
      <h1>Category book</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Category name</label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setCateName(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="col-md-4">
          <button className="btn btn-danger">Create</button>
        </div>
      </form>
    </div>
  );
};

export default InsUpCateBook;
