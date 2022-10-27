const express = require('express')
const app = express()
const bodyparser=require("body-parser")
const cors = require('cors');
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




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 