const LeftMenu = () => {
  return (
    <aside className="left-sidebar">
      {/* Sidebar scroll */}
      <div>
        <div className="brand-logo d-flex align-items-center justify-content-between">
          <a href="/admin/dashboard" className="text-nowrap logo-img">
            <img src="/src/assets/LOGO2.png" width="100" alt="" />
          </a>
          <div
            className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
            id="sidebarCollapse"
          >
            <i className="ti ti-x fs-8"></i>
          </div>
        </div>
        {/* Sidebar navigation */}
        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
          <ul id="sidebarnav">
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">Home</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/dashboard"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Dashboard</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="/admin/dashboard"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-layout-dashboard"></i>
                </span>
                <span className="hide-menu">Page user</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">UI COMPONENTS</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-buttons.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-article"></i>
                </span>
                <span className="hide-menu">Buttons</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-alerts.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-alert-circle"></i>
                </span>
                <span className="hide-menu">Alerts</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-card.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-cards"></i>
                </span>
                <span className="hide-menu">Card</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-forms.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-file-description"></i>
                </span>
                <span className="hide-menu">Forms</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./ui-typography.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-typography"></i>
                </span>
                <span className="hide-menu">Typography</span>
              </a>
            </li>
            <li className="nav-small-cap">
              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
              <span className="hide-menu">AUTH</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./authentication-login.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-login"></i>
                </span>
                <span className="hide-menu">Login</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link"
                href="./authentication-register.html"
                aria-expanded="false"
              >
                <span>
                  <i className="ti ti-user-plus"></i>
                </span>
                <span className="hide-menu">Register</span>
              </a>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation  */}
      </div>
      {/* End Sidebar scroll */}
    </aside>
  );
};
export default LeftMenu;
