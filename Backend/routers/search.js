const express = require('express')
const  router= express.Router()
const Adviser= require("../database/models/adviser")

router.route("/search/:key").get( async (req,res)=>{
 let data = await Adviser.find(
    {
        "$or":[
            {
                category:{$regex:req.params.key }
                
            },
            {
                name:{$regex:req.params.key }
            }
        ]
    }
 )
 res.send(data)
})

module.exports=router