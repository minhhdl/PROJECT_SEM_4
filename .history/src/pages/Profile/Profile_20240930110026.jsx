import { useEffect, useState } from "react";
import "../Profile/Profile.css";
import Cookies from "js-cookie";
import axios from "axios";

const Profile = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [age, setAge] = useState("");
  let [role, setRole] = useState("");
  let [textColor, setTextColor] = useState("");
  let [roles, setRoles] = useState([]);
  let [cateUsers, setCateUsers] = useState([]);
  let [cateUser, setCateUser] = useState([]);
  let [msg, setMsg] = useState([]);
  let [error, setError] = useState("");
  let [data, setData] = useState("");
  const id = window.location.pathname.split("/")[2];

  // Get password to delete account
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/user/user/${id}`
        );
        setData(response.data);
        setError(response.data);
      } catch (error) {
        setError("Network problem or server not working");
        Cookies.set("msg", "Network problem or server not working");
        console.log(
          "There was a problem with the fetch operation: " + error.message
        );
      }
    };

    fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/user/updateuser/${Cookies.get("userId")}`,
        {
          userId: Cookies.get("userId"),
          username: Cookies.get("username"),
          age: age,
          password: password,
          categoryId: cateUser,
          roleId: role,
          isDeleted: "true",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Xử lý response từ server
      if (response.status !== 200) {
        setTextColor("red");
        setMsg(response.data);
      } else {
        setTextColor("green");
        setMsg(response.data.msg);
        Cookies.set("msg", response.data.msg);
        Cookies.remove("username");
        Cookies.remove("userId");
        window.location.reload();
      }
    } catch (error) {
      // Xử lý lỗi khi gọi API
      setTextColor("red");
      setError("Network problem or server not working");
      Cookies.set("msg", "Network problem or server not working");
      console.error(
        "There was a problem with the axios operation: " + error.message
      );
      window.location.reload();
    }
  };

  // useEffect(() => {
  //   fetch("", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ username: username, password: password }),
  //   });
  // });

  return (
    <div className="container mt-24">
      <div className="main-body text-center">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body m-auto">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3" key={data.userId}>
                    <h4>{data.username}</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row gutters-sm">
              <div className="col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    {Cookies.get("userId") === id && (
                      <button
                        style={{
                          backgroundColor:
                            Cookies.get("username") === "Admin"
                              ? "gray"
                              : "red",
                          color: "white",
                          padding: "10px",
                          borderRadius: "10px",
                        }}
                        onClick={handleDelete}
                        disabled={Cookies.get("username") === "Admin"}
                      >
                        Delete account
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
