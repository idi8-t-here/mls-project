import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import SignInWarning from "../SigninWarning";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Modal from "./Modal";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const AddProperty = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState([8.514477, 39.269257]);
  const [profile, setProfile] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const users = sessionStorage.getItem("users");
  const [id, setId] = useState("");
  const user = JSON.parse(users);

  const closeModal = () => {
    setIsAdded(false);
  };
  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/api/user/email/${user.email}`)
        .then((response) => {
          setProfile(response.data.data.user);
          setId(profile._id);
        });
    }
  }, [user]);

  useEffect(() => {
    if (profile && profile._id) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        agentId: profile._id,
        location: location,
      }));
    }
  }, [profile]);
  const [formData, setFormData] = useState({
    address: "",
    agentId: id,
    approvalStatus: "pending",
    bedrooms: "",
    city: "",
    description: "",
    image1: null,
    image2: null,
    image3: null,
    price: "",
    reported: false,
    state: "",
    status: "available",
    title: "",
  });
  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     axios.post('http://localhost:3000/properties', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     })
  //     .then(response => {
  //       console.log(response.data);
  //       // Handle success, e.g., show a success message or redirect
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       // Handle error, e.g., show an error message
  //     });
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const forms = new FormData();
      Object.keys(formData).forEach((key) => {
        forms.append(key, formData[key]);
      });
      await axios
        .post("http://localhost:3000/properties", forms, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(setIsAdded(true));
      console.log("Property saved successfully");
    } catch (error) {
      console.error("Error posting property:", error);
    }
  };
  return (
    <>
      {user ? (
        <>
          <NavigationBar />
          {isAdded && (
            <Modal
              title="Add Property"
              body="You have successfully sent your property to be reviewed, we will let you know in a while you can view status of your property on VIEW PROFILES"
              onClose={closeModal}
            />
          )}

          <div className="breadcrumbs">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                  <div className="breadcrumbs-content">
                    <h1 className="page-title">Add Properties</h1>
                    <ul className="breadcrumb-nav">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Add Properties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-us section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div className="contact-widget-wrapper">
                    <div className="main-title">
                      <h2>Select Images</h2>
                    </div>
                    <div className="contact-widget-block">
                      <h3 className="title">Image 1</h3>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            name="image1"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                          />
                        </div>
                        {formData.image1 && (
                          <div className="form-group">
                            <img
                              src={URL.createObjectURL(formData.image1)}
                              alt="Selected"
                              style={{ width: "100px", height: "100px" }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="contact-widget-block">
                      <h3 className="title">Image 2</h3>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            name="image2"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </div>
                        {formData.image2 && (
                          <div className="form-group">
                            <img
                              src={URL.createObjectURL(formData.image2)}
                              alt="Selected"
                              style={{ width: "100px", height: "100px" }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="contact-widget-block">
                      <h3 className="title">Image 3</h3>
                      <div className="col-12">
                        <div className="form-group">
                          <input
                            name="image3"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                          />
                        </div>
                        {formData.image3 && (
                          <div className="form-group">
                            <img
                              src={URL.createObjectURL(formData.image3)}
                              alt="Selected"
                              style={{ width: "100px", height: "100px" }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="contact-widget-block">
                      <h3 className="title">Add Location</h3>
                      <div>
                        <input
                          type="text"
                          value={location}
                          onChange={handleInputChange}
                          placeholder="Enter location"
                        />
                        <button className="btn" onClick={handleSearch}>Search</button>

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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="contact-form">
                    <h3 className="form-title">Add Property Details</h3>
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="row">
                        {/* New Fields */}
                        <div className="col-12">
                          <div className="form-group">
                            <input
                              name="agentId"
                              type="hidden"
                              value={profile._id}
                              onChange={handleChange}
                              required
                            />
                            <input
                              name="title"
                              type="text"
                              placeholder="Title*"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input
                              name="address"
                              type="text"
                              placeholder="Address*"
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input
                              name="bathrooms"
                              type="number"
                              placeholder="Bath Rooms*"
                              required="required"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input
                              name="bedrooms"
                              type="number"
                              placeholder="Bedrooms*"
                              required="required"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form-group">
                            <input
                              name="city"
                              type="text"
                              placeholder="City*"
                              required="required"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              name="description"
                              placeholder="Description*"
                              required="required"
                              onChange={handleChange}
                              className="form-control"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input
                              name="squareFeet"
                              type="number"
                              placeholder="Square Feet*"
                              required="required"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="form-group">
                            <input
                              name="location"
                              type="text"
                              placeholder="Location*"
                              required="required"
                              value={location}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input
                              name="state"
                              type="text"
                              placeholder="State*"
                              required="required"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <input
                              name="price"
                              type="number"
                              placeholder="Price*"
                              required="required"
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-12">
                          <div className="button">
                            <button type="submit" className="btn">
                              Add Property
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SignInWarning />
      )}
    </>
  );
};

export default AddProperty;
