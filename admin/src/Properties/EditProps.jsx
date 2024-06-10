import React, { useState, useEffect } from "react";
import Input from "../Components/InputComponent";
import Select from "../Components/SelectComponent";
import Checkbox from "../Components/CheckboxComponent";
import Textarea from "../Components/TextAreaComponent";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProperties = () => {
  const [currentProperty, setCurrentProperty] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)

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
    image: "",
    agentId: user._id,
    approvalStatus: "",
    title: "",
    reported: false,
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/properties/${id}`)
      .then(response => {
        console.log(response.data)
        setCurrentProperty(response.data.data.property);
        console.log(currentProperty)
      })
      .catch(error => {
        console.error("There was an error fetching the property data!", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setCurrentProperty((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/properties/${id}`, currentProperty)
      .then(() => {
        console.log("Property updated successfully");
        navigate("/viewproperties");
      })
      .catch(error => {
        console.error("There was an error updating the property!", error);
      });
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
                <span className="text-muted fw-light">Properties /</span> Edit Property
              </h4>
              <div className="card">
                <div className="">
                  <form onSubmit={handleSubmit} className="row">
                    <div className="col-md">
                      <div className="mb-4">
                        <div className="card-body pt-4">
                          <div className="form-floating form-floating-outline">
                            <Input
                              label="Title"
                              type="text"
                              id="title"
                              name="title"
                              value={currentProperty.title}
                              onChange={handleChange}
                              placeholder="Enter your Product Title"
                            />
                            <Textarea
                              label="Description"
                              id="description"
                              name="description"
                              value={currentProperty.description}
                              onChange={handleChange}
                            />
                            <Input
                              label="Address"
                              type="text"
                              id="address"
                              name="address"
                              value={currentProperty.address}
                              onChange={handleChange}
                            />
                            <Input
                              label="City"
                              type="text"
                              id="city"
                              name="city"
                              value={currentProperty.city}
                              onChange={handleChange}
                            />
                            <Input
                              label="State"
                              type="text"
                              id="state"
                              name="state"
                              value={currentProperty.state}
                              onChange={handleChange}
                            />
                            <Input
                              label="Price"
                              type="number"
                              id="price"
                              name="price"
                              value={currentProperty.price}
                              onChange={handleChange}
                            />
                            <Input
                              label="Bedrooms"
                              type="number"
                              id="bedrooms"
                              name="bedrooms"
                              value={currentProperty.bedrooms}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md">
                      <div className="mb-4">
                        <div className="card-body">
                          <Input
                            label="Bathrooms"
                            type="number"
                            id="bathroom"
                            name="bathroom"
                            value={currentProperty.bathroom}
                            onChange={handleChange}
                          />
                          <Input
                            label="Square Feet"
                            type="number"
                            id="squarefeet"
                            name="squarefeet"
                            value={currentProperty.squarefeet}
                            onChange={handleChange}
                          />
                          <Select
                            label="Status"
                            id="status"
                            name="status"
                            value={currentProperty.status}
                            onChange={handleChange}
                            options={[
                              { value: "available", label: "Available" },
                              { value: "sold", label: "Sold" },
                              { value: "for rent", label: "For Rent" },
                              { value: "rented", label: "Rented" },
                              { value: "for sale", label: "For Sale" },
                            ]}
                          />
                          <Input
                            label="Image URL"
                            type="url"
                            id="image"
                            name="image"
                            value={currentProperty.image}
                            onChange={handleChange}
                          />
                          <Select
                            label="Approval Status"
                            id="approvalStatus"
                            name="approvalStatus"
                            value={currentProperty.approvalStatus}
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
                            checked={currentProperty.reported}
                            onChange={(e) =>
                              setFormData({
                                ...currentProperty,
                                reported: e.target.checked,
                              })
                            }
                          />
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
                </div>
              </div>
            </div>
            <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl">
                <div className="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
                  <div className="text-body mb-2 mb-md-0">
                    © 2024, made with{" "}
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

export default EditProperties;
