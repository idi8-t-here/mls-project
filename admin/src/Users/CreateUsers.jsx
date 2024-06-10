import React, { useState, useEffect } from "react";
import Input from "../Components/InputComponent";
import Select from "../Components/SelectComponent";
import Checkbox from "../Components/CheckboxComponent";
import { register } from "../services/authService";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUsers = () => {
  const [roles, setRoles] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    state: "",
    userName: "",
    image: "",
    userRoles: "",
    userType: "Manager",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/roles")
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setRoles(response.data.data);
        } else {
          console.error("Roles data is not an array:", response.data);
          setRoles([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
        setRoles([]);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      register(formData);
      console.log(formData);
      console.log("user added sucessfully");
      navigate("/viewUsers");
    } catch (error) {
      console.error("Error during login:", error);

      alert("Wrong input, try again.");
    }
  };
  // axios
  //   .post("http://localhost:3000/user", formData)
  //   .then(() => {
  //     console.log("User created successfully");
  //     navigate("/viewUsers");
  //   })
  //   .catch((error) => {
  //     console.error("Error creating user:", error);
  //   });

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">Users /</span> Create
                Users
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
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="Enter your First Name"
                            />
                            <Input
                              label="Last Name"
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Enter your Last Name"
                            />
                            <Input
                              label="Email"
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter Email Address"
                            />
                            <Input
                              label="Phone Number"
                              type="text"
                              id="phoneNumber"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleChange}
                              placeholder="Enter Phone Number"
                            />
                            <Input
                              label="State"
                              type="text"
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              placeholder="Enter your State"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="mb-4">
                        <div className="card-body">
                          <Select
                            label="Roles"
                            id="userRoles"
                            name="userRoles"
                            value={formData.userRoles}
                            onChange={handleChange}
                            options={roles.map((role) => ({
                              value: role.name,
                              label: role.name,
                            }))}
                          />
                          <Input
                            label="Select Profile"
                            type="file"
                            id="image"
                            name="image"
                            onChange={handleFileChange}
                            required
                          />
                          <Input
                            label="User Name"
                            type="text"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Enter your User Name"
                          />

                          <Input
                            label="Password"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                          />
                          <Input
                            label="Confirm Password"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            onChange={handleChange}
                            placeholder="Confirm Password"
                          />

                          <button
                            type="submit"
                            className="btn btn-info waves-effect waves-light"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
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

export default CreateUsers;
