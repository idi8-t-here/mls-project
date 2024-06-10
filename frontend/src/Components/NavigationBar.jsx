import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NavigationBar = () => {
  // const { user, logout } = useContext(AuthContext);
  // console.log(user)
  const navigate = useNavigate();
  const users = sessionStorage.getItem("users");
  const user = JSON.parse(users);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/api/user/email/${user.email}`)
        .then((response) => {
          console.log(response.data.data.user);
        });
    }
  }, []);

  return (
    <header className="header navbar-area ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="nav-inner">
              {/* Start Navbar */}
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/images/logo/logo.svg" alt="Logo" />
                </a>
                <button
                  className="navbar-toggler mobile-menu-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                  <span className="toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarSupportedContent"
                >
                  <ul id="nav" className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link
                        to="/"
                        className="nav-link"
                        aria-label="Toggle navigation"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/listings"
                        className="nav-link"
                        aria-label="Toggle navigation"
                      >
                        View Properties
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/addProperty"
                        className="nav-link"
                        aria-label="Toggle navigation"
                      >
                        Add Properties
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#"
                        data-toggle="dropdown"
                        
                      >
                        img
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                        style={{marginTop:"-25px"}}
                      >
                         <Link className="dropdown-item" to="/viewProfile" style={{color:"#144f3d", justifyContent:"center", height: "3px", padding:"23px"}}>
                          View Profile
                        </Link>
                        


                        {!users ? (
                        <Link
                          to="/signin"
                          className="dropdown-item"
                          style={{color:"#144f3d", justifyContent:"center", height: "3px", padding:"23px"}}
                          aria-label="Toggle navigation"
                        >
                          Signin
                        </Link>
                      ) : (
                        <a
                          to="/"
                          onClick={() => {
                            sessionStorage.clear();
                            navigate("/");
                          }}
                          className="dropdown-item"
                          style={{color:"#144f3d", justifyContent:"center", height: "3px", padding:"23px"}}
                          aria-label="Toggle navigation"
                        >
                          Signout
                        </a>)}



                       
                      </div>
                    </li>

                    {/* {user ? (
                      <>
                        <li className="nav-item">
                          <Link to="/" className="nav-link" aria-label="Toggle navigation">
                            Welcome, {user.userName}
                          </Link>
                        </li>
                        <li className="nav-item">
                          <button onClick={logout} className="btn btn-danger">
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <Link to="/login" className="nav-link" aria-label="Toggle navigation">
                            Sign In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/register" className="nav-link" aria-label="Toggle navigation">
                            Sign Up
                          </Link>
                        </li>
                      </>
                    )} */}
                  </ul>
                </div>{" "}
                {/* navbar collapse */}
              </nav>
              {/* End Navbar */}
            </div>
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </header>
  );
};

export default NavigationBar;
