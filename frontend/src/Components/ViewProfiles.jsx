import NavigationBar from "./NavigationBar";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import SignInWarning from "../SigninWarning";
import Carousel from "./Carousel";
import Modal from "./Modal";
import PreloaderComponent from "./PreloaderComponent";

const ViewProfiles = () => {
  const [profile, setProfile] = useState(null);
  const [properties, setProperties] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState("profile");
  const [bookmark, setBookmark] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const users = sessionStorage.getItem("users");
  const user = JSON.parse(users);
  const [formData, setFormData] = useState({
    licenceFront: null,
    licenceBack: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookmarkSuccess, setIsBookmarkSuccess] = useState(false);

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsBookmarkSuccess(false);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFormData((prev) => ({ ...prev, files: acceptedFiles }));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  useEffect(() => {
    if (user) {
      fetchUserProfile(user.email);
    }
  }, [user]);

  const handleRemoveBookmark = async (bookmarkId) => {
    try {
      await axios
        .delete(`http://localhost:3000/api/bookmark/${bookmarkId}`)
        .then(() => {
          console.log("remove successfull");
          setIsBookmarkSuccess(true);
        });
    } catch (error) {
      console.error("Error removing bookmark", error);
    }
  };

  useEffect(() => {
    if (profile) {
      fetchUserProperties();
      axios
        .get(`http://localhost:3000/api/bookmark/${profile._id}`)
        .then((response) => {
          setBookmark(response.data.data.bookmarks);
        });
    }
  }, [bookmark, profile]);

  const fetchUserProfile = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/user/email/${email}`
      ).then(
        setLoading(false)
      );
      setProfile(response.data.data.user);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleUpdateProfile = () => {
    const form = new FormData();
    if (formData.licenceFront) {
      form.append("licenceFront", formData.licenceFront);
    }
    if (formData.licenceBack) {
      form.append("licenceBack", formData.licenceBack);
    }

    axios
      .put(`http://localhost:3000/api/user/${profile._id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("upload success", response.data);
      })
      .catch((error) => {
        console.error("upload error", error);
      });
  };

  const fetchUserProperties = async () => {
    try {
      const response = await axios.get("http://localhost:3000/properties");
      const filteredProperties = response.data.data.properties.filter(
        (property) => property.agentId === profile._id
      );
      setProperties(filteredProperties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const getStatusBanner = (status) => {
    switch (status) {
      case "approved":
        return { className: "bg-success", text: "Approved" };
      case "pending":
        return { className: "bg-warning", text: "Pending" };
      case "rejected":
        return { className: "bg-danger", text: "Rejected" };
      default:
        return { className: "bg-secondary", text: "Unknown Status" };
    }
  };

  const renderProfile = () => (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Full Name</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">
                {profile?.firstName} {profile?.lastName}
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Email</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{profile?.email}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Phone</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{profile?.phoneNumber}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Username</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{profile?.userName}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Address</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">{profile?.state}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Subscription</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">
                {profile?.subscription?.tier || ""}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">License Front</p>
              </div>
              <div className="col-sm-9">
                {profile && profile.licenceFront ? (
                  <img
                    src={`http://localhost:3000/${profile.licenceFront}`}
                    alt="Front of License"
                  />
                ) : (
                  <div className="container dropzone">
                    <input
                      type="file"
                      name="licenceFront"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    {formData.licenceFront ? (
                      <div key={formData.licenceFront.name}>
                        <img
                          src={URL.createObjectURL(formData.licenceFront)}
                          alt="Front of License"
                        />
                        <button
                          className="primary"
                          onClick={() =>
                            setFormData({ ...formData, licenceFront: null })
                          }
                        >
                          Clear
                        </button>
                      </div>
                    ) : (
                      <p>Drag & drop file here, or click to select file</p>
                    )}
                  </div>
                )}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">License Back</p>
              </div>
              <div className="col-sm-9">
                {profile && profile.licenceBack ? (
                  <img
                    src={`http://localhost:3000/${profile.licenceBack}`}
                    alt="Back of License"
                  />
                ) : (
                  <div className="container dropzone">
                    <input
                      type="file"
                      name="licenceBack"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    {formData.licenceBack ? (
                      <div key={formData.licenceBack.name}>
                        <img
                          src={URL.createObjectURL(formData.licenceBack)}
                          alt="Back of License"
                        />
                        <button
                          className="primary"
                          onClick={() =>
                            setFormData({ ...formData, licenceBack: null })
                          }
                        >
                          Clear
                        </button>
                      </div>
                    ) : (
                      <p>Drag & drop file here, or click to select file</p>
                    )}
                  </div>
                )}
              </div>
            </div>
            {profile && profile.licenceBack ? (
              <button className="btn btn-success" onClick={handleUpdateProfile}>
                Upload Licence
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );

  const renderProperties = () => (
    <div className="card mb-4">
      {properties.length > 0 ? (
        properties.map((prop, index) => {
          const statusBanner = getStatusBanner(prop.approvalStatus);
          return (
            <div className="card-body" key={index}>
              <div className="container mt-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="image-container position-relative">
                      <Carousel
                        images={[prop.image1, prop.image2, prop.image3]}
                      />
                      <div
                        className={`status-banner position-absolute top-0 start-0 p-2 text-white ${statusBanner.className}`}
                      >
                        {statusBanner.text}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="property-details">
                      <h4>{prop?.title}</h4>
                      <p>
                        <strong>Address:</strong> {prop.address}
                      </p>
                      <p>
                        <strong>City:</strong> {prop?.city}
                      </p>
                      <p>
                        <strong>State:</strong> {prop?.state}
                      </p>
                      <p>
                        <strong>Price:</strong>{" "}
                        {prop?.price
                          ? `$${prop.price.toLocaleString()}`
                          : "N/A"}
                      </p>
                      <p>
                        <strong>Bedrooms:</strong> {prop?.bedrooms}
                      </p>
                      <p>
                        <strong>Description:</strong> {prop?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="card-body">
          <p>No properties available</p>
        </div>
      )}
    </div>
  );

  const renderBookmarks = () => {
    return (
      <div className="card mb-4">
        {Array.isArray(bookmark) && bookmark.length > 0 ? (
          bookmark.map((prop, index) => {
            const statusBanner = getStatusBanner(prop.approvalStatus);
            return (
              <div className="card-body" key={index}>
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="image-container position-relative">
                        <Carousel
                          images={[prop.image1, prop.image2, prop.image3]}
                        />
                        <div
                          className={`status-banner position-absolute top-0 start-0 p-2 text-white ${statusBanner.className}`}
                        >
                          {statusBanner.text}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="property-details">
                        <h4>{prop.title}</h4>
                        <p>
                          <strong>Address:</strong> {prop.address}
                        </p>
                        <p>
                          <strong>City:</strong> {prop.city}
                        </p>
                        <p>
                          <strong>State:</strong> {prop.state}
                        </p>
                        <p>
                          <strong>Price:</strong>{" "}
                          {`$${prop.price.toLocaleString()}`}
                        </p>
                        <p>
                          <strong>Bedrooms:</strong> {prop.bedrooms}
                        </p>
                        <p>
                          <strong>Description:</strong> {prop.description}
                        </p>
                        <button
                          className="btn btn-danger mt-2"
                          onClick={() => handleRemoveBookmark(prop._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="card-body">
            <p>No Bookmarks available</p>
          </div>
        )}
      </div>
    );
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case "profile":
        return renderProfile();
      case "property":
        return renderProperties();
      case "bookmark":
        return renderBookmarks();
      default:
        return null;
    }
  };

  return (
    <>
      {loading ? (
        <PreloaderComponent />
      ) : (
        <>
          {user ? (
            <>
              {isModalOpen && (
                <Modal
                  title="Modal Title"
                  body="This is the modal body text."
                  onClose={closeModal}
                  redirectPath="/new-page" // Replace with your desired redirect path
                />
              )}
              {isBookmarkSuccess && (
                <Modal
                  title="Remove Bookmark"
                  body="You have sucessfully removed the property from your bookmark."
                  onClose={closeModal}
                  redirectPath="/new-page" // Replace with your desired redirect path
                />
              )}
              <NavigationBar />
              <div className="breadcrumbs">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                      <div className="breadcrumbs-content">
                        <h1 className="page-title">View Profile</h1>
                        <ul className="breadcrumb-nav">
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>View Profile</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card mb-4">
                        <div className="card-body text-center">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-circle img-fluid"
                            style={{ width: 150 }}
                          />
                          <h5 className="my-3">
                            {profile?.firstName} {profile?.lastName}
                          </h5>
                          <p className="text-muted mb-1">{profile?.email}</p>
                          <p className="text-muted mb-4">{profile?.state}</p>
                        </div>
                        <ul className="list-group list-group-flush rounded-3">
                          <li
                            className="list-group-item d-flex justify-content-center align-items-center p-3"
                            onClick={() => setSelectedComponent("profile")}
                          >
                            <i className="fas fa-globe fa-lg text-warning" />
                            <p className="mb-0">View Profile</p>
                          </li>
                          <li
                            className="list-group-item d-flex justify-content-center align-items-center p-3"
                            onClick={() => setSelectedComponent("property")}
                          >
                            <i className="fab fa-github fa-lg text-body" />
                            <p className="mb-0">My Property</p>
                          </li>
                          <li
                            className="list-group-item d-flex justify-content-center align-items-center p-3"
                            onClick={() => setSelectedComponent("bookmark")}
                          >
                            <i className="fab fa-github fa-lg text-body" />
                            <p className="mb-0">My Bookmarks</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-8">{renderComponent()}</div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <SignInWarning />
          )}
        </>
      )}
    </>
  );
};

export default ViewProfiles;
