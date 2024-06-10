import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from './Carousel'
import Modal from "./Modal";

const ListingCard = ({ property }) => {
  const [agentId, setAgentId] = useState("");
  const [userx, setUserx] = useState([]);
  const [isBookmarkSuccess, setIsBookmarkSuccess] = useState(false);
  const users = sessionStorage.getItem('users');
  const user = JSON.parse(users);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:3000/api/user/email/${user.email}`)
        .then((response) => {
          setAgentId(response.data.data.user._id)
        });
    }
  }, [user]);

  const closeModal = () => {
    setIsBookmarkSuccess(false);
  };


  const handleBookmark = (e) => {
    e.preventDefault();

    console.log("Bookmark clicked");

    const propertyWithAdditionalFields = {
      ...property,
      bookId: agentId,
    };

    axios
      .post("http://localhost:3000/api/bookmark", propertyWithAdditionalFields)
      .then((response) => {
        console.log("Response success", response);
        setIsBookmarkSuccess(true);
      })
      .catch((error) => {
        console.error("Error adding bookmark", error);
      });
  };

  return (
    <div className="col-lg-6 col-md-6 col-12">
      {isBookmarkSuccess && (
            <Modal
              title="Add to Bookmark"
              body="You have sucessfully added property to your personal bookmark."
              onClose={closeModal}
              redirectPath="/new-page" // Replace with your desired redirect path
            />
          )}
          
      <div className="single-blog-grid">
        {/* Status Badge */}
        <div
          className="badge badge-pill"
          style={{
            position: "absolute",
            backgroundColor: (() => {
              switch (property.status) {
                case "for rent":
                  return "#28a745"; // Green
                case "sold":
                  return "red"; // Red
                case "forSale":
                  return "orange"; // Orange
                case "Rented":
                  return "red"; // Red
                default:
                  return ""; // Default color
              }
            })(),
            padding: "0.5rem 1rem",
            fontSize: "16px",
          }}
        >
          {property.status}
        </div>
        {/* End Status Badge */}
        <div className="blog-img">
          
          <Carousel images={[property.image1, property.image2, property.image3]} />
       
        </div>
        <div className="blog-content">
          <h4>
            <Link to={`/listingdetails/${property._id}`}>{property.title}</Link>
          </h4>
          <p>{property.description}</p>
          <div className="meta-info mt-2">
            <a className="date" href="javascript:void(0)">
              <i className="lni lni-timer" /> {property.city}
            </a>
            <a className="author" href="javascript:void(0)">
              <i className="lni lni-user" /> {property.state}
            </a>
          </div>
          <h6 className="mt-3">$ {property.price}</h6>
          <div className="button">
            <Link to={`/listingdetails/${property._id}`} className="btn">
              View Details
            </Link>{" "}
            <br />
            <a className="button" onClick={handleBookmark}>
              Bookmark
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
