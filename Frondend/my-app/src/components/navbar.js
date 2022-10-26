import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {

  const redirect = ()=> {
    window.location = "./signUp"
  }
  const redirect2 = ()=> {
    window.location = "./signIn"
  }
  const redirect3 = ()=> {
    window.location = "./adviser"
  }

  const redirect4 = ()=> {
    window.location = "./"
  } 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Nav.Link onClick={redirect4} >Home</Nav.Link>
          <Nav className="right-aligned" activeKey="/signUp">
            <Nav.Link onClick={redirect} href="#signUp">SignUp</Nav.Link>
            <Nav.Link onClick={redirect2} href="#signUp">SignIn</Nav.Link>
            <Nav.Link onClick={redirect3} href="#signUp">Adviser</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;