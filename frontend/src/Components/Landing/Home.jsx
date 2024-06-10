import React from "react";
import Subscription from "./Subscription";
import NavigationBar from "../NavigationBar";

const Home = () => {
  return (
    <div>
      <>
        {/* Preloader */}
        <div className="preloader" style={{ opacity: 0, display: "none" }}>
          <div className="preloader-inner">
            <div className="preloader-icon">
              <span />
              <span />
            </div>
          </div>
        </div>
        {/* /End Preloader */}
        {/* Start Header Area */}
        <NavigationBar />
        {/* End Header Area */}
        {/* Start Hero Area */}
        <section className="hero-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="hero-content">
                  <h4>
                    Discover the Best Properties for Your Modern Lifestyle
                  </h4>
                  <h1>
                    Welcome to Ethiopia's
                    <br />
                    Premier Listing Platform
                  </h1>
                  <p>
                    Look no further. Our platform offers the most comprehensive
                    and user-friendly solution for all your real estate needs.
                  </p>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div
                  className="hero-image wow fadeInRight"
                  data-wow-delay=".4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInRight",
                  }}
                >
                  <img
                    className="main-image"
                    src="../../../public/assets/images/landing.png"
                    style={{width: "38vw"}}
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Hero Area */}
        {/* Start Features Area */}
        {/* End Features Area */}
        {/* Start Services Area */}
        <div className="services section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3
                    className="wow zoomIn"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "zoomIn",
                    }}
                  >
                    What we offer
                  </h3>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Why Choose Us
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".6s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.6s",
                      animationName: "fadeInUp",
                    }}
                  ></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-grid-alt" />
                  </div>
                  <h4 className="text-title">Extensive Listings</h4>
                  <p>
                    Explore a wide range of properties across Ethiopia, from
                    urban apartments to rural estates. Our platform connects you
                    with verified listings to suit every lifestyle and budget.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-keyword-research" />
                  </div>
                  <h4 className="text-title">Easy Navigation</h4>
                  <p>
                    Our intuitive interface makes searching for properties a
                    breeze. Filter by location, price, type, and more to find
                    exactly what you need without the hassle.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-vector" />
                  </div>
                  <h4 className="text-title">Trusted Agents</h4>
                  <p>
                    Work with professional and reliable agents who are committed
                    to helping you find the perfect property. Our network of
                    agents ensures that you receive top-notch service and
                    support.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-book" />
                  </div>
                  <h4 className="text-title">Real-Time Updates</h4>
                  <p>
                    Stay ahead of the market with real-time updates on new
                    listings, price changes, and property availability. Our
                    platform ensures you never miss an opportunity.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="single-service">
                  <div className="main-icon">
                    <i className="lni lni-cloud-network" />
                  </div>
                  <h4 className="text-title">Secure and Reliable</h4>
                  <p>
                    Your safety and privacy are our top priorities. We employ
                    the latest security measures to protect your personal
                    information and ensure a secure browsing experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="pricing" className="pricing-table section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3
                    className="wow zoomIn"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "zoomIn",
                    }}
                  >
                    pricing
                  </h3>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Pricing &amp; Plans
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay=".6s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.6s",
                      animationName: "fadeInUp",
                    }}
                  >
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <Subscription />
            </div>
          </div>
        </section>

        <section className="team section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3
                    className="wow zoomIn"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "zoomIn",
                    }}
                  >
                    Expert Team
                  </h3>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Meet Our Team
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="col-lg-2 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                {/* Start Single Team */}
                <div className="single-team">
                  <div className="team-image">
                    <img src="https://via.placeholder.com/400x400" alt="#" />
                  </div>
                  <div className="content">
                    <h4>
                      Deco Milan
                      <span>Founder</span>
                    </h4>
                    <ul className="social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Team */}
              </div>
              <div
                className="col-lg-2 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                {/* Start Single Team */}
                <div className="single-team">
                  <div className="team-image">
                    <img src="https://via.placeholder.com/400x400" alt="#" />
                  </div>
                  <div className="content">
                    <h4>
                      Liza Marko
                      <span>Developer</span>
                    </h4>
                    <ul className="social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Team */}
              </div>
              <div
                className="col-lg-2 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                {/* Start Single Team */}
                <div className="single-team">
                  <div className="team-image">
                    <img src="https://via.placeholder.com/400x400" alt="#" />
                  </div>
                  <div className="content">
                    <h4>
                      Liza Marko
                      <span>Developer</span>
                    </h4>
                    <ul className="social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Team */}
              </div>
              <div
                className="col-lg-2 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".7s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.7s",
                  animationName: "fadeInUp",
                }}
              >
                {/* Start Single Team */}
                <div className="single-team">
                  <div className="team-image">
                    <img src="https://via.placeholder.com/400x400" alt="#" />
                  </div>
                  <div className="content">
                    <h4>
                      John Smith
                      <span>Designer</span>
                    </h4>
                    <ul className="social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Team */}
              </div>
              <div
                className="col-lg-2 col-md-6 col-12 wow fadeInUp"
                data-wow-delay=".9s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.9s",
                  animationName: "fadeInUp",
                }}
              >
                {/* Start Single Team */}
                <div className="single-team">
                  <div className="team-image">
                    <img src="https://via.placeholder.com/400x400" alt="#" />
                  </div>
                  <div className="content">
                    <h4>
                      Amion Doe
                      <span>Co-Founder</span>
                    </h4>
                    <ul className="social">
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-facebook-filled" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-twitter-original" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)">
                          <i className="lni lni-linkedin-original" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End Single Team */}
              </div>
            </div>
          </div>
        </section>

        <section className="faq section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h3
                    className="wow zoomIn"
                    data-wow-delay=".2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "zoomIn",
                    }}
                  >
                    Faq
                  </h3>
                  <h2
                    className="wow fadeInUp"
                    data-wow-delay=".4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.4s",
                      animationName: "fadeInUp",
                    }}
                  >
                    frequently asked questions
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="false"
                        aria-controls="collapse1"
                      >
                        <span className="title">
                          What is an MLS and how does it work in Ethiopia?
                        </span>
                        <i className="lni lni-plus" />
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading1"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          An MLS (Multiple Listing System) is a database that
                          real estate agents and brokers use to share
                          information about properties for sale or rent. In
                          Ethiopia, our MLS allows agents to collaborate,
                          providing a centralized platform where all listed
                          properties are accessible to potential buyers and
                          renters, ensuring a wider reach and more efficient
                          property searches.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading2">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="false"
                        aria-controls="collapse2"
                      >
                        <span className="title">
                          How do I subscribe to your website?
                        </span>
                        <i className="lni lni-plus" />
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading2"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Subscribing to our website is simple. Visit our
                          homepage and click on the 'Subscribe' button. Choose
                          the subscription plan that best suits your needs, fill
                          in your details, and complete the payment process.
                          Once your subscription is confirmed, you'll have full
                          access to all MLS listings and additional features.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading3">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="false"
                        aria-controls="collapse3"
                      >
                        <span className="title">
                          Can I list my property on your platform?
                        </span>
                        <i className="lni lni-plus" />
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading3"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, individuals can list their properties on our
                          platform. However, we encourage working with a
                          registered real estate agent to ensure your listing is
                          accurately represented and reaches a wider audience.
                          Agents can help manage inquiries and negotiations,
                          making the process smoother for you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12 xs-margin">
                <div className="accordion" id="accordionExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading11">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse11"
                        aria-expanded="false"
                        aria-controls="collapse11"
                      >
                        <span className="title">
                          Is my personal information safe on your website?
                        </span>
                        <i className="lni lni-plus" />
                      </button>
                    </h2>
                    <div
                      id="collapse11"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading11"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p>
                          Your privacy and security are our top priorities. We
                          use advanced encryption and security protocols to
                          protect your personal information. Our website
                          complies with data protection regulations, and we
                          never share your data with third parties without your
                          explicit consent.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading22">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse22"
                        aria-expanded="false"
                        aria-controls="collapse22"
                      >
                        <span className="title">
                          How can I effectively search for properties on your
                          MLS platform?
                        </span>
                        <i className="lni lni-plus" />
                      </button>
                    </h2>
                    <div
                      id="collapse22"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading22"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p>
                          Our MLS platform offers a user-friendly search
                          feature. You can search for properties by location,
                          price range, property type, number of bedrooms, and
                          other criteria. Use the advanced search filters to
                          narrow down your options and find properties that meet
                          your specific requirements. You can also save your
                          searches and receive alerts for new listings that
                          match your criteria.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading33">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse33"
                        aria-expanded="false"
                        aria-controls="collapse33"
                      >
                        <span className="title">
                          How can I get in touch with an agent about a property
                          I'm interested in?
                        </span>
                        <i className="lni lni-plus" />
                      </button>
                    </h2>
                    <div
                      id="collapse33"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading33"
                      data-bs-parent="#accordionExample2"
                    >
                      <div className="accordion-body">
                        <p>
                          Each property listing on our platform includes contact
                          information for the listing agent. You can reach out
                          to the agent directly through the provided phone
                          number or email address. Additionally, our platform
                          offers a messaging feature that allows you to send
                          inquiries directly to the agent through the website.
                          The agent will then respond to your inquiry and
                          provide further assistance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ End Faq Area */}
        <footer className="footer section">
         
          
          <div className="copyright-area">
            <div className="container">
              <div className="inner-content">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-12">
                    <p className="copyright-text">
                      © 2024 MLS - All Rights Reserved
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <p className="copyright-owner">
                      Designed and Developed by NG
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Copyright Area */}
        </footer>
        {/*/ End Footer Area */}
      </>
    </div>
  );
};

export default Home;
