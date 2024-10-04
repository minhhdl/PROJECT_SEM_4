import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const CreateBook = () => {
  let [msg, setMsg] = useState("");
  let [error, setError] = useState("");
  let [title, setTitle] = useState("");
  let [image, setImage] = useState(null);
  let [initialCateName, setInitialCateName] = useState("");
  const id = window.location.pathname.split("/").pop();

  useEffect(() => {
    const fetchCateBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/catebook/catebook/${id}`
        );
        setTitle(response.data.categoryName);
        setInitialCateName(response.data.categoryName);
      } catch (error) {
        setError("Có vấn đề về mạng hoặc server không hoạt động");
        console.log(`Có vấn đề xảy ra khi thực hiện fetch: ${error.message}`);
      }
    };

    fetchCateBook();
  }, [id]);

  const handleCreate = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:8080/book/insertbook",
        formData
      );

      setMsg(response.data);
      setError(response.data);
      if (response.status === 200) {
        window.location.href = "/admin/book";
      }
    } catch (error) {
      setError("Có vấn đề về mạng hoặc server không hoạt động");
      console.log(`Có vấn đề xảy ra khi thực hiện fetch: ${error.message}`);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (title === initialCateName) {
      window.history.back();
    } else {
      try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("image", image);

        const response = await axios.put(
          `http://localhost:8080/catebook/updatecatebook/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setMsg(response.data);
        setError(response.data);
        if (response.status === 200) {
          window.location.href = "/admin/cate-book";
        }
      } catch (error) {
        setError("Có vấn đề về mạng hoặc server không hoạt động");
        console.log(`Có vấn đề xảy ra khi thực hiện fetch: ${error.message}`);
      }
    }
  };

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      {location.pathname.includes("update") && <h1>Cập nhật</h1>}
      {location.pathname.includes("create") && <h1>Tạo mới</h1>}
      <br />
      <form encType="multipart/form-data">
        <label htmlFor="name">Tên sách</label>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </div>
        <br />
        <label htmlFor="image">Hình ảnh sách</label>
        <div className="col-md-4">
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <br />
        <div className="col-md-4">
          {location.pathname.includes("update") && (
            <button onClick={handleUpdate} className="btn btn-primary">
              Cập nhật
            </button>
          )}
          {location.pathname.includes("create") && (
            <button onClick={handleCreate} className="btn btn-primary">
              Tạo mới
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
