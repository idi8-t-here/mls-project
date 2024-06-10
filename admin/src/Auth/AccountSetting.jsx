import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AccountSetting = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    organization: "",
    address: "",
    state: "",
    zipCode: "",
    country: "",
    language: "",
    timeZone: "",
    currency: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const response = await axios.get(`http://localhost:3000/api/user/${users._id}`);
          setUser(response.data.data.user);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3000/api/user/${users._id}`, user); // Replace USER_ID with the actual user ID
      console.log("User updated:", response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeactivateAccountSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.delete(`http://localhost:3000/api/user/${users._id}`); 
      console.log("User deactivated");
      navigate('/')
    } catch (err) {
      console.error(err);
    }
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
                <span className="text-muted fw-light">Account Settings /</span> Account
              </h4>
              <div className="row">
                <div className="col-md-12">
                  <ul className="nav nav-pills flex-column flex-md-row mb-4 gap-2 gap-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active waves-effect waves-light" href="#">
                        <i className="mdi mdi-account-outline mdi-20px me-1" />
                        Account
                      </a>
                    </li>
                    
                   
                  </ul>
                  <div className="card mb-4">
                    <h4 className="card-header">Profile Details</h4>
                    <div className="card-body">
                      <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <img src="../assets/img/avatars/1.png" alt="user-avatar" className="d-block w-px-120 h-px-120 rounded" id="uploadedAvatar" />
                        <div className="button-wrapper">
                          <label htmlFor="upload" className="btn btn-primary me-2 mb-3 waves-effect waves-light">
                            <span className="d-none d-sm-block">Upload new photo</span>
                            <i className="mdi mdi-tray-arrow-up d-block d-sm-none" />
                            <input type="file" id="upload" className="account-file-input" hidden accept="image/png, image/jpeg" />
                          </label>
                          
                          <div className="text-muted small">Allowed JPG, GIF or PNG. Max size of 800K</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body pt-2 mt-1">
                      <form id="formAccountSettings" onSubmit={handleFormSubmit}>
                        <div className="row mt-2 gy-4">
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <input className="form-control" type="text" id="firstName" name="firstName" value={user.firstName} onChange={handleInputChange} autoFocus />
                              <label htmlFor="firstName">First Name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <input className="form-control" type="text" name="lastName" id="lastName" value={user.lastName} onChange={handleInputChange} />
                              <label htmlFor="lastName">Last Name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <input className="form-control" type="email" id="email" name="email" value={user.email} onChange={handleInputChange} placeholder="john.doe@example.com" />
                              <label htmlFor="email">E-mail</label>
                            </div>
                          </div>
                          
                          <div className="col-md-6">
                            <div className="input-group input-group-merge">
                              <div className="form-floating form-floating-outline">
                                <input type="text" id="phoneNumber" name="phoneNumber" className="form-control" value={user.phoneNumber} onChange={handleInputChange} placeholder="202 555 0111" />
                                <label htmlFor="phoneNumber">Phone Number</label>
                              </div>
                              <span className="input-group-text">ETH (+251)</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <input type="text" className="form-control" id="address" name="address" value={user.state} onChange={handleInputChange} placeholder="Address" />
                              <label htmlFor="address">Address</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <input className="form-control" type="text" id="state" name="state" value={user.state} onChange={handleInputChange} placeholder="California" />
                              <label htmlFor="state">State</label>
                            </div>
                          </div>
                          
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <select id="country" name="country" value={user.country} onChange={handleInputChange} className="select2 form-select">
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Australia">Australia</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Canada">Canada</option>
                                <option value="China">China</option>
                                <option value="France">France</option>
                                <option value="Germany">Germany</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Japan">Japan</option>
                                <option value="Korea">Korea, Republic of</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Russia">Russian Federation</option>
                                <option value="South Africa">South Africa</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                              </select>
                              <label htmlFor="country">Country</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <select id="language" name="language" value={user.language} onChange={handleInputChange} className="select2 form-select">
                                <option value="">English</option>
                                <option value="English">English</option>
                                <option value="Amharic">Amharic</option>
                                <option value="Oromic">Oromic</option>
                              </select>
                              <label htmlFor="language">Language</label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <button type="submit" className="btn btn-primary me-2 waves-effect waves-light">
                            Save changes
                          </button>
                          
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card">
                    <h4 className="card-header">Delete Account</h4>
                    <div className="card-body">
                      <div className="mb-3 col-12 mb-0">
                        <div className="alert alert-warning">
                          <h5 className="alert-heading">Are you sure you want to delete your account?</h5>
                          <p>Once you delete your account, there is no going back. Please be certain.</p>
                        </div>
                      </div>
                      <form id="formAccountDeactivation" onSubmit={handleDeactivateAccountSubmit}>
                        <div className="form-check mb-3">
                          <input className="form-check-input" type="checkbox" name="accountActivation" id="accountActivation" />
                          <label className="form-check-label" htmlFor="accountActivation">
                            I confirm my account deactivation
                          </label>
                        </div>
                        <button type="submit" className="btn btn-danger deactivate-account waves-effect">
                          Deactivate Account
                        </button>
                      </form>
                    </div>
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

export default AccountSetting;
