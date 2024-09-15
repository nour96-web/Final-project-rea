import React from "react";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";

const FoodListe = ({ el }) => {
  const { products } = useSelector((state) => state);
  return (
    <div>
      <div className="section-prod">
        <div className="title">
        <h2>Our produits</h2>
        <span class="material-symbols-outlined">local_dining</span>
        </div>
        <div className="flex-prod">
          {products.map((el) => (
            <FoodCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodListe;
