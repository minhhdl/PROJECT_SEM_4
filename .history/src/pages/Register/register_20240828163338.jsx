import "../../assets/css/styles.min.css";
import "../../assets/libs/jquery/dist/jquery.min.js";
import "../../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js";

const Register = () => {
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
                  <form>
                    <div className="mb-3">
                      <label
                        htmlhtmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Username
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
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
                          htmlhtmlFor="flexCheckChecked"
                        >
                          Remeber this Device
                        </label>
                      </div>
                      <a className="text-primary fw-bold" href="./index.html">
                        Forgot Password ?
                      </a>
                    </div>
                    <button className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">
                      Sign Up
                    </button>
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="fs-4 mb-0 fw-bold">Have an account?</p>
                      <a className="text-primary fw-bold ms-2" href="/login">
                        Login
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
