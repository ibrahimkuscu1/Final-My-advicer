import React from "react";
import io from "socket.io-client"
 
const Chatroom =()=>{
    // const chatRoomId= match.params.id 
    // console.log(chatRoomId)
    
    
    const socket=io("http://localhost:5000",{'transports': ['websocket', 'polling'],query:{token:localStorage.getItem("CC_Token")}},{
        rejectUnauthorized: false // WARN: please do not do this in production
      }) 
    
    
    
    
     
    return(
        <div>
            chatroom
        </div>
    )
}

export default Chatroom