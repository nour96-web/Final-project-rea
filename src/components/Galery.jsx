import React from "react";
import Slider from "react-slick";

function MultipleItems() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/01/09/09/01/italian-food-7706887_1280.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2024/05/06/17/24/salchipapas-8743826_1280.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/03/07/16/16/food-photography-7836039_960_720.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2023/01/17/07/59/mossel-dish-7724006_960_720.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2024/05/06/17/02/burgers-8743798_960_720.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
}

export default MultipleItems;
