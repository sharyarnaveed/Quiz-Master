const mongoose= require("mongoose")

const creatorSchema=new mongoose.Schema({
    name:{
    type:String,
    required:true,
    match: /^[A-Za-z ]+$/,
    
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

})

const Creator = mongoose.model('Creator', creatorSchema);

module.exports=Creator