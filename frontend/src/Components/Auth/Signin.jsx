import React, { useState } from "react";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData).then(
        sessionStorage.setItem('users', JSON.stringify(formData))
      );

      navigate("/listings");
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
                <h1 className="page-title">Sign In</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>Sign In</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="account-login section">
        <div className="container" style={{ marginTop: "-5vh" }}>
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
              <form
                className="card login-form inner-content"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="card-body">
                  <div className="title">
                    <h3>Sign In Now</h3>
                    <p>Sign in by entering the information below.</p>
                  </div>
                  <div className="input-head">
                    <div className="form-group input-group">
                      <label>
                        <i className="lni lni-envelope" />
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
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
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between bottom-content">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input width-auto"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label">Remember me</label>
                    </div>
                    <a className="lost-pass" href="reset-password.html">
                      Forgot password?
                    </a>
                  </div>
                  <div className="button">
                    <button className="btn" type="submit">
                      Sign In
                    </button>
                  </div>
                  <div className="or">
                    <span>Or</span>
                  </div>
                 
                  <h4 className="create-account">
                    Don't have an account? <a href="/register">Sign Up Here</a>
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

export default Signin;
