import React, { useState, useEffect } from "react";
import PreloaderComponent from "./PreloaderComponent";
import SearchComponent from "./SearchComponent";
import NewsComponent from "./NewsComponent";
import NavigationBar from "./NavigationBar";
import { useParams, Link } from "react-router-dom";
import Carousel from "./Carousel";
import MetypeWidget from "./MetypeWidget";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const ListingDetails = () => {
  const users = sessionStorage.getItem("users");
  const user = JSON.parse(users);
  const { id } = useParams();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("adama");
  const [coordinates, setCoordinates] = useState([8.514477, 39.269257]);
  const [signin, setSignin] = useState(false);

  useEffect(() => {
    fetchProperty(id);
    if (user) {
      setSignin(true);
    }
  }, [id]);
  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };
  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${location}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          setCoordinates([parseFloat(lat), parseFloat(lon)]);
        } else {
          alert("Location not found");
        }
      })
      .catch((error) => console.error("Error:", error));
  }, [location]);

  const fetchProperty = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/properties/${id}`);
      const data = await response.json();
      setProperties(data.data.property);
      setLocation(properties.location);
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  };
  if (!properties) {
    return <PreloaderComponent />;
  }

  return (
    <>
      <NavigationBar />
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Properties Details</h1>
                <ul className="breadcrumb-nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>properties</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section blog-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="single-inner">
                <div className="post-details">
                  <div className="main-content-head">
                    <div className="post-thumbnils">
                      <Carousel
                        images={[
                          properties.image1,
                          properties.image2,
                          properties.image3,
                        ]}
                      />
                    </div>
                    <div className="meta-information">
                      <h2 className="post-title">{properties.title}</h2>
                      {/* End Meta Info */}
                      <ul className="meta-info">
                        <li>
                          <a href="javascript:void(0)">20 Jun 2023</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">{properties.city}</a>
                        </li>
                      </ul>
                      <p>{properties.detail}</p>
                      {/* End Meta Info */}
                    </div>
                    <div className="detail-inner">
                      <div className="image-block">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <h5>Property Information</h5>
                            <p>
                              These are the specific details of the above
                              listing.
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12 mt-5">
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <h6 style={{ margin: 0, fontWeight: 600 }}>
                                  Price:
                                </h6>
                                <span
                                  style={{
                                    marginLeft: "0.5rem",
                                    fontWeight: 400,
                                  }}
                                >
                                  {signin && properties.price ? (
                                    `$${properties.price.toLocaleString()}`
                                  ) : (
                                    <Link to="/signin">Join to view more</Link>
                                  )}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <h6 style={{ margin: 0, fontWeight: 600 }}>
                                  Bathrooms:
                                </h6>
                                <span
                                  style={{
                                    marginLeft: "0.5rem",
                                    fontWeight: 400,
                                  }}
                                >
                                  {signin ? (
                                    properties.bathrooms
                                  ) : (
                                    <Link to="/signin">Join to view more</Link>
                                  )}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <h6 style={{ margin: 0, fontWeight: 600 }}>
                                  Bedrooms:
                                </h6>
                                <span
                                  style={{
                                    marginLeft: "0.5rem",
                                    fontWeight: 400,
                                  }}
                                >
                                  {signin ? (
                                    properties.bedrooms
                                  ) : (
                                    <Link to="/signin">Join to view more</Link>
                                  )}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <h6 style={{ margin: 0, fontWeight: 600 }}>
                                  Square Feet (m<sup>2</sup>):
                                </h6>
                                <span
                                  style={{
                                    marginLeft: "0.5rem",
                                    fontWeight: 400,
                                  }}
                                >
                                  {signin ? (
                                    properties.squareFeet
                                  ) : (
                                    <Link to="/signin">Join to view more</Link>
                                  )}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <h6 style={{ margin: 0, fontWeight: 600 }}>
                                  Address:
                                </h6>
                                <span
                                  style={{
                                    marginLeft: "0.5rem",
                                    fontWeight: 400,
                                  }}
                                >
                                  {signin ? (
                                    properties.address
                                  ) : (
                                    <Link to="/signin">Join to view more</Link>
                                  )}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <h6 style={{ margin: 0, fontWeight: 600 }}>
                                  City:
                                </h6>
                                <span
                                  style={{
                                    marginLeft: "0.5rem",
                                    fontWeight: 400,
                                  }}
                                >
                                  {signin ? (
                                    properties.city
                                  ) : (
                                    <Link to="/signin">Join to view more</Link>
                                  )}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <h6 style={{ margin: 0, fontWeight: 600 }}>
                                  State:
                                </h6>
                                <span
                                  style={{
                                    marginLeft: "0.5rem",
                                    fontWeight: 400,
                                  }}
                                >
                                  {signin ? (
                                    properties.state
                                  ) : (
                                    <Link to="/signin">Join to view more</Link>
                                  )}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <h6 style={{ margin: 0, fontWeight: 600 }}>
                                  Status:
                                </h6>
                                <span
                                  style={{
                                    marginLeft: "0.5rem",
                                    fontWeight: 400,
                                  }}
                                >
                                  {signin ? (
                                    properties.status
                                  ) : (
                                    <Link to="/signin">Join to view more</Link>
                                  )}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <h6 style={{ margin: 0, fontWeight: 600 }}>
                                  Approval Status:
                                </h6>
                                <span
                                  style={{
                                    marginLeft: "0.5rem",
                                    fontWeight: 400,
                                  }}
                                >
                                  {signin ? (
                                    properties.approvalStatus
                                  ) : (
                                    <Link to="/signin">Join to view more</Link>
                                  )}
                                </span>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <h6 style={{ margin: 0, fontWeight: 600 }}>
                                  Location:
                                </h6>
                                <span
                                  style={{
                                    marginLeft: "0.5rem",
                                    fontWeight: 400,
                                  }}
                                >
                                  {properties.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="image-block">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-12">
                            <h5>Property Location</h5>
                            <p>
                              This is the relative location of the property
                              which is found above.
                            </p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-12 mt-5">
                            <div>
                              <input
                                type="hidden"
                                value={location}
                                onChange={handleInputChange}
                                placeholder="Enter location"
                              />
                              {signin ? (
                                <MapContainer
                                  center={coordinates}
                                  zoom={13}
                                  style={{ height: "400px", width: "100%" }}
                                >
                                  <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                  />
                                  <Marker position={coordinates}></Marker>
                                </MapContainer>
                              ) : (
                                <blockquote>
                                  <div className="icon">
                                    <i className="lni lni-quotation" />
                                  </div>
                                  <h4>"Subscribe to View Property Location"</h4>
                                </blockquote>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <h5>Contact Information</h5>
                          <p>
                            These are the contact details of the agent who
                            uploaded this lead.
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-5">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "0.5rem",
                              }}
                            ></div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "0.5rem",
                              }}
                            >
                              <h6 style={{ margin: 0, fontWeight: 600 }}>
                                Agent Company:
                              </h6>
                              <span
                                style={{
                                  marginLeft: "0.5rem",
                                  fontWeight: 400,
                                }}
                              >
                                {signin ? (
                                  properties.bathrooms
                                ) : (
                                  <Link to="/signin">Join to view more</Link>
                                )}
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "0.5rem",
                              }}
                            >
                              <h6 style={{ margin: 0, fontWeight: 600 }}>
                                Agent Name:
                              </h6>
                              <span
                                style={{
                                  marginLeft: "0.5rem",
                                  fontWeight: 400,
                                }}
                              >
                                {signin ? (
                                  properties.bedrooms
                                ) : (
                                  <Link to="/signin">Join to view more</Link>
                                )}
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "0.5rem",
                              }}
                            >
                              <h6 style={{ margin: 0, fontWeight: 600 }}>
                                Agent Phone:
                              </h6>
                              <span
                                style={{
                                  marginLeft: "0.5rem",
                                  fontWeight: 400,
                                }}
                              >
                                {signin ? (
                                  properties.squareFeet
                                ) : (
                                  <Link to="/signin">Join to view more</Link>
                                )}
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: "0.5rem",
                              }}
                            >
                              <h6 style={{ margin: 0, fontWeight: 600 }}>
                                Agent Email:
                              </h6>
                              <span
                                style={{
                                  marginLeft: "0.5rem",
                                  fontWeight: 400,
                                }}
                              >
                                {signin ? (
                                  properties.address
                                ) : (
                                  <Link to="/signin">Join to view more</Link>
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              {/* Start Comments */}
              <div className="post-comments">
                <h3 className="comment-title">
                  <span>Comments on this property</span>
                  {signin ? (
                    <MetypeWidget />
                  ) : (
                    <p> You need to signin to comment on this property</p>
                  )}
                </h3>
              </div>
              <div className="detail-inner">
                <hr />
                <p>
                  The information provided on the Website, which encompasses
                  details such as property dimensions, floor area, valuation,
                  geographic location, and general property description, is
                  furnished for your convenience and originates from third-party
                  sources. This data should not be interpreted as constituting a
                  contractual offer for the procurement, leasing, or advertising
                  of real estate. No express or implied warranties or assurances
                  are extended concerning these properties, including their
                  availability. While the data presented on this Website is
                  considered reliable, It acknowledges a degree of uncertainty,
                  thus necessitating Independent verification.
                </p>
                <p>
                  The administrators of this platform, as well as their
                  respective directors, associates, and personnel, have not
                  undertaken a process of due diligence to verify the accuracy
                  of the information. Their role is limited to disseminating the
                  information, and they do not accept liability, whether direct
                  or indirect, for any injuries, losses, claims, damages, or
                  associated indirect or consequential harms, including but not
                  limited to lost profits or savings, arising from the use of
                  any information or any deficiencies, inaccuracies, or defects
                  in the disseminated information within the bounds of the
                  Website.
                </p>
                <p>
                  <a href="http://mis.foreclosure.com">mis.foreclosure.com</a>,
                  in conjunction with its Affiliates, disclaims any
                  responsibility arising from your acquisition of third-party
                  goods, services, or tangible properties based on the
                  informational context of the Site, mis foreclosure.com
                  reserves the right, at its sole discretion and without prior
                  notice, to rectify errors or omissions within any section of
                  the Site or to restrict access to the Site.
                </p>
                <p>
                  Relying solely on the informational content featured on the
                  Website is not advisable. Conduct your own personal inquiries
                  and seek legal counsel regarding any property under
                  consideration within the scope of the Website or the
                  associated data
                </p>
              </div>
              {/* End Comments */}
              {/* Start Comment Form */}

              {/* End Comment Form */}
            </div>
            <aside className="col-lg-4 col-md-12 col-12">
              <div className="sidebar">
                <NewsComponent />

                {/* End Single Widget */}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingDetails;
