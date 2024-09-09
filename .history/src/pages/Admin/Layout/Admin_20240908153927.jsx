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
import BookList from "../Book/BookList";

const Admin = () => {
  const isUserRoute = location.pathname === "/admin/users";
  const isDashboardRoute = location.pathname === "/admin/dashboard";
  const isBookRoute = location.pathname === "/admin/book";
  const isRoleRoute = location.pathname === "/admin/roles";
  const isInsertRoleRoute = location.pathname === "/admin/role/create";
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
      {/* Sidebar Start  */}
      <LeftMenu></LeftMenu>
      {/* Sidebar End  */}
      {/* Main wrapper  */}
      <div className="body-wrapper">
        <Header></Header>
        {isDashboardRoute && <Dashboard />}
        {isUserRoute && <Users />}
        {isRoleRoute && <Roles />}
        {isInsertRoleRoute && <InsUpRole />}
        {isBookRoute && <BookList />}
      </div>
    </div>
  );
};

export default Admin;
