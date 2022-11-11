
import Footer from "./Footer"
import { useState} from "react";
import Button from 'react-bootstrap/Button';


export default function Home() {
    const [name, setName] = useState("");
    
    
    
    const redirect = ()=> {
        window.location.href = ("http://localhost:3000/search/"+name)
        
      }
      
    return (
        <div className="main">
            <div className="bg">
            <div className="searchContainer">
        <div className="content">
        <span className="head1">Find the Perfect</span>
      <br></br>
      <span className="head2">top rated Adviser</span>
    </div>
    <div className="SearchBar">
    <input 
    className="searchInput"
    value={name}
    placeholder="I need advice for"
    onChange={(e) => setName(e.target.value)}
    >
    </input>
    
    </div>
    <div className="btnBox">
    <Button onClick={redirect} className="btn" variant="primary">Find Advicer</Button>{' '}
    </div>
    

    
    </div>
    <Footer/>
    </div>
        
     </div>

    )
}


