import React, { useState } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
const NavBar = ({ search }) => {
  const [searchVal, setSearchVal] = useState("");
  const Onsearch = (e) => {
     e.preventDefault(); 
    search(searchVal);
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#">Shallow Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mx-2"
              aria-label="Search"
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <button onClick={() => Onsearch()} className="btn-search">
              Search
            </button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
