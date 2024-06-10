import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Link, useParams } from "react-router-dom";
import Carousel from "./Carousel";

const ViewProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState([]);
  const fetchProperty = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/properties/${id}`);
      const data = await response.json();
      setProperty(data.data.property);
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  };
  useEffect(() => {
    fetchProperty(id);
  }, [id]);
  console.log(property);
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">Properties /</span> View
                properties
              </h4>
              <div className="card pt-5">
                <div className="">
                  <div className="row">
                    {/* Basic */}
                    <div className="col-md-4">
                      <div className="card mb-4">
                        <h5 className="card-header">Property Info</h5>
                        <div className="card-body demo-vertical-spacing demo-only-element">
                          <Carousel images={[property.image1, property.image2, property.image3]}/>
                          {/* <div className="card h-100">
                            <div
                              id="carouselExampleControls"
                              className="carousel slide"
                              data-ride="carousel"
                            >
                              <div
                                id="carouselExampleSlidesOnly"
                                className="carousel slide"
                                data-ride="carousel"
                              >
                                <div className="carousel-inner">
                                  <div className="carousel-item active">
                                    <img
                                      className="d-block w-100"
                                      src={`http://localhost:3000/${property.image2}`}
                                      alt="First slide"
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      className="d-block w-100"
                                      src={`http://localhost:3000/uploads/sample.jpg`}
                                      alt="Second slide"
                                    />
                                  </div>
                                  <div className="carousel-item">
                                    <img
                                      className="d-block w-100"
                                      src="..."
                                      alt="Third slide"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  {property.image2 ? (
                                    <img
                                      className="card-img-top"
                                      src={`http://localhost:3000/${property.image2}`}
                                      alt="Card image cap"
                                    />
                                  ) : (
                                    <img
                                      className="card-img-top"
                                      src={`http://localhost:3000/uploads/sample.jpg`}
                                      alt="Card image cap"
                                    />
                                  )}
                                </div>
                                <div className="carousel-item">
                                  {property.image2 ? (
                                    <img
                                      className="card-img-top"
                                      src={`http://localhost:3000/${property.image2}`}
                                      alt="Card image cap"
                                    />
                                  ) : (
                                    <img
                                      className="card-img-top"
                                      src={`http://localhost:3000/uploads/sample.jpg`}
                                      alt="Card image cap"
                                    />
                                  )}
                                </div>
                                <div className="carousel-item">
                                  {property.image3 ? (
                                    <img
                                      className="card-img-top"
                                      src={`http://localhost:3000/${property.image3}`}
                                      alt="Card image cap"
                                    />
                                  ) : (
                                    <img
                                      className="card-img-top"
                                      src={`http://localhost:3000/uploads/sample.jpg`}
                                      alt="Card image cap"
                                    />
                                  )}
                                </div>
                              </div>
                              <a
                                className="carousel-control-prev"
                                href="#carouselExampleControls"
                                role="button"
                                data-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                />
                                <span className="sr-only">Previous</span>
                              </a>
                              <a
                                className="carousel-control-next"
                                href="#carouselExampleControls"
                                role="button"
                                data-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                />
                                <span className="sr-only">Next</span>
                              </a>
                            </div>

                            <div className="card-body">
                              <h5 className="card-title">{property.title}</h5>
                              <p className="card-text">
                                {property.description}
                              </p>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    {/* Merged */}
                    <div className="col-md-8">
                      <div className="col">
                        <div className="card mb-4">
                          <h5 className="card-header">Basic Property Info </h5>
                          <div className="card-body">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Title:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{property.title}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Description:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">
                                      {property.description}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Price:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{property.price}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Status:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{property.status}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="card mb-4">
                          <h5 className="card-header">Location Info </h5>
                          <div className="card-body">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Address:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{property.address}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      City:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{property.city}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      State:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{property.state}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="card mb-4">
                          <h5 className="card-header">Property Details </h5>
                          <div className="card-body">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Bedrooms:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{property.bedrooms}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Bathrooms:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{property.bathrooms}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      SquareFeet:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">
                                      {property.squareFeet}
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="card mb-4">
                          <h5 className="card-header">Additional Info</h5>
                          <div className="card-body">
                            <table className="table table-borderless">
                              <tbody>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Agent Name:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{property.agentId}</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Approval Status:
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">
                                      {property.approvalStatus}
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="align-middle">
                                    <small className="text-light fw-medium">
                                      Reported
                                    </small>
                                  </td>
                                  <td className="py-3">
                                    <p className="mb-0">{property.reported}</p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Sizing */}
                  </div>
                </div>
              </div>
            </div>
            <div className="content-backdrop fade" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProperty;
