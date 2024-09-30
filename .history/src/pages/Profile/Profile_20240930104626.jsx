import { useEffect, useState } from "react";
import "../Profile/Profile.css";
import Cookies from "js-cookie";
import { data } from "autoprefixer";

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
  const id = window.location.pathname.split("/")[2];

  // Get password to delete account
  useEffect(() => {
    fetch(`http://localhost:8080/user/${id}`)
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            setMsg(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setPassword(data.password);
        }
      })
      .catch((error) => {
        setError("Network problem or server not working");
        Cookies.set("msg", "Network problem or server not working");
        console.log(
          "There was a problem with the fetch operation: " + error.message
        );
        window.location.reload();
      });
  }, [id]);

  const handleDelete = () => {
    fetch(
      `http://localhost:8080/user/updateuser/${Cookies.get("userId")}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: Cookies.get("userId"),
          username: Cookies.get("username"),
          age: age,
          password: password,
          categoryId: cateUser,
          roleId: role,
          isDeleted: "true",
        }),
      },
      alert(password)
    )
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            setTextColor("red");
            setMsg(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setTextColor("green");
          setMsg(data.msg);
          Cookies.set("msg", data.msg);
          Cookies.remove("username");
          Cookies.remove("userId");
          window.location.reload();
        }
      })
      .catch((error) => {
        setTextColor("red");
        setError("Network problem or server not working");
        Cookies.set("msg", "Network problem or server not working");
        console.log(
          "There was a problem with the fetch operation: " + error.message
        );
        window.location.reload();
      });
  };

  useEffect(() => {
    fetch("", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    });
  });

  return (
    <div className="container">
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
                  <div className="mt-3">
                    <h4>{data}</h4>
                    <p className="text-secondary mb-1">Full Stack Developer</p>
                    <p className="text-muted font-size-sm">
                      Bay Area, San Francisco, CA
                    </p>
                    <button className="btn btn-primary">Follow</button>
                    <button className="btn btn-outline-primary">Message</button>
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
