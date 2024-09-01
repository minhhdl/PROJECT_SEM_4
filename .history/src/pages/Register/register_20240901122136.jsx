import "../../assets/css/styles.min.css";
import "../../assets/libs/jquery/dist/jquery.min.js";
import "../../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js";
import { useEffect, useState } from "react";

const Register = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [age, setAge] = useState("");
  let [roles, setRoles] = useState([]);
  let [cateUsers, setCateUsers] = useState([]);
  let [cateUser, setCateUser] = useState([]);
  const [role, setRole] = useState("");

  // Get roles
  useEffect(() => {
    fetch("http://localhost:8080/role/roles")
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            alert(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        setRoles(data);
      })
      .catch((error) => {
        alert("There was a problem with the fetch operation: " + error.message);
      });
  }, []);

  // Get Category users
  useEffect(() => {
    fetch("http://localhost:8080/cateuser/cateusers")
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            alert(text);
          });
        }
        return response.json();
      })
      .then((data) => {
        setCateUsers(data);
      })
      .catch((error) => {
        alert("There was a problem with the fetch operation: " + error.message);
      });
  }, []);

  useEffect(() => {
    roles.map((item, index) => {
      if (item.categoryName === "Visually impaired") {
        setRole(item.roleId);
      }
    });
  });

  useEffect(() => {
    cateUsers.map((item, index) => {
      if (item.categoryName === "Visually impaired") {
        // alert(item.categoryId);
        setCateUser(item.categoryId);
      }
    });
  });
  const handleSubmit = () => {
    fetch(
      "http://localhost:8080/user/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          age: age,
          password: password,
          categoryId: cateUser,
          roleId: role,
        }),
      },
      alert(cateUser)
    )
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            alert(text);
          });
        }
        return response.text().then((text) => {
          alert(text);
        });
      })
      .then((data) => console.log("Data received:", data))
      .catch((error) => {
        alert("There was a problem with the fetch operation: " + error.message);
      });
  };
  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-md-8 col-lg-6 col-xxl-3">
              <div className="card mb-0">
                <div className="card-body">
                  <a
                    href="/"
                    className="text-nowrap logo-img text-center d-block py-3 w-100"
                  >
                    <img
                      style={{ margin: "auto" }}
                      src="/src/assets/LOGO2.png"
                      width="100"
                      alt=""
                    />
                  </a>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlhtmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlhtmlFor="exampleInputAge"
                        className="form-label"
                      >
                        Age
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="exampleInputAge"
                        aria-describedby="emailHelp"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlhtmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input primary"
                          type="checkbox"
                          value="agree-policy"
                          id="flexCheckChecked"
                          required
                        />
                        <label
                          className="form-check-label text-dark"
                          htmlhtmlFor="flexCheckChecked"
                        >
                          Agree to our{" "}
                          <span
                            style={{
                              color: "blue",
                              textDecoration: "underline",
                            }}
                          >
                            policy
                          </span>
                        </label>
                      </div>
                    </div>
                    <button className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">
                      Sign Up
                    </button>
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="fs-4 mb-0 fw-bold">Have an account?</p>
                      <a className="text-primary fw-bold ms-2" href="/sign-in">
                        Sign in
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
