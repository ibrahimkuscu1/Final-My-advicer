const express = require('express')
const app = express()
const cors = require('cors');
const connection= require("./database/connection")
const user = require("./database/models/user")
const adviser= require("./database/models/adviser")
const { model } = require('mongoose');
const port=5000

// middleware
app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({extended:false}))


// routes
const API=require("./routers/api")
const REGISTER=require("./routers/adviserRegister")

app.use("/",API)
app.use("/",REGISTER)




app.get('/', (req, res) => {
    res.send("hello world hey!!!")
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})