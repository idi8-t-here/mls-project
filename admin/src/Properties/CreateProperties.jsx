import React, { useState, useEffect } from "react";
import Input from "../Components/InputComponent";
import Select from "../Components/SelectComponent";
import Checkbox from "../Components/CheckboxComponent";
import Radio from "../Components/RadioComponent";
import Textarea from "../Components/TextAreaComponent";
import Range from "../Components/RangeComponent";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import DatatableComponent from "../Components/DatatableComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProperties = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };
  const [formData, setFormData] = useState({
    address: "",
    city: "",
    state: "",
    price: "",
    bedrooms: "",
    bathroom: "",
    squarefeet: "",
    description: "",
    status: "",
    image1: null,
    image2: null,
    image3: null,
    agentId: user._id,
    approvalStatus: "",
    title: "",
    reported: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const forms = new FormData();
    Object.keys(formData).forEach((key) => {
      forms.append(key, formData[key]);
    });
    axios.post("http://localhost:3000/properties", forms).then(() => {
      console.log("properties saved sucessfully");
      navigate("/viewproperties");
    });
    console.log("submited uscess");
    console.log(formData);
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">Properties /</span> Create
                properties
              </h4>
              <div className="card">
                <div className="">
                  <>
                    <form onSubmit={handleSubmit} className="row">
                      <div className="col-md">
                        <div className=" mb-4">
                          <div className="card-body pt-4">
                            <div className="form-floating form-floating-outline">
                              <Input
                                label="Title"
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Enter your Product Title"
                              />
                              <Textarea
                                label="Description"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                              />
                              <Input
                                label="Address"
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                              />
                              <Input
                                label="City"
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                              />
                              <Input
                                label="State"
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                              />
                              <Input
                                label="Price"
                                type="number"
                                id="price"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                              />
                              <Input
                                label="Bedrooms"
                                type="number"
                                id="bedrooms"
                                name="bedrooms"
                                value={formData.bedrooms}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Default */}
                      <div className="col-md">
                        <div className="mb-4">
                          <div className="card-body">
                            <div>
                              <Input
                                label="Bathrooms"
                                type="number"
                                id="bathroom"
                                name="bathroom"
                                value={formData.bathroom}
                                onChange={handleChange}
                              />
                              <Input
                                label="Square Feet"
                                type="number"
                                id="squarefeet"
                                name="squarefeet"
                                value={formData.squarefeet}
                                onChange={handleChange}
                              />
                             
                              <Select
                                label="Status"
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                options={[
                                  { value: "available", label: "Available" },
                                  { value: "sold", label: "Sold" },
                                  { value: "for rent", label: "For Rent" },
                                  { value: "rented", label: "Rented" },
                                  { value: "for sale", label: "For Sell" },
                                ]}
                              />
                              <Input
                                label="Select First Image"
                                type="file"
                                id="image1"
                                name="image1"
                                onChange={handleFileChange}
                                required
                              />
                              <Input
                                label="Select Second Image"
                                type="file"
                                id="image2"
                                name="image2"
                                onChange={handleFileChange}
                                required
                              />
                              <Input
                                label="Select Third Image"
                                type="file"
                                id="image3"
                                name="image3"
                                onChange={handleFileChange}
                                required
                              />

                              <Select
                                label="Approval Status"
                                id="approvalStatus"
                                name="approvalStatus"
                                value={formData.approvalStatus}
                                onChange={handleChange}
                                options={[
                                  { value: "approved", label: "Approved" },
                                  { value: "pending", label: "Pending" },
                                  { value: "rejected", label: "Rejected" },
                                ]}
                              />
                              <Checkbox
                                label="Reported"
                                id="reported"
                                name="reported"
                                checked={formData.reported}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    reported: e.target.checked,
                                  })
                                }
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-info waves-effect waves-light"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </>
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

export default CreateProperties;
