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
import Footer from "./components/Footer"
// import io from "socket.io-client"

function App() {
      // const [socket, setSocket] = React.useState(null);
    
      // const setupSocket = () => {
      //   const token = localStorage.getItem("CC_Token");
      //   if (token && !socket) {
      //       const newSocket=io("http://localhost:5000",{'transports': ['websocket', 'polling'],query:{token:localStorage.getItem("CC_Token")}}) 
    
      //     newSocket.on("disconnect", () => {
      //       setSocket(null);
      //       setTimeout(setupSocket, 3000);
            
            
      //     });
    
      //     newSocket.on("connect", () => {
            
      //     });
    
      //     setSocket(newSocket);
      //   }
      // };
    
      // React.useEffect(() => {
      //   setupSocket();
      //   //eslint-disable-next-line
      // }, []);

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
</Routes>
<Footer/>
</Router>
  ); 
}

export default App;
