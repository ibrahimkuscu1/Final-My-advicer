const mongoose= require("mongoose")

let adviserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    surname:{type:String,required:true},
    category:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}

})

let Advisers= new mongoose.model("adviser", adviserSchema);



module.exports=Advisers;