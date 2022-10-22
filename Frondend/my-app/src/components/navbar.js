import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link className = 'navbar--items' to='/'>Home</Link>
          <Nav className="right-aligned" activeKey="/signUp">
          <Link className = 'navbar--items' to='/signUp'>SignUp</Link>
            {/* <Nav.Link href="#signUp">SignUp</Nav.Link> */}
            <Link className = 'navbar--items' to='/signIn'>SignIn</Link>
            <Link className = 'navbar--items' to='/adviser'>Adviser</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;