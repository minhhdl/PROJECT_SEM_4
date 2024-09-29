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
    <div className="container" style={{ paddingTop: "100px" }}>
      {location.pathname.includes("update") && (
        <h1 style={{ color: "blue" }}>Update</h1>
      )}
      {location.pathname.includes("create") && <h1>Create</h1>}
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
          {location.pathname.includes("update") && (
            <button className="btn btn-primary">Update</button>
          )}
          {location.pathname.includes("create") && (
            <button className="btn btn-primary">Create</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default InsUpCateBook;
