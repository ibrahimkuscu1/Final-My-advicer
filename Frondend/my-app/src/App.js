import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// importing Navbar Link Components
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./components/login";
import Register from "./components/register";
import SignUp from "./components/signup";
import Home from "./components/home"
import Navbar from "./components/navbar" 


function App() {
  return (

<Router className = "container">
<Navbar />
<Routes className = "pageContainer">
<Route 
      path='/' element= {<Home />}>
</Route>

<Route 
      path='/signUp' element= {<SignUp/>}>
</Route>

<Route 
      path='/signIn' element= {<SignIn/> }>
</Route>
<Route 
      path='/adviser' element= {<Register/> }>
</Route>
</Routes>
</Router>
      
      
     
     
    
    
  );
}

export default App;
