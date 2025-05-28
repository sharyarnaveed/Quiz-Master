const mongoose= require("mongoose")

const creatorSchema=new mongoose.Schema({
    name:{
    type:String,
    required:true,
    match: /^[A-Za-z ]+$/,
    
    }
})