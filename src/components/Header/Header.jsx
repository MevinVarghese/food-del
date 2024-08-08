import React from "react";
import { Carousel } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Carousel className="header-carousel" interval={3500}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.solecollector.com/complex/image/upload/agmyiyv5puh8gzjl2omb.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://straatosphere.com/wp-content/uploads/2023/02/puma-booth-update-.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
