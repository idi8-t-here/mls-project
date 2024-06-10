import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const fetchProperty = async (id) => {
    try {
      axios.get(`http://localhost:3000/api/user/${id}`).then((response) => {
        console.log(response.data.data.user);
        setUser(response.data.data.user);
      });
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  };
  useEffect(() => {
    fetchProperty(id);
  }, [id]);
  console.log(user);
  
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">Users /</span> View User
              </h4>
              <div className="card pt-5">
                <div className="">
                  <div className="row">
                    {/* Basic */}
                    <div className="col-md-4">
                      <div className="card mb-4">
                        <h5 className="card-header">User Info</h5>
                        <div className="card-body demo-vertical-spacing demo-only-element">
                          <div className="card h-100">
                            <img
                              src={
                                user.image
                                  ? `http://localhost:3000/${user.image}`
                                  : "http://localhost:3000/uploads/sample.jpg"
                              }
                            />
                            <div className="card-body">
                              <h5 className="card-title"></h5>
                              <p className="card-text">
                                {user.firstName} {user.lastName}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Merged */}
                    <div className="col-md-8">
                      <div className="col">
                        <div className="card mb-4">
                          <h5 className="card-header">Personal Information </h5>
                          <div className="card-body">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      First Name:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{user.firstName}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Last Name:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{user.lastName}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="card mb-4">
                          <h5 className="card-header">Contact Information </h5>
                          <div className="card-body">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Email:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{user.email}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Phone Number:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{user.phoneNumber}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      State:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{user.State}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="card mb-4">
                          <h5 className="card-header">Account Information </h5>
                          <div className="card-body">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Username:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{user.userName}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      User Roles:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{user.userRoles}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      User Status:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{user.Status}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="card mb-4">
                          <h5 className="card-header">Additional Info</h5>
                          <div className="card-body">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      User Status:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{user.userStatus}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      User Type:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{user.userType}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Sizing */}
                  </div>
                </div>
              </div>
            </div>
            <div className="content-backdrop fade" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
