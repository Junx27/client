import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/images/profil.jpg";
import img2 from "../assets/images/profil2.jpg";
import img3 from "../assets/images/profil4.jpg";
import { useState } from "react";

function MenuSearch() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container-event">
      <div className="">
        <div className="container">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={img1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={img2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded"
                src={img3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default MenuSearch;
