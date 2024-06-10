import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import DatatableComponent from "../Components/DatatableComponent";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewRoles = () => {
  const [roles, setRoles] = useState([]);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/roles/${id}`)
      .then(() => {
        console.log("Property deleted successfully");
      })
      .catch((error) => {
        console.error("There was an error deleting the property!", error);
      });
  };
  useEffect(() => {
    fetchProperties();
  }, [roles]);
  const fetchProperties = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/roles");
      const data = await response.json();

      setRoles(data.data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "users",
      label: "User Access",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          if (value === true) {
            return <span className="badge bg-success">Have Access</span>;
          } else {
            return <span className="badge bg-danger">Denied Access</span>;
          }
        },
      },
    },
    {
      name: "viewUsers",
      label: "View Users",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          if (value === true) {
            return <span className="badge bg-success">Have Access</span>;
          } else {
            return <span className="badge bg-danger">Denied Access</span>;
          }
        },
      },
    },
    {
      name: "manageRoles",
      label: "Manage Roles",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          if (value === true) {
            return <span className="badge bg-success">Have Access</span>;
          } else {
            return <span className="badge bg-danger">Denied Access</span>;
          }
        },
      },
    },
    {
      name: "manageSubscription",
      label: "Manage Subscription",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          if (value === true) {
            return <span className="badge bg-success">Have Access</span>;
          } else {
            return <span className="badge bg-danger">Denied Access</span>;
          }
        },
      },
    },
    {
      name: "properties",
      label: "Access to Properties",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          if (value === true) {
            return <span className="badge bg-success">Have Access</span>;
          } else {
            return <span className="badge bg-danger">Denied Access</span>;
          }
        },
      },
    },
    {
      name: "content",
      label: "Manage Contents",
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value) => {
          if (value === true) {
            return <span className="badge bg-success">Have Access</span>;
          } else {
            return <span className="badge bg-danger">Denied Access</span>;
          }
        },
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
  const data = roles.map((property) => {
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
          <a
            className="dropdown-item waves-effect"
            onClick={() => {
              handleDelete(property._id);
            }}
          >
            <i className="mdi mdi-trash-can-outline me-1"></i> Delete
          </a>
        </div>
      </div>
    );
    return {
      ...property,
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
                <span className="text-muted fw-light">Roles /</span> Manage
                Roles
              </h4>
              <Link
                to="/createRoles"
                type="button"
                className="btn btn-primary waves-effect waves-light"
              >
                <span className="tf-icons mdi mdi-checkbox-marked-circle-outline me-1" />
                Add Roles
              </Link>
              <div className="card">
                <div className="table-responsive text-nowrap">
                  <DatatableComponent columns={columns} data={data} />
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

export default ViewRoles;
