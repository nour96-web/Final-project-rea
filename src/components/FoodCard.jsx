import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

const FoodCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={el.imgUrl}
          style={{ width: "100%", height: "230px" }}
        />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text> {el.details}</Card.Text>
          <Card.Text>
            <p>{el.price} €</p>
          </Card.Text>
          <Button variant="danger">Login</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FoodCard;
