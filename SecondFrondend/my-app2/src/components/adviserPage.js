import { useEffect, useState} from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import makeToast from "./toast"
import Footer from "./Footer"

export default function AdviserPage() {

    const [infos, setInfos] = useState([]) 

    
    const id=useParams()
    const myID=JSON.stringify(id)
    const myID2=myID.substring(7)
    const myID3=myID2.slice(0,-2)
    
    
    

    function redirect (){
      window.location.href="/signIn"
    }
   

    useEffect(()=>{
            
        axios.get("https://myadviser.herokuapp.com/search2/", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("CC_Token"),
            }} ).then(({data})=>{
            setInfos(data)})
            .catch((err)=> 
            {
              makeToast("error", "Firstly sign in")
              setTimeout(redirect,2000)
             
          })},[id])

      
             
        
        return (
        <div className="main">
        {infos.filter((dt)=>dt._id===myID3).map(infos =>  
            <div key={infos._id} className="adviserContainer">          
                <div className="divv">
                <h2 
                >{infos.category}
                </h2>
                </div>
                <div className="divv">
                <h4>Adviser İnformation</h4>
                {infos.name} {infos.surname}
                </div>
                <div className="divv">
                <h4>About Adviser</h4>
                {infos.information}
                </div>
                <div className="divv">
                <h4>Communication Adviser</h4>
                {infos.contact}
                </div>
                 <Link to={"/chatroom/" + infos._id}>
                 <Button  variant="primary">Message</Button>{' '}
                </Link>
                
                </div>
)}
        <Footer/>
                </div>

    )
}