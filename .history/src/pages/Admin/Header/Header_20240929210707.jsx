import { useState } from "react";
import Cookies from "js-cookie";
import "../Header/Header.css";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  var handleClickOff = function () {
    Cookies.set("offTheVoice", "true");
    window.location.reload();
  };

  var handleClickOn = function () {
    Cookies.remove("offTheVoice");
    window.location.reload();
  };

  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav">
          <li className="nav-item d-block d-xl-none">
            <a
              className="nav-link sidebartoggler nav-icon-hover"
              id="headerCollapse"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <i className="ti ti-menu-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link nav-icon-hover"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <i className="ti ti-bell-ringing"></i>
              <div className="notification bg-primary rounded-circle"></div>
            </a>
          </li>
        </ul>
        <div
          className="navbar-collapse justify-content-end px-0"
          id="navbarNav"
        >
          <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon-hover"
                href="#"
                onClick={() => setShowDropdown(!showDropdown)}
                id="drop2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/src/assets/images/profile/user-1.jpg"
                  alt="avatar"
                  width="35"
                  height="35"
                  className="rounded-circle"
                />
              </a>
              {showDropdown && (
                <div
                  className="absolute bg-white dropdown-menu-end dropdown-menu-animate-up"
                  aria-labelledby="drop2"
                  style={{ right: "0px" }}
                >
                  <div className="message-body">
                    <a
                      href={`/profile/${Cookies.get("userId")}`}
                      className="d-flex align-items-center gap-2 dropdown-item"
                    >
                      <i className="ti ti-user fs-6"></i>
                      <p className="mb-0 fs-3">My Profile</p>
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="d-flex align-items-center gap-2 dropdown-item"
                    >
                      <i className="ti ti-mail fs-6"></i>
                      <p className="mb-0 fs-3">My Account</p>
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="d-flex align-items-center gap-2 dropdown-item"
                    >
                      <i className="ti ti-list-check fs-6"></i>
                      <p className="mb-0 fs-3">My Task</p>
                    </a>
                    {Cookies.get("offTheVoice") === "false" ||
                      (Cookies.get("offTheVoice") == null && (
                        <button onClick={handleClickOff}>
                          <i className="ti ti-toggle-left fs-6"></i> Turn off
                          the voice
                        </button>
                      ))}
                    {Cookies.get("offTheVoice") === "true" && (
                      <button onClick={handleClickOn}>
                        {" "}
                        <i className="ti ti-toggle-right fs-6"></i> Turn on the
                        voice
                      </button>
                    )}
                    <a
                      href="/sign-out"
                      className="btn btn-outline-primary mx-3 mt-2 d-block"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
