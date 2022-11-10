import React from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client"
import Footer from "./Footer"

 
const Chatroom =()=>{
    const id=useParams()
    const myID=JSON.stringify(id)
    const myID2=myID.substring(7)
    const myID3=myID2.slice(0,-2)
    const chatroomId=myID3
     console.log(chatroomId)

     const [socket, setSocket] = React.useState(null);   
    const [messages, setMessages] = React.useState([]);
    const messageRef = React.useRef();
  
    const setupSocket = () => {
      const token = localStorage.getItem("CC_Token");
      if (token && !socket) {
          const newSocket=io("http://localhost:5000",{'transports': ['websocket', 'polling'],query:{token:localStorage.getItem("CC_Token")}}) 
  
        newSocket.on("disconnect", () => {
          setSocket(null);
          setTimeout(setupSocket, 3000);
          
          
        });
  
        newSocket.on("connect", () => {
          
        });
  
        setSocket(newSocket);
      }
      
      console.log(socket)
      sendMessage()
    };
  




  const sendMessage = () => {
    if (socket) {
      socket.emit("chatroomMessage", {
        chatroomId,
        message: messageRef.current.value,
      });

      messageRef.current.value = "";
    }
  };
   
    
  if (socket) {
    socket.on("newMessage", (message) => {
      const newMessages = [...messages, message];
      setMessages(newMessages);
    });
  }
  //eslint-disable-next-line
  
     React.useEffect(() => {
        if (socket) {
          socket.emit("joinRoom", {
            chatroomId,
          });
        }
    
        return () => {
          //Component Unmount
          if (socket) {
            socket.emit("leaveRoom", {
              chatroomId,
            });
          }
        };
        
        //eslint-disable-next-line
      }, [socket]);
    
    
     
    return(
      <div>
<div className="chatroomPage">
      <div className="chatroomSection">
        <div className="cardHeader">Adviser Name</div>
        <div className="chatroomContent">
          {messages.map((message,i) => (
            <div key={i} className="message">
              <span className= "otherMessage"
                >
                {message.userName}:
              </span>{" "}
              {message.message}
            </div>
          ))} 
        </div>
        <div className="chatroomActions">
          <div>
            <input
              type="text"
              name="message"
              placeholder="Say something!"
              ref={messageRef}
            />
          </div>
          <div>
            <button className="join" onClick={setupSocket} >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
      </div>
        
    )
}

export default Chatroom;