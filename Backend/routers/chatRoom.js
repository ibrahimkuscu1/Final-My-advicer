const express = require('express')

const  router= express.Router()

const chatRoomModel=require("../database/models/chatRoom")

const auth=require("../middlewares/auth")





router.route("/chatroom").post( auth, async(req,res)=>{
    console.log("helloşljlşljlllkl")
    try{
    
    
        if (!req.body.name )
        {return res.send({msg:"name is neccesary"})}

        
    
        const oldChatRoom= await chatRoomModel.findOne({name:req.body.name});
        if(oldChatRoom){
            res.status(409).send({msg:"please login, or use another email to register"})
        }
        else{
            const newChatRoom=chatRoomModel.create({
                name:req.body.name,
                
            }, (err)=>{
                if (err) {console.log(err)
                    
                }
                res.send({msg:"user registered",newChatRoom})
            })
        }
    }

        
    catch(err){
        
    }
})


router.route("/chatroom").get( auth, async(req,res)=>{
    const chatrooms = await chatRoomModel.find({});

  res.json(chatrooms); 
})
module.exports=router