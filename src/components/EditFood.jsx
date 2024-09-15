import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editMovie } from "../redux/action";

const EditFood = ({ el }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //------------------movie input states------------------------------
  const [name, setName] = useState(el.name);
  const [imgUrl, setImgUrl] = useState(el.imgUrl);
  const [price, setPrice] = useState(el.price);
  const [details, setDetails] = useState(el.details);
  //---------------------------------------------

  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const editedCard = {
      id: el.id,
      name: name,
      img: imgUrl,
      details: details,
      price: price,
    };
    dispatch(editMovie(editedCard));
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleEdit}
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
            <label htmlFor="">Rating : </label>
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditFood;
