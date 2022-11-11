import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import axios from 'axios';
import makeToast from "./toast"


function ColorSchemesExample() {
  const user=
  {
    email:"k",
    password:"n"
  }

  
function redirect (){
  window.location.href="/"
}
  function logOut(){ 
    axios.post (  "https://myadviser.herokuapp.com/login",
    user).then((res)=>{ localStorage.setItem("CC_Token", res.data);
      if(res.data.msg==='password is wrong')
    {
      makeToast("success", "Bye Bye")
      setTimeout(redirect,2000)
       
    }
     })}
  

 
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
            <Nav.Link  onClick={logOut}>Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;