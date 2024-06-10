import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Subscription = () => {
  const [subscription, setSubscription] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/subscription").then((response) => {
      setSubscription(response.data);
    });
  }, [subscription]);
  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);

    // Calculate the difference in days
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Calculate the difference in months
    const diffMonths = Math.ceil(diffDays / 30);

    // Calculate the difference in years
    const diffYears = Math.ceil(diffDays / 365);

    if (diffYears > 1) {
      return `${diffYears} years`;
    } else if (diffMonths > 1) {
      return `${diffMonths} months`;
    } else {
      return `${diffDays} days`;
    }
  };
  return (
    <>
       <div
      className="subscription-container"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {subscription.map((subscribe, index) => (
        <div
          key={index}
          className="single-table wow fadeInUp col-lg-4 col-md-6 col-12"
          data-wow-delay={`${0.4 + index * 0.2}s`}
          style={{
            visibility: "visible",
            animationDelay: `${0.4 + index * 0.2}s`,
            animationName: "fadeInUp",
          }}
        >
          {/* Table Head */}
          <div className="table-head">
            <h4 className="title">{subscribe.name}</h4>
            <p className="sub-title">{subscribe.smallText}</p>
            <div className="price">
              <h4 className="amount">
                <span className="currency">$</span>
                {subscribe.price}
              </h4>
                <span className="duration">for {calculateDuration(subscribe.startDate, subscribe.endDate)}</span>
            </div>
          </div>
          {/* End Table Head */}
          {/* Start Table Content */}
          <div className="table-content">
            {/* Table List */}
            <ul className="table-list">
              {subscribe.offers && subscribe.offers.split(',').map((offer, i) => (
                <li key={i}>{offer.trim()}</li>
              ))}
            </ul>
            {/* End Table List */}
          </div>
          {/* End Table Content */}
          <div className="button">
            <Link to="/payment" className="btn">
              Subscribe <i className="lni lni-arrow-right" />
            </Link>
          </div>
          <p className="no-card">Easy payment using Chapa</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Subscription;
