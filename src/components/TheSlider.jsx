import React from "react";
import slideImage1 from "../assets/raimond-klavins-KvVCDvD1_t0-unsplash.jpg";
import slideImage2 from "../assets/roberto-nickson-vZ1JAXUO3-0-unsplash.jpg";
const imageStyle = {
  height: "650px",
  objectFit: "cover",
};

const TheSlider = () => {
  return (
    <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="First slide"
        ></li>
        <li
          data-bs-target="#carouselId"
          data-bs-slide-to="1"
          aria-label="Second slide"
        ></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img
            style={imageStyle}
            src={slideImage1}
            className="w-100 d-block"
            alt="First slide"
          />
        </div>
        <div className="carousel-item">
          <img
            style={imageStyle}
            src={slideImage2}
            className="w-100 d-block"
            alt="Second slide"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselId"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TheSlider;
