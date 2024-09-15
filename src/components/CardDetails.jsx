import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = ({ products }) => {
  const params = useParams();
  const clickProd = products.find((el) => el.id === Number(params.id));
  return (
    <div>
      <div className="details">
        <img className="img-movie" src={clickProd.imgUrl} alt="Food img" />
        <div className="bloc-right">
          <h1>{clickProd.name}</h1>
          <h6>{clickProd.price} €</h6>

          <p> {clickProd.descip} </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
