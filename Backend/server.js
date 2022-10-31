const express = require('express')
const app = express()
const bodyparser=require("body-parser")
const cors = require('cors');
const socketIO=require("socket.io")
const connection= require("./database/connection")
//models
const user = require("./database/models/user")
const adviser= require("./database/models/adviser")
const chatRoom=require("./database/models/chatRoom")
const messages=require("./database/models/messages")
const { model } = require('mongoose');
const port=5000

// middleware
const auth=require("./middlewares/auth")
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({extended:false}))


// routes
const API=require("./routers/api")
const REGISTER=require("./routers/adviserRegister")
const SEARCH=require("./routers/search")
const CHATROOM=require("./routers/chatRoom")

app.use("/",API)
app.use("/",REGISTER)
app.use("/",SEARCH)
app.use("/",CHATROOM)




app.get('/', (req, res) => {
    res.send("hello world hey!!!")
})




const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 

// socket.io part

const io=socketIO(server) 

require("dotenv").config();
const jwt=require("jsonwebtoken")

io.use(async (socket, next) => {
  try {
    console.log(socket.handshake)
    console.log("socket.handshake")
    const token = socket.handshake.query.token
    
    console.log(token)
    const payload = await jwt.verify(token, process.env.JWT_SECRET);
    
    socket.userId = payload.id;
    next(); 
  } catch (err) {
    console.log(err)   
  } 
});


io.on("connection", (socket) => {
  console.log( "connected: " + socket.userId);

  socket.on("disconnect", () => {
    console.log("Disconnected: " + socket.userId);
  });
})
