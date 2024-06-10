import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import DatatableComponent from "../Components/DatatableComponent";
import { Link } from "react-router-dom";

const ReportedProperties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchProperties();
      }, []);
      const fetchProperties = async () => {
        try {
          const response = await fetch("http://localhost:3000/properties");
          const data = await response.json();
          const filteredProperties = data.data.properties.filter(
            property => property.reported === "true"
          );
          setProperties(filteredProperties);
          console.log(filteredProperties);
        } catch (error) {
          console.error("Error fetching properties:", error);
        }
      };

    const columns = [
        {
          name: "name",
          label: "Name",
          options: {
            filter: true,
            sort: true,
          },
        },
        {
          name: "address",
          label: "Address",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "city",
          label: "City",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "price",
          label: "Price",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "state",
          label: "State",
          options: {
            filter: true,
            sort: false,
          },
        },
        {
          name: "status",
          label: "Status",
          options: {
            filter: false,
            sort: false,
            customBodyRender: (value) => {
                if (value === "for rent") {
                  return <span className="badge rounded-pill bg-label-primary me-1">For Rent</span>;
                } else if(value === "rented"){
                    return <span className="badge rounded-pill bg-label-success me-1">Rented</span>
                } else if(value === "for sale"){
                    return <span className="badge rounded-pill bg-label-info me-1">For Sale</span>
                } else if(value === "sold"){
                    return <span className="badge rounded-pill bg-label-success me-1">Sold</span>
                }
                else {
                  // Return default value if the condition is not met
                  return <span className="badge rounded-pill bg-label-warning me-1">Undetermined</span>;
                }
              }
              
          },
        },
        {
          name: "dropdown",
          label: "Actions",
          options: {
            filter: false,
            sort: false,
          },
        },
      ];
      const data = properties.map((property) => {
        const updatedMenu = (
            <div className="dropdown">
            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
              <i className="mdi mdi-dots-vertical"></i>
            </button>
            <div className="dropdown-menu">
              <Link to = "/createProperties" className="dropdown-item waves-effect" ><i className="mdi mdi-book me-1"></i> View Property</Link>
              <a className="dropdown-item waves-effect" href="javascript:void(0);"><i className="mdi mdi-pencil-outline me-1"></i> Edit</a>
              <a className="dropdown-item waves-effect" href="javascript:void(0);"><i className="mdi mdi-trash-can-outline me-1"></i> Delete</a>
            </div>
          </div>
        );
        return {
          ...property,
          dropdown: updatedMenu,
        };
      });

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">Properties /</span> Reported properties
                
              </h4>
              <div className="card">
                <div className="table-responsive text-nowrap">
                  <DatatableComponent columns={columns} data={data}/>
                </div>
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

export default ReportedProperties;
