import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/mybook.png";
import { navLinks, navRight } from "../../data/data";

//import Use state
import { useState } from "react";

//import Menu Icon
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

export default function Navbar() {
  const [isNavLinksShowing, setIsNavLinksShowing] = useState(false);

  return (
    <nav>
      <div className="container nav-container">
        {/* {logo} */}
        <Link to={"/"} className="logo">
          <img src={Logo} alt="Logo" />
        </Link>
        {/* {Nav-Links} */}
        <ul
          className={`nav-links ${
            isNavLinksShowing ? "navLinksShow" : "navLinkHide"
          }`}
        >
          {navLinks.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* {Nav-Right} */}
        <div className="nav-right">
          {navRight.managements.map((item, index) => {
            return (
              <Link
                key={index}
                // target="blank"
                className="management-icons"
                to={item.link}
              >
                <item.icon />
              </Link>
            );
          })}

          <button
            className="menu-button btn"
            onClick={() => setIsNavLinksShowing(!isNavLinksShowing)}
          >
         {
           isNavLinksShowing ? <GrClose /> : <VscMenu />
         }
          </button>
        </div>
      </div>
    </nav>
  );
}
