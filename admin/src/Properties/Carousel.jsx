import React, { useState } from "react";
import "../../public/assets/css/carousel.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === currentIndex ? "carousel-item active" : "carousel-item"
            }
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={
                image
                  ? `http://localhost:3000/${image}`
                  : "http://localhost:3000/uploads/sample.jpg"
              }
              alt={`Slide ${index + 1}`}
              onClick={openModal}
            />
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-button" onClick={nextSlide}>
        Next
      </button>
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <img
            className="modal-content"
            src={`http://localhost:3000/${images[currentIndex]}`}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;
