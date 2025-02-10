import { User } from "../Models/User.js";

export const sendMessage = async(req,res) =>{
    try {
        const {name,email,phone,message} = req.body 
        if(!name || !email || !message)
        {
            return res.json({message:"All fields are required",success:false})
        }
        let user  = await User.create({name,email,phone,message})
        if(!user)
        {
            return res.json({message:"Sorry something error 😕",success:false})
        }
        res.json({message:"Thank you your message is saved",success:true,user})
    } catch (error) {
        res.json({message:error.message})
    }
}

export const fetchAllMessages = async(req,res) =>{
    try {
        const user = await User.find()
        if(!user)
        {
            return res.json({message:"Not Any message found",success:false})
        }
        res.json({message:"Successfully fetched",success:true,user})
    } catch (error) {
        res.json({message:error.message})
    }
}