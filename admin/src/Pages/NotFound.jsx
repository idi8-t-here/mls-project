import React from "react";

const NotFound = () => {
  return (
    <div>
      <div className="misc-wrapper">
        <h1 className="mb-2 mx-2" style={{ fontSize: "6rem" }}>
          404
        </h1>
        <h4 className="mb-2">Page Not Found ⚠️</h4>
        <p className="mb-4 mx-2">
          we couldn't find the page you are looking for
        </p>
        <div className="d-flex justify-content-center mt-5">
          <img
            src="../assets/img/illustrations/tree.png"
            alt="misc-tree"
            className="img-fluid misc-object d-none d-lg-inline-block"
            width={80}
          />
          <img
            src="../assets/img/illustrations/misc-mask-light.png"
            alt="misc-error"
            className="scaleX-n1-rtl misc-bg d-none d-lg-inline-block"
            data-app-light-img="illustrations/misc-mask-light.png"
            data-app-dark-img="illustrations/misc-mask-dark.png"
          />
          <div className="d-flex flex-column align-items-center">
            <img
              src="../assets/img/illustrations/404.png"
              alt="misc-error"
              className="misc-model img-fluid z-1"
              width={780}
            />
            <div>
              <a
                href="index.html"
                className="btn btn-primary text-center my-4 waves-effect waves-light"
              >
                Back to home
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
