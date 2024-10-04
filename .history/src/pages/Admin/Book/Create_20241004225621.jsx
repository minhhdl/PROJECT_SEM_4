import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const CreateBook = () => {
  let [msg, setMsg] = useState("");
  let [error, setError] = useState("");
  let [cateName, setCateName] = useState("");
  let [initialCateName, setInitialCateName] = useState("");
  const id = window.location.pathname.split("/").pop();

  useEffect(() => {
    const fetchCateBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/book/insertbook`
        );
        setCateName(response.data.categoryName);
        setInitialCateName(response.data.categoryName);
      } catch (error) {
        setError("Network problem or server not working");
        console.log(
          `There was a problem with the fetch operation: ${error.message}`
        );
      }
    };

    fetchCateBook();
  }, [id]);

  const handleCreate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/book/insertbook",
        { categoryName: cateName }
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
    if (cateName === initialCateName) {
      window.history.back();
    } else {
      try {
        const response = await axios.put(
          `http://localhost:8080/catebook/updatecatebook/${id}`,
          { categoryName: cateName }
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
      <form>
        <label htmlFor="name">Category Id</label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setCateName(e.target.value)}
            value={cateName}
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
