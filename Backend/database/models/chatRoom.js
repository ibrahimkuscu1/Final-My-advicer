const mongoose= require("mongoose")

let chatRoomSchema = new mongoose.Schema({
    name:{type:String,required:true},
    
})

let ChatRoom= new mongoose.model("chatRoom", chatRoomSchema);



module.exports=ChatRoom;