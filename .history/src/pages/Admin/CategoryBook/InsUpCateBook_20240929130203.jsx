import Cookies from "js-cookie";
import { useState } from "react";

const InsUpCateBook = () => {
  let [msg, setMsg] = useState("");
  let [error, setError] = useState("");
  let [cateName, setCateName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/catebook/insertcatebook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: cateName }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            setMsg(text);
          });
        }
        alert(response);
        return response.json();
      })
      .then((data) => {
        window.location.href = "/admin/cate-book";
      })
      .catch((error) => {
        setError("Network problem or server not working");
        // Cookies.set("msg", "Network problem or server not working");
        console.log(
          "There was a problem with the fetch operation: " + error.message
        );
        window.location.reload();
      });
  };

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
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
