import React from "react";
import { Link } from "react-router-dom";

const SignInWarning = () => {
  return (
    <div className="error-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="error-content">
              <h1>401</h1>
              <h2>
                You need to sign in 
                <br /> to be authorized to this page.
              </h2>
              <p></p>
              <div className="button">
                <Link to="/signin" className="btn">
                  Continue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInWarning;
