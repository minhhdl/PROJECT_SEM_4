import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/LOGO2.png";
import { navLinks } from "../../data/data";
import ReponsiveMenu from "./ReponsiveMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import Cookies from "js-cookie";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolledBlur, setIsScrolledBlur] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setShowMobileMenu(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolledBlur(true);
      } else {
        setIsScrolledBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="text-white top-2 fixed w-full z-[9990]">
        <div
          className={`${
            isScrolledBlur
              ? "backdrop-blur-3xl"
              : "backdrop-blur-0 bg-transparent"
          } bg-black/50 container flex justify-between items-center rounded-full h-[60px] transition-all duration-300 ease-in-out`}
        >
          {/* Logo */}
          <Link to="/" className="logo">
            <img className="max-w-[100px]" src={Logo} alt="Logo" />
          </Link>
          {/* Navlinks */}
          <div>
            <ul className="flex items-center gap-10">
              {navLinks.map(({ name, path }, index) => (
                <li key={index} className="hidden md:block">
                  <NavLink
                    className="uppercase text-sm hover:border-b border-primary duration-200"
                    to={path}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
              <li className="flex items-center gap-4">
                {/* Btn Login */}
                {Cookies.get("username") && (
                  <a
                    href="/sign-in"
                    className="border border-white px-4 py-2 rounded-full hover:bg-primaryHover transition-all duration-300 ease-in-out"
                  >
                    Login
                  </a>
                )}
                {!Cookies.get("username") && (
                  <a
                    href="/sign-in"
                    className="border border-white px-4 py-2 rounded-full hover:bg-primaryHover transition-all duration-300 ease-in-out"
                  >
                    Login
                  </a>
                )}
                {/* Btn show menu */}
                <button
                  onClick={() => setShowMobileMenu(!showMobileMenu)}
                  className="block md:hidden text-2xl font-bold"
                >
                  <RxHamburgerMenu />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* ShowMenu */}
        <div ref={menuRef}>
          <ReponsiveMenu showMobileMenu={showMobileMenu} />
        </div>
      </nav>
    </>
  );
}
