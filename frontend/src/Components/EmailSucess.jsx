import React from "react";
import { Link, useNavigate } from "react-router-dom";
const EmailSucess = () => {
    const navigate = useNavigate()
  return (
    <div className="maill-success">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="success-content">
              <h1>Awesome!</h1>
              <p>
                Your message sent successfully, We will <br /> get back to you
                asap.
              </p>
              <div className="button">
                <a onClick={()=>{navigate(-1)}} className="btn">
                  Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSucess;
