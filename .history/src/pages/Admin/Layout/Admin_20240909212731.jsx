import "../../../assets/css/styles.min.css";
import "../../../assets/libs/jquery/dist/jquery.min.js";
import "../../../assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../assets/js/sidebarmenu.js";
import "../../../assets/js/app.min.js";
import "../../../assets/libs/apexcharts/dist/apexcharts.js";
import "../../../assets/libs/simplebar/dist/simplebar.js";
import "../../../assets/js/dashboard.js";
import LeftMenu from "../LeftMenu/LeftMenu.jsx";
import Header from "../Header/Header.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import Users from "../Users/Users.jsx";
import Roles from "../Roles/Roles.jsx";
import InsUpRole from "../Roles/InsUpRole.jsx";
import Book from "../Book/Book";
import Cookies from "js-cookie";

const Admin = () => {
  const isUserRoute = location.pathname === "/admin/users";
  const isDashboardRoute = location.pathname === "/admin/dashboard";
  const isBookRoute = location.pathname === "/admin/book";
  const isRoleRoute = location.pathname === "/admin/roles";
  const isInsertRoleRoute = location.pathname === "/admin/role/create";
  return Cookies.get("username") ? "" : "";
};

export default Admin;
