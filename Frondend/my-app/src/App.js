import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';




// importing Navbar Link Components
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./components/login";
import Register from "./components/register";
import SignUp from "./components/signup";
import Home from "./components/home"
import Navbar from "./components/navbar" 
import AdviserPage from './components/adviserPage';
import Chatroom from './components/chatroom';
import Search from "./components/search"



function App() {
      

return (

<Router className = "container">
<Navbar  />
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
<Route 
      path='/adviserPage/:id' element= {<AdviserPage/> }>
</Route>
<Route 
      path='/chatroom/:id' element={<Chatroom />}>
</Route>
<Route 
      path='/search/:name' element={<Search />}>
</Route>
</Routes>

</Router>
  ); 
}

export default App;
