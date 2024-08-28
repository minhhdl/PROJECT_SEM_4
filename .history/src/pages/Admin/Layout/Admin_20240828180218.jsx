import LeftMenu from "../LeftMenu/LeftMenu.jsx";
import Header from "../Header/Header.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";

const Admin = () => {
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
        {/* Header Start  */}
        <Header></Header>
        {/* Header End  */}
        {/* Content Start */}
        <Dashboard></Dashboard>
        {/* Content End */}
      </div>
    </div>
  );
};

export default Admin;
