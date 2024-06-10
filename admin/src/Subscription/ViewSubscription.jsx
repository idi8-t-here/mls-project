import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import DatatableComponent from "../Components/DatatableComponent";
import { Link } from "react-router-dom";

const ViewSubscription = () => {
  const [subscription, setSubscription] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);
  const fetchProperties = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/subscription");
      const data = await response.json();

      setSubscription(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching subscriptions:", error);
    }
  };
  const handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:3000/api/subscription/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Subscription deleted successfully') {
        setSubscription(subscription.filter(sub => sub._id !== id));
      } else {
        alert('Failed to delete subscription');
      }
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
                <span className="text-muted fw-light">subscriptions /</span>{" "}
                View Subscription
              </h4>
              <Link
                to="/addSubscription"
                type="button"
                className="btn btn-primary waves-effect waves-light"
              >
                <span className="tf-icons mdi mdi-checkbox-marked-circle-outline me-1" />
                Add Subscription
              </Link>

              <div className="card text-center mt-3">
                {subscription.map((sub, index) => (
                  <div key={index} className="card mb-3">
                    <div className="card-header d-flex justify-content-between align-items-center">
                      <span>{sub.subscriptionType}</span>
                      <button
                        onClick={() => handleDelete(sub._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{sub.name}</h5>
                      <p className="card-text">
                        Start Date:{" "}
                        {new Date(sub.startDate).toLocaleDateString()}
                        <br />
                        End Date: {new Date(sub.endDate).toLocaleDateString()}
                      </p>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        Subscribe
                      </a>
                    </div>
                    <div className="card-footer text-muted">2 days ago</div>
                  </div>
                ))}
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

export default ViewSubscription;
