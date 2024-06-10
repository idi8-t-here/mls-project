import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    console.log("logout clicked");
    navigate("/");
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <button className="nav-item nav-link px-0 me-xl-4" onClick={() => {}}>
          <i className="mdi mdi-menu mdi-24px" />
        </button>
      </div>
      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        {/* Search */}
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="mdi mdi-magnify mdi-24px lh-0" />
            <input
              type="text"
              className="form-control border-0 shadow-none bg-body"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>
        {/* /Search */}
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* User */}
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <button
              className="nav-link dropdown-toggle hide-arrow p-0"
              onClick={() => {}}
              data-bs-toggle="dropdown"
            >
              <div className="avatar avatar-online">
                <img
                  src="../assets/img/avatars/1.png"
                  alt=""
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </button>
            <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
              <li>
                <div className="dropdown-item pb-2 mb-1 waves-effect">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0 me-2 pe-1">
                      <div className="avatar avatar-online">
                        <img
                          src="../assets/img/avatars/1.png"
                          alt=""
                          className="w-px-40 h-auto rounded-circle"
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-0">
                        {user?.firstName} {user?.lastName}
                      </h6>
                      <small className="text-muted">{user?.userRoles}</small>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown-divider my-1" />
              </li>
              <li>
                <Link
                  to="/accountSettings"
                  className="dropdown-item waves-effect"
                >
                  <i className="mdi mdi-account-outline me-1 mdi-20px" />
                  <span className="align-middle">My Profile</span>
                </Link>
              </li>
              <li>
                <div className="dropdown-divider my-1" />
              </li>
              <li>
                <button
                  className="dropdown-item waves-effect"
                  onClick={handleLogout}
                >
                  <i className="mdi mdi-power me-1 mdi-20px" />
                  <span className="align-middle">Log Out</span>
                </button>
              </li>
            </ul>
          </li>
          {/*/ User */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
