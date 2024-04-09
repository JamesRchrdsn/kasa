import React, { useState, useEffect } from "react";
import data from "../../assets/data/logements.json";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showArrows = images.length > 1;
  const showImageCount = images.length > 1;

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="carousel">
      {showArrows && (
        <button className="arrow-left" onClick={goToPrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
          >
            <path
              d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
              fill="white"
            />
          </svg>
        </button>
      )}
      <img src={images[currentIndex]} alt="" />
      {showArrows && (
        <button className="arrow-right" onClick={goToNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </button>
      )}{" "}
      {showImageCount && (
        <div className="image-count">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  );
}

function CarouselContainer({ id }) {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const lodging = data.find((item) => item.id === id);
    if (lodging) {
      setPictures(lodging.pictures);
    }
  }, [id]);

  return <Carousel images={pictures} />;
}

export default CarouselContainer;
