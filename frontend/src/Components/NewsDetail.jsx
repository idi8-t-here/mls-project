import React from "react";

const NewsDetail = () => {
  return (
    <section className="section blog-grid-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                {/* Start Single Blog Grid */}
                <div className="single-blog-grid">
                  <div className="blog-img">
                    <a href="blog-single.html">
                      <img src="https://via.placeholder.com/500x310" alt="#" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="meta-info">
                      <a className="date" href="javascript:void(0)">
                        <i className="lni lni-timer" /> 10 June 2023
                      </a>
                      <a className="author" href="javascript:void(0)">
                        <i className="lni lni-user" /> Anjelio Joly
                      </a>
                    </div>
                    <h4>
                      <a href="blog-single.html">
                        Branding Involves Developing a Strategy to Creating.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, adipscing elitr, sit gifted
                      sed diam nonumy eirmod tempor ividunt dolore.
                    </p>
                    <div className="button">
                      <a href="blog-single.html" className="btn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Blog Grid */}
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                {/* Start Single Blog */}
                <div className="single-blog-grid">
                  <div className="blog-img">
                    <a href="blog-single.html">
                      <img src="https://via.placeholder.com/500x310" alt="#" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="meta-info">
                      <a className="date" href="javascript:void(0)">
                        <i className="lni lni-timer" /> 5 Aug 2023
                      </a>
                      <a className="author" href="javascript:void(0)">
                        <i className="lni lni-user" /> Kumila ksusi
                      </a>
                    </div>
                    <h4>
                      <a href="blog-single.html">
                        Design is a Plan or The Construction of an Object.
                      </a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, adipscing elitr, sit gifted
                      sed diam nonumy eirmod tempor ividunt dolore.
                    </p>
                    <div className="button">
                      <a href="blog-single.html" className="btn">
                        Read Blog
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Single Blog Grid */}
              </div>
            </div>
            {/* Pagination */}
            {/*/ End Pagination */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
