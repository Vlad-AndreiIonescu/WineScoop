import React, { useState } from "react";

const FirstSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 3; // Numărul total de slide-uri

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideCount) % slideCount);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideCount);
  };

  return (
    <div>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}>
            <img src="872.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}>
            <img src="aa.png" className="d-block w-100" alt="..." />
          </div>
          <div className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}>
            <img src="ceva.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={goToPreviousSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={goToNextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default FirstSection;
