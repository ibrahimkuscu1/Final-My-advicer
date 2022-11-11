import React from "react"
import { useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Footer from "./Footer"





export default function Search() {
    const [infos, setInfos] = useState([]) 
    const name=useParams()
    
    console.log(name)
    React.useEffect(() => {
        axios.get("https://myadviser.herokuapp.com/search" + name).then(({data})=>{
            setInfos(data)
            console.log(data)  
        })
    },[name])
    
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
                <h3>Profession:</h3> {infos.category}

                {infos.name} 
                {infos.surname}
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