import "../../assets/css/styles.min.css";
import "../../assets/libs/jquery/dist/jquery.min.js";
import "../../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [msg, setMsg] = useState("");
  let [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
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
          Cookies.set("username", data.username, { expires: 7 });
          Cookies.set("userId", data.userId, { expires: 7 });
          if (data.roles.roleName === "Admin") {
            window.location.href = "/admin/dashboard";
          } else {
            window.location.href = "/";
          }
        }
      })
      .catch((error) => {
        setError("Network problem or server not working");
        console.log(
          "There was a problem with the fetch operation: " + error.message
        );
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
                  {msg.length > 0 && (
                    <label className="form-label p-2 w-100 text-center text-danger">
                      {msg}
                    </label>
                  )}
                  {error.length > 0 && (
                    <label className="form-label p-2 w-100 text-center text-danger">
                      {error}
                    </label>
                  )}
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
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoFocus
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="exampleInputPassword1"
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
                          value=""
                          id="flexCheckChecked"
                        />
                        <label
                          className="form-check-label text-dark"
                          htmlFor="flexCheckChecked"
                        >
                          Remeber this Device
                        </label>
                      </div>
                      <a className="text-primary fw-bold" href="./index.html">
                        Forgot Password ?
                      </a>
                    </div>
                    <button className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">
                      Sign In
                    </button>
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="fs-4 mb-0 fw-bold">No account?</p>
                      <a className="text-primary fw-bold ms-2" href="/sign-up">
                        Sign up
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

export default Login;
