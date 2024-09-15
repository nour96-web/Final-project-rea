import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Entete = () => {
  return (
    <div>
      <div className="flex-top">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Card">Card</Nav.Link>
                <Nav.Link href="#Gallery">Gallery</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Entete;
