import React, { useState } from 'react';
import { register } from '../../services/authService';
import { useNavigate, Link } from 'react-router-dom';
import NavigationBar from '../NavigationBar';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    userName: '',
    state: '',
    userType: 'seller',
    userRoles: 'seller'
  });

  const history = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      history('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <NavigationBar />
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Sign Up</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Sign Up</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="account-login section">
      <div className="container" style={{ marginTop: '-5vh' }}>
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
            <form className="card login-form inner-content" method="post" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="title">
                  <h3>Sign Up Now</h3>
                  <p>Use the form below to create your account.</p>
                </div>
                <div className="input-head">
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-user" />
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstName"
                          placeholder="First Name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group input-group">
                        <label>
                          <i className="lni lni-user" />
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="lastName"
                          placeholder="Last Name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group input-group">
                    <label>
                      <i className="lni lni-envelope" />
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group input-group">
                    <label>
                      <i className="lni lni-phone" />
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="phoneNumber"
                      placeholder="Your phone number"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group input-group">
                    <label>
                      <i className="lni lni-user" />
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="userName"
                      placeholder="Username"
                      value={formData.userName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group input-group">
                    <label>
                      <i className="lni lni-map-marker" />
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="state"
                      placeholder="State"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group input-group">
                    <label>
                      <i className="lni lni-lock-alt" />
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="button">
                  <button className="btn" type="submit">
                    Create Account
                  </button>
                </div>
                <h4 className="create-account">
                  Already have an account? <Link to="/signin">Sign In</Link>
                </h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
