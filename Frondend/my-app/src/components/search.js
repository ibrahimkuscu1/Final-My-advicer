import React from "react"
import { useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Footer from "./Footer"





export default function Search() {
    const [infos, setInfos] = useState([]) 
    const name=useParams()
    
    const myID=JSON.stringify(name)
    const myID2=myID.substring(9)
    const myID3=myID2.slice(0,-2)
    
    console.log(myID3)
    React.useEffect(() => {
        axios.get("https://myadviser.herokuapp.com/search/" + myID3).then(({data})=>{
            setInfos(data)
            console.log(data)  
        })
    },[myID3])
    
    
    const redirect = (id)=> {
      window.location = `/adviserPage/${id}`
      console.log(id)
    }
    
  return (
    <div>
<div className="searchContainer">
            <div>
            {infos.map(infos =>  
            <div key={infos._id}>          
                <h3 onClick={()=>redirect(infos._id)} className="adviserBox"
                key={infos._id}> 
                <div className="profession">
                <h3 className="colorful">Profession:</h3> 
                <div className="miniBox"> {infos.category}</div>
                </div>
                <div className="profession">
                <h3 className="miniBox, colorful"> Name:</h3>
                <div className="miniBox">{infos.name}</div>
                <div className="miniBox"> {infos.surname}</div>
                </div>
                
                
                
                
                 

                </h3>

                </div>
                )}
            </div>
    
    </div>
    <Footer/>
    </div>
    
  );
}