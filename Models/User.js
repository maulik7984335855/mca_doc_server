import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
       
    },
    message:{
        type:String,
        required:true
    }
})

export const User = mongoose.model('User',userSchema)