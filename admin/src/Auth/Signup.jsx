import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="position-relative">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner py-4">
            {/* Register Card */}
            <div className="card p-2">
              {/* Logo */}
              <div className="app-brand justify-content-center mt-5">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo">
                    <span style={{ color: "var(--bs-primary)" }}>
                      <svg
                        width={30}
                        height={24}
                        viewBox="0 0 250 196"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.3002 1.25469L56.655 28.6432C59.0349 30.1128 60.4839 32.711 60.4839 35.5089V160.63C60.4839 163.468 58.9941 166.097 56.5603 167.553L12.2055 194.107C8.3836 196.395 3.43136 195.15 1.14435 191.327C0.395485 190.075 0 188.643 0 187.184V8.12039C0 3.66447 3.61061 0.0522461 8.06452 0.0522461C9.56056 0.0522461 11.0271 0.468577 12.3002 1.25469Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.077704"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 65.2656L60.4839 99.9629V133.979L0 65.2656Z"
                          fill="black"
                        />
                        <path
                          opacity="0.077704"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 65.2656L60.4839 99.0795V119.859L0 65.2656Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M237.71 1.22393L193.355 28.5207C190.97 29.9889 189.516 32.5905 189.516 35.3927V160.631C189.516 163.469 191.006 166.098 193.44 167.555L237.794 194.108C241.616 196.396 246.569 195.151 248.856 191.328C249.605 190.076 250 188.644 250 187.185V8.09597C250 3.64006 246.389 0.027832 241.935 0.027832C240.444 0.027832 238.981 0.441882 237.71 1.22393Z"
                          fill="currentColor"
                        />
                        <path
                          opacity="0.077704"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M250 65.2656L189.516 99.8897V135.006L250 65.2656Z"
                          fill="black"
                        />
                        <path
                          opacity="0.077704"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M250 65.2656L189.516 99.0497V120.886L250 65.2656Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2787 1.18923L125 70.3075V136.87L0 65.2465V8.06814C0 3.61223 3.61061 0 8.06452 0C9.552 0 11.0105 0.411583 12.2787 1.18923Z"
                          fill="white"
                          fillOpacity="0.15"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M237.721 1.18923L125 70.3075V136.87L250 65.2465V8.06814C250 3.61223 246.389 0 241.935 0C240.448 0 238.99 0.411583 237.721 1.18923Z"
                          fill="white"
                          fillOpacity="0.3"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="app-brand-text demo text-heading fw-semibold">
                    Materio
                  </span>
                </a>
              </div>
              {/* /Logo */}
              <div className="card-body mt-2">
                <h4 className="mb-2">Adventure starts here 🚀</h4>
                <p className="mb-4">Make your app management easy and fun!</p>
                <form
                  id="formAuthentication"
                  className="mb-3"
                  action="index.html"
                >
                  <div className="form-floating form-floating-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      placeholder="Enter your username"
                      autofocus=""
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating form-floating-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="input-group input-group-merge">
                      <div className="form-floating form-floating-outline">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="············"
                          aria-describedby="password"
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                      <span className="input-group-text cursor-pointer">
                        <i className="mdi mdi-eye-off-outline" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms-conditions"
                        name="terms"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="terms-conditions"
                      >
                        I agree to
                        <a href="javascript:void(0);">
                          privacy policy &amp; terms
                        </a>
                      </label>
                    </div>
                  </div>
                  <button className="btn btn-primary d-grid w-100 waves-effect waves-light">
                    Sign up
                  </button>
                </form>
                <p className="text-center">
                  <span>Already have an account?</span>
                  <a href="auth-login-basic.html">
                    <span>Sign in instead</span>
                  </a>
                </p>
              </div>
            </div>
            {/* Register Card */}
            <img
              src="../assets/img/illustrations/tree-3.png"
              alt="auth-tree"
              className="authentication-image-object-left d-none d-lg-block"
            />
            <img
              src="../assets/img/illustrations/auth-basic-mask-light.png"
              className="authentication-image d-none d-lg-block"
              alt="triangle-bg"
              data-app-light-img="illustrations/auth-basic-mask-light.png"
              data-app-dark-img="illustrations/auth-basic-mask-dark.png"
            />
            <img
              src="../assets/img/illustrations/tree.png"
              alt="auth-tree"
              className="authentication-image-object-right d-none d-lg-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
