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
import CateBook from "../CategoryBook/CateBook";
import InsUpCateBook from "../CategoryBook/InsUpCateBook";
import Cookies from "js-cookie";

const Admin = () => {
  const isUserRoute = location.pathname === "/admin/users";
  const isDashboardRoute = location.pathname === "/admin/dashboard";
  const isBookRoute = location.pathname === "/admin/book";
  const isCateBookRoute = location.pathname === "/admin/cate-book";
  const isCreateCateBookRoute = location.pathname === "/admin/cate-book/create";
  return Cookies.get("username") === "Admin" ? (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      {/* Sidebar Start  */}
      <LeftMenu></LeftMenu>
      {/* Sidebar End  */}
      {/* Main wrapper  */}
      <div className="body-wrapper">
        <Header></Header>
        {isDashboardRoute && <Dashboard />}
        {isUserRoute && <Users />}
        {isBookRoute && <Book />}
        {isCateBookRoute && <CateBook />}
      </div>
    </div>
  ) : (
    (window.location.href = "/")
  );
};

export default Admin;
