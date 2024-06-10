import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import {useNavigate} from "react-router-dom"

const CreateSubscription = () => {
    const navigation = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    smallText: "",
    price: "",
    offers: "",
    subscriptionType: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/subscription", formData);
      console.log("Subscription added:", response.data);
      navigation('/viewSubscription')
    } catch (error) {
      console.error("Error adding subscription:", error);
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
                <span className="text-muted fw-light">Subscription /</span>{" "}
                Create Subscription
              </h4>

              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4">
                    <h5 className="card-header">Subscription Form</h5>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="form-floating form-floating-outline mb-4">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingName"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <label htmlFor="floatingName">Name</label>
                        </div>
                        <div className="form-floating form-floating-outline mb-4">
                          <input
                            type="text"
                            className="form-control"
                            id="smallText"
                            name="smallText"
                            placeholder="Write small Description"
                            value={formData.smallText}
                            onChange={handleChange}
                          />
                          <label htmlFor="floatingName">Description</label>
                        </div>
                        <div className="form-floating form-floating-outline mb-4">
                          <textarea
                            type="text"
                            className="form-control"
                            id="offers"
                            name="offers"
                            placeholder="Write your offers separated by comma"
                            value={formData.offers}
                            onChange={handleChange}
                          />
                          <label htmlFor="floatingName">Offers</label>
                        </div>
                      
                        <div className="form-floating form-floating-outline mb-4">
                          <select
                            className="form-select"
                            id="floatingSubscriptionType"
                            name="subscriptionType"
                            value={formData.subscriptionType}
                            onChange={handleChange}
                          >
                            <option value="">Select Subscription Type</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                            <option value="pro">Pro</option>
                          </select>
                          <label htmlFor="floatingSubscriptionType">
                            Subscription Type
                          </label>
                        </div>
                        <div className="form-floating form-floating-outline mb-4">
                          <input
                            type="date"
                            className="form-control"
                            id="floatingStartDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                          />
                          <label htmlFor="floatingStartDate">Start Date</label>
                        </div>
                        <div className="form-floating form-floating-outline mb-4">
                          <input
                            type="date"
                            className="form-control"
                            id="floatingEndDate"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleChange}
                          />
                          <label htmlFor="floatingEndDate">End Date</label>
                        </div>
                        <div className="form-floating form-floating-outline mb-4">
                          <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            placeholder="Subscription Price of the package"
                            value={formData.price}
                            onChange={handleChange}
                          />
                          <label htmlFor="floatingName">Price</label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
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

export default CreateSubscription;
