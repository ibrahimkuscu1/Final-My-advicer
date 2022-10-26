import { useState} from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';




export default function Search(props) {
    const [name, setName] = useState("");
    const [infos, setInfos] = useState([]) 

    function adviserSearch(){
        axios.get("http://localhost:5000/search/" + name).then(({data})=>{
            setInfos(data)
            console.log(data)  
        })
    }

    const redirect = (id)=> {
      window.location = `/adviserPage/${id}`
      console.log(id)
    }
    
  return (
    <div>
    <div>
    <input 
    value={name}
    onChange={(e) => setName(e.target.value)}
    style={{width:"200px", height:"50px"}}>
    </input>
    <Button onClick={adviserSearch} variant="primary">Search</Button>{' '}
    </div>
    
    <>
            {infos.map(infos =>  
            <div key={infos._id}>          
                <h1 onClick={()=>redirect(infos._id)} style={{margin:"10px",cursor:"pointer", border:"solid 1px black", padding:"5px"}}
                key={infos._id}> {infos.category} {infos.name} {infos.surname}
                 <Button  variant="primary">Message</Button>{' '}

                </h1>

                </div>
                )}
            </>
    
    </div>
  );
}