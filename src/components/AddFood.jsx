import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCard } from "../redux/action";

const AddFood = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //------------------movie input states------------------------------
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [details, setDetails] = useState("");
  // fonctions
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Math.random(),
      name: name,
      imgUrl: imgUrl,
      descip: details,
      rating: price,
    };
    dispatch(addCard(newProduct));
    setDetails("");
    setImgUrl("");
    setName("");
    setPrice(0);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        ADD
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <label htmlFor="">Name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Image URL:</label>
            <input
              type="text"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
            <label htmlFor="">Details :</label>
            <input
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
            <label htmlFor="">Price : </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Button variant="primary" onClick={handleClose} type="submit">
              Confirm
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddFood;
