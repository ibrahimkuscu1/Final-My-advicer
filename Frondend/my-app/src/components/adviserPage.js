import { useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export default function AdviserPage() {

    const [infos, setInfos] = useState([]) 

    
    const id=useParams()
    const myID=JSON.stringify(id)
    const myID2=myID.substring(7)
    const myID3=myID2.slice(0,-2)
    console.log(myID3.length)

   

    useEffect(()=>{
            
        axios.get("http://localhost:5000/search2/"  ).then(({data})=>{
            setInfos(data)})},[id])

      
             
        
        return (
        <>
        {infos.filter((dt)=>dt._id===myID3).map(infos =>  
            <div key={infos._id}>          
                <h1 style={{margin:"10px",cursor:"pointer", border:"solid 1px black", padding:"5px"}}
                >{infos.category}  {infos.name} {infos.surname}
                 
                 <Link to={"/chatroom/" + infos._id}>
                 <Button  variant="primary">Message</Button>{' '}
                </Link>
                </h1>
                </div>
)}
        
                </>

    )
}