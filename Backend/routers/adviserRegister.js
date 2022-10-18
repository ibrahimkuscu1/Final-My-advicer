const express = require('express')
const bcrypt = require("bcrypt")
const  router= express.Router()
const jwt=require("jsonwebtoken")
require("dotenv").config();
const advicerModel=require("../database/models/adviser")

router.route("/register").post( async(req,res)=>{
    console.log("hello22")
    try{
        const adviserInfo={
            name:req.body.name,
            surname:req.body.surname,
            category:req.body.category,
            email:req.body.email,
            password:req.body.password
        }
    
        if (!req.body.name || !req.body.surname ||!req.body.category ||!req.body.email ||!req.body.password )
        {return res.send({msg:"username, email and password are neccesary"})}

        
    
        const oldAdviser= await advicerModel.findOne({email:req.body.email});
        if(oldAdviser){
            res.status(409).send({msg:"please login, or use another email to register"})
        }
        else{
            const encryptedPassword= await bcrypt.hash(req.body.password,12);
            const newAdviser=advicerModel.create({
                name:req.body.name,
                surname:req.body.surname,
                category:req.body.category,
                email:req.body.email,
                password:encryptedPassword
            }, (err)=>{
                if (err) {console.log(err)
                    
                }
                res.send({msg:"adviser registered",newAdviser})
            })
        }
    }

        
    catch(err){
        
    }
})

router.route("/loginAdviser").post( async(req,res)=>{
    // const user ={
    //         email:req.body.email,
    //         password:req.body.password
    // }
    try{
        if(!req.body.email || !req.body.password){
            return res.send({msg:"invalid email or password"})
        }
    
        const advisers= await advicerModel.findOne({email:req.body.email});
        if(!advisers){
            res.send({msg:"please enter valid email and password"})
        }
        else{
            const validatePassword= await bcrypt.compare(
                req.body.password,
                advisers.password
            )
            if(validatePassword){
                const payload={
                    name:advisers.name,
                    email:advisers.email
                }
                const token= jwt.sign(payload, process.env.Private_Key,{expiresIn:"2h"});
                res.send(token) 
                console.log("success")
        }
      
    }       
        
    }

    catch(err){
        console.log(err)
    }
   
});

module.exports=router