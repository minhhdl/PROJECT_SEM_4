import "../../assets/css/owl.carousel.min.css";
import "../../assets/css/ticker-style.css";
import "../../assets/css/flaticon.css";
import "../../assets/css/slicknav.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/fontawesome-all.min.css";
import "../../assets/css/themify-icons.css";
import "../../assets/css/slick.css";
import "../../assets/css/nice-select.css";
import "../../assets/css/responsive.css";
import "../../assets/js/jquery-3.4.1.min.js";
import "../../assets/js/vendor/jquery-1.12.4.min.js";
import "../../assets/js/jquery.slicknav.min.js";
import "../../assets/js/owl.carousel.min.js";
import "../../assets/js/slick.min.js";
import "../../assets/js/jquery.ticker.js";
import "../../assets/js/site.js";
import "../../assets/js/custom.js";

const Profile = () => {
  return (
    <div className="main-content">
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          maxHeight: "600px",
          backgroundImage: `url('../../assets/')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8"></span>
        {/* Header container */}
        <div className="container-fluid d-flex align-items-center">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <h1 className="display-2 text-white">Xin chào @item.FullName</h1>
              <p className="text-white mt-0 mb-5">
                Đây là trang hồ sơ của bạn. Bạn có thể thấy tiến độ bạn đã đạt
                được trong công việc và quản lý các dự án hoặc nhiệm vụ được
                giao
              </p>
              <a href="" className="btn btn-info">
                Chỉnh sửa hồ sơ
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Page content */}
      <div className="container-fluid mt--7">
        <div className="row">
          <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile shadow">
              <div className="row justify-content-center">
                <div className="col-lg-3 order-lg-2">
                  <div className="card-profile-image">
                    <a href="#">
                      <img
                        src="/src/assets/images/icon user.png"
                        className="rounded-circle"
                        alt="avatar"
                        width="180"
                        height="180"
                        style={{ objectFit: "cover" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
                style={{ background: "transparent" }}
              ></div>
              <div className="card-body pt-0 pt-md-4">
                <div className="row">
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">@item.Point</span>
                        <span className="description">Điểm</span>
                      </div>
                      <div>
                        <span className="heading">@item.Star</span>
                        <span className="description">Sao</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3>
                    @item.FullName
                    <span className="font-weight-light">, @item.Age</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <span style={{ fontSize: "15px" }}>
                      @item.Address, @item.Region, @item.City
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 order-xl-1">
            <div className="card bg-secondary shadow">
              <div className="card-header bg-white border-0">
                <div className="row align-items-center">
                  <div className="col-8">
                    @if (ViewBag.Role != null)
                    {
                      <h3 className="mb-0">
                        Tài khoản của tôi @if (ViewBag.UpdateProfile != null)
                        {<h6> (@ViewBag.UpdateProfile)</h6>}
                      </h3>
                    }
                  </div>
                </div>
              </div>
              <div className="card-body" style={{ backgroundColor: "white" }}>
                <form>
                  <h6 className="heading-small text-muted mb-4">
                    Thông tin người dùng
                  </h6>
                  <div className="pl-lg-4">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Tên đăng nhập
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control form-control-alternative"
                            value="@item.UserName"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="input-email"
                            className="form-control form-control-alternative"
                            value="@item.Email"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label className="form-control-label">Mật khẩu</label>
                          <br />
                          <a href="" className="btn btn-primary">
                            Thay đổi mật khẩu
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Thành phố
                          </label>
                          <input
                            type="text"
                            id="input-last-name"
                            className="form-control form-control-alternative"
                            value=""
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Đất nước
                          </label>
                          <input
                            type="text"
                            id="input-first-name"
                            className="form-control form-control-alternative"
                            value=""
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Địa chỉ nơi ở
                          </label>
                          <input
                            type="text"
                            id="input-last-name"
                            className="form-control form-control-alternative"
                            value=""
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Tên đầy đủ
                          </label>
                          <input
                            type="text"
                            id="input-username"
                            className="form-control form-control-alternative"
                            value=""
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Tuổi
                          </label>
                          <input
                            type="email"
                            id="input-email"
                            className="form-control form-control-alternative"
                            value=""
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group focused">
                          <label
                            className="form-control-label"
                            htmlFor="input-school"
                          >
                            Trường
                          </label>
                          <input
                            type="text"
                            id="input-school"
                            className="form-control form-control-alternative"
                            value="@item.School"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label
                            className="form-control-label"
                            htmlFor="input-class"
                          >
                            Lớp
                          </label>
                          <input
                            type="email"
                            id="input-class"
                            className="form-control form-control-alternative"
                            value="@item.Class"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
