import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import DatatableComponent from "../Components/DatatableComponent";
import { Link } from "react-router-dom";
import axios from 'axios'

const UnverifiedUsers = () => {
    const [users, setUsers] = useState([]);
    const handleDelete = (id)=>{
      axios.delete(`http://localhost:3000/api/user/${id}`)
        .then(() => {
          console.log("user rejected successfully");
        })
        .catch(error => {
          console.error("There was an error rejecting the user!", error);
        });
    }
    const handleVerify = (id)=>{
      axios.patch(`http://localhost:3000/api/user/${id}`)
        .then(() => {
          console.log("user verified successfully");
        })
        .catch(error => {
          console.error("There was an error approving the user!", error);
        });
        window.reload()
    }
    const handleReject = (id)=>{
      axios.patch(`http://localhost:3000/api/user/reject/${id}`)
        .then(() => {
          console.log("user reject successfully");
        })
        .catch(error => {
          console.error("There was an error rejecting the user!", error);
        });
        window.reload()
    }

    useEffect(() => {
        fetchUsers();
      }, [users]);
      const fetchUsers = async () => {
        try {
          const response = await fetch("http://localhost:3000/api/user");
          const data = await response.json();
      
          const filteredUsers = data.data.users.filter(user => {
            return user.userStatus === "unverified";
          });
      
          setUsers(filteredUsers);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
      

    const columns = [
      {
        name: "firstName",
        label: "First Name",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "lastName",
        label: "LastName",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "phoneNumber",
        label: "Phone Number",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "email",
        label: "Email",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "userRoles",
        label: "Roles",
        options: {
          filter: true,
          sort: false,
        },
      },
        {
          name: "userStatus",
          label: "User Status",
          options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                if(value === "verified"){
                    return <span className="badge rounded-pill bg-label-success me-1">Verified</span>
                } else if(value === "unverified"){
                    return <span className="badge rounded-pill bg-label-danger me-1">UnVerified</span>
                }
                else {
                  return <span className="badge rounded-pill bg-label-warning me-1">Undetermined</span>;
                }
              }
              
          },
        },
        {
          name: "dropdown",
          label: "Actions",
          options: {
            filter: false,
            sort: false,
          },
        },
      ];
      const data = users.map((user) => {
        const updatedMenu = (
          <div className="dropdown">
          <button
            type="button"
            className="btn p-0 dropdown-toggle hide-arrow"
            data-bs-toggle="dropdown"
          >
            <i className="mdi mdi-dots-vertical"></i>
          </button>
          <div className="dropdown-menu">
            <Link to={`/viewUser/${user._id}`} className="dropdown-item waves-effect">
              <i className="mdi mdi-book me-1"></i> View User
            </Link>
            <a className="dropdown-item waves-effect" onClick={()=>{handleVerify(user._id)}}>
                <i className="mdi mdi-check me-1"></i> Verify User
              </a>
            
            <a className="dropdown-item waves-effect" onClick={()=>{handleReject(user._id)}}>
              <i className="mdi mdi-cancel me-1"></i> Reject User
            </a>
          </div>
        </div>
        );
        return {
          ...user,
          dropdown: updatedMenu,
        };
      });

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">Users /</span> Verify users
                
              </h4>
              <div className="card">
                <div className="table-responsive text-nowrap">
                  <DatatableComponent columns={columns} data={data}/>
                </div>
              </div>
            </div>
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl">
                <div className="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
                  <div className="text-body mb-2 mb-md-0">
                    © 2024 , made with{" "}
                    <span className="text-danger">
                      <i className="tf-icons mdi mdi-heart" />
                    </span>{" "}
                    by
                    <a
                      href="https://themeselection.com"
                      target="_blank"
                      className="footer-link fw-medium"
                    >
                      ThemeSelection
                    </a>
                  </div>
                  <div className="d-none d-lg-inline-block">
                    <a
                      href="https://themeselection.com/license/"
                      className="footer-link me-3"
                      target="_blank"
                    >
                      License
                    </a>
                    <a
                      href="https://themeselection.com/"
                      target="_blank"
                      className="footer-link me-3"
                    >
                      More Themes
                    </a>
                    <a
                      href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/"
                      target="_blank"
                      className="footer-link me-3"
                    >
                      Documentation
                    </a>
                    <a
                      href="https://github.com/themeselection/materio-bootstrap-html-admin-template-free/issues"
                      target="_blank"
                      className="footer-link"
                    >
                      Support
                    </a>
                  </div>
                </div>
              </div>
            </footer>
            <div className="content-backdrop fade" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnverifiedUsers;
