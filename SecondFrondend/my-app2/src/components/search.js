import { useState} from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';




export default function Search(props) {
    const [name, setName] = useState("");
    const [infos, setInfos] = useState([]) 

    function adviserSearch(){
        axios.get("https://myadviser.herokuapp.com/search/" + name).then(({data})=>{
            setInfos(data)
            console.log(data)  
        })
    }

    const redirect = (id)=> {
      window.location = `/adviserPage/${id}`
      console.log(id)
    }
    
  return (
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
    <Button onClick={adviserSearch} className="btn" variant="primary">Find Advicer</Button>{' '}
    </div>
    
    <div>
            {infos.map(infos =>  
            <div key={infos._id}>          
                <h1 onClick={()=>redirect(infos._id)} style={{margin:"10px",cursor:"pointer", border:"solid 1px black", padding:"5px"}}
                key={infos._id}> {infos.category} {infos.name} {infos.surname}
                 

                </h1>

                </div>
                )}
            </div>
    
    </div>
  );
}