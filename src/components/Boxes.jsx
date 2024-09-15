import React from "react";

const Boxes = () => {
  return (
    <div>
      <div className="boxes">
      <div className="container">
        <h4>How to order</h4>
        <h2>It's as easy as this.</h2>
        <div className="autoplay">
          <div className="box box01">
            <div className="icon-bx">
              <span class="material-symbols-outlined">home_pin</span>
            </div>
            <h5>Tell us where you are</h5>
            <p>
              We'll show you stores and restaurants nearby you can order from.
            </p>
          </div>
          <div className="box box02">
            <div className="icon-bx">
              <span class="material-symbols-outlined">lunch_dining</span>
            </div>
            <h5>Find what you want</h5>
            <p>Search for items or dishes, businesses or cuisines.</p>
          </div>
          <div className="box box03">
            <div className="icon-bx">
              <span class="material-symbols-outlined">restaurant</span>
            </div>
            <h5>Order for delivery or collection</h5>
            <p>We'll update you on your order's progress.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Boxes;
