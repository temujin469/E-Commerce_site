const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String,
    },
    role:{
        type:String,
        enum:["ADMIN","STORE","USER"],
        default:"USER",
    },
    rating:{
        type:Number,
        default:0,
        maxlength:5
    }
},{timestamps:true})

module.exports = mongoose.model("User",UserSchema)