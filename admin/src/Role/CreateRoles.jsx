import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const CreateRoles = () => {
    const navigation = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    properties: false,
    users: false,
    content: false,
    viewProperties: false,
    waitingApproval: false,
    ownProperty: false,
    reportedProperty: false,
    viewUsers: false,
    subscribedUsers: false,
    unverifiedUsers: false,
    suspendedUsers: false,
    manageRoles: false,
    manageSubscription: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    // Update properties based on related checkboxes
    newFormData.properties =
      newFormData.viewProperties ||
      newFormData.waitingApproval ||
      newFormData.ownProperty ||
      newFormData.reportedProperty;

    // Update users based on related checkboxes
    newFormData.users =
      newFormData.subscribedUsers ||
      newFormData.viewUsers ||
      newFormData.unverifiedUsers ||
      newFormData.suspendedUsers;

    // Update content based on related checkboxes
    newFormData.content =
      newFormData.manageRoles || newFormData.manageSubscription;

    setFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3000/api/roles", formData);
        console.log("Role added:", response.data);
        navigation('/viewRoles')
      } catch (error) {
        console.error("Error adding Role:", error);
      }
    console.log(formData);
  };
  

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">Forms /</span> Role Inputs
              </h4>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Role Name"
                      required
                    />
                  </div>
                </div>
                <div className="card mb-4" style={{ padding: "20px" }}>
                  <div className="row">
                    {Object.keys(formData).map((key) => {
                      if (key !== "name") {
                        return (
                          <div className="col-md-3 mb-4" key={key}>
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={key}
                                name={key}
                                checked={formData[key]}
                                onChange={handleChange}
                              />
                              <label className="form-check-label" htmlFor={key}>
                                {key}
                              </label>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
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

export default CreateRoles;
