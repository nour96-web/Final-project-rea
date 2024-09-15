import React from "react";
import { Carousel } from "react-bootstrap";

const Slideshow = () => {
  return (
    <div>
      <div className="slidshow">
        <Carousel>
          <Carousel.Item>
            <img
              src="https://as2.ftcdn.net/v2/jpg/02/82/95/23/1000_F_282952309_jMG8RIMVWPP1MgVpzdciLJ1w3OaY7BUh.jpg"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://as2.ftcdn.net/v2/jpg/01/00/14/03/1000_F_100140350_9XYGwg3efFjxkSk3xJ0x6QyXWt8Na7rZ.jpg"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://as1.ftcdn.net/v2/jpg/04/96/86/82/1000_F_496868260_GqXLG2LpFKaHn4oHyMDEOHaShNakgVTQ.jpg"
              alt=""
            />
          </Carousel.Item>
        </Carousel>

        <div className="slogan">
          <h2>Order food and more</h2>
          <div className="cta">Order Now</div>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
