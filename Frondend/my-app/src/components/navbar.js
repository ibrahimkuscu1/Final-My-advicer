import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function ColorSchemesExample() {

 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link to={"/"}>
        <Nav.Link  href="#/"> Home</Nav.Link>
            </Link>
          <Nav className="right-aligned" activeKey="/signUp">
          <Link to={"/signUp/"}>
          <Nav.Link  href="#signUp">SignUp</Nav.Link>
            </Link>
            <Link to={"/signIn/"}>
            <Nav.Link  href="#signIn">SignIn</Nav.Link>
            </Link>
            <Link to={"/adviser/"}>
            <Nav.Link  href="#adviser">Adviser</Nav.Link>
            </Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;