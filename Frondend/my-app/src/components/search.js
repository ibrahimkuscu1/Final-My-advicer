import { useState} from "react";
import axios from 'axios';




export default function Search(props) {
    const [name, setName] = useState("");
    const [infos, setInfos] = useState([]) 

    function adviserSearch(){
        axios.get("http://localhost:5000/search/" + name).then(({data})=>{
            setInfos(data)
            console.log(data)  
        })
    }
    
  return (
    <div>
    <input 
    value={name}
    onChange={(e) => setName(e.target.value)}
    style={{width:"800px", height:"100px"}}>
    </input>
    <button onClick={adviserSearch}
    style={{width:"80px", height:"20px"}}>Search</button>
    <>
            {infos.map(infos =>  
            <div>          
                <h1
                key={infos._id}> {infos.category} {infos.name} {infos.surname}
                </h1>

                </div>
                )}
            </>
    
    </div>
  );
}