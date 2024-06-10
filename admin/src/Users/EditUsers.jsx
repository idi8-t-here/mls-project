import React, { useState, useEffect } from "react";
import Input from "../Components/InputComponent";
import Select from "../Components/SelectComponent";
import Checkbox from "../Components/CheckboxComponent";
import Textarea from "../Components/TextAreaComponent";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUsers = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [subscription, setSubscription] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    state: "",
    userName: "",
    userRoles: "",
    userType: "Manager",
  });
  useEffect(() => {
    try {
      axios.get("http://localhost:3000/api/subscription").then((response) => {
        setSubscription(response.data);
      });
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
    }
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/user/${id}`)
      .then((response) => {
        console.log(response.data);
        setCurrentUser(response.data.data.user);
        console.log(currentUser);
      })
      .catch((error) => {
        console.error("There was an error fetching the property data!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setCurrentUser((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  console.log(subscription);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/api/user/${id}`, currentUser)
      .then(() => {
        console.log("Property updated successfully");
        navigate("/viewUsers");
      })
      .catch((error) => {
        console.error("There was an error updating the property!", error);
      });
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
                <span className="text-muted fw-light">Properties /</span> Edit
                Property
              </h4>
              <div className="card">
                <div className="">
                  <form onSubmit={handleSubmit} className="row">
                    <div className="col-md">
                      <div className="mb-4">
                        <div className="card-body pt-4">
                          <div className="form-floating form-floating-outline">
                            <Input
                              label="First Name"
                              type="text"
                              id="firstName"
                              name="title"
                              value={currentUser.firstName}
                              onChange={handleChange}
                              placeholder="First Name"
                            />
                            <Input
                              type="text"
                              label="Last Name"
                              id="lastName"
                              name="lastName"
                              value={currentUser.lastName}
                              onChange={handleChange}
                            />
                            <Input
                              label="Email"
                              type="email"
                              id="email"
                              name="address"
                              value={currentUser.email}
                              onChange={handleChange}
                            />
                            <Input
                              label="Phone Number"
                              type="number"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={currentUser.phoneNumber}
                              onChange={handleChange}
                            />
                            <Input
                              label="Current User"
                              type="text"
                              id="state"
                              name="state"
                              value={currentUser.state}
                              onChange={handleChange}
                            />
                            <Input
                              label="User Name"
                              type="text"
                              id="userName"
                              name="price"
                              value={currentUser.userName}
                              onChange={handleChange}
                            />
                            <Input
                              label="User Roles"
                              type="text"
                              id="userRoles"
                              name="userRoles"
                              value={currentUser.userRoles}
                              onChange={handleChange}
                            />
                            <Select
                              label="Subscription"
                              id="subscription"
                              name="subscription"
                              value={currentUser.subscription}
                              onChange={handleChange}
                              options={[
                                { value: "free", label: "Free" },
                                ...subscription.map((sub) => ({
                                  value: sub.name,
                                  label: sub.name,
                                })),
                              ]}
                            />
                            <Select
                              label="User Status"
                              id="userStatus"
                              name="userStatus"
                              value={currentUser.userStatus}
                              onChange={handleChange}
                              options={[
                                { value: "verified", label: "Verified" },
                                { value: "unverified", label: "Unverified" },
                                
                              ]}
                            />

                            <Input
                              label="Password"
                              type="password"
                              id="password"
                              name="password"
                              value={currentUser.password}
                              onChange={handleChange}
                              disabled
                            />

                            <button
                              type="submit"
                              className="btn btn-info waves-effect waves-light"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl">
                <div className="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
                  <div className="text-body mb-2 mb-md-0">
                    © 2024, made with{" "}
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

export default EditUsers;
