import { Admin } from "../Models/Admin.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const adminRegister = async(req,res) =>{
    try {
        const {name,email,password} = req.body;
        if(!name || !email || !password)
        {
            return res.json({message:"ALl fields are required",success:false})
        }
        let register = await Admin.findOne({email})
        if(register)
        {
            return res.json({message:"Admin Already registered",success:false})
        }
        let hashPassword = await bcrypt.hash(password,10)
        register = await Admin.create({name,email,password:hashPassword});
        if(!register)
        {
            return res.json({message:"Registration failed",success:false})
        }
        res.json({message:"Registration Successfully",success:true,register})
    } catch (error) {
        res.json({message:error.message})
    }
}


export const adminLogin = async(req,res) =>{
    try {
        const {email,password} = req.body;
        if(!email || !password)
        {
            return res.json({message:"all fields are required",success:false})
        }
        let admin = await Admin.findOne({email})
        if(!admin)
        {
            return res.json({message:"Admin not found",success:false})
        }
        let compPassword = await bcrypt.compare(password,admin.password)
        if(!compPassword)
        {
            return res.json({message:"Password must be not same",success:false})
        }
        let token =jwt.sign({admin:admin._id},process.env.JWT_SECRET,{
            expiresIn:'365d'
        })
        res.json({message:`Welcome ${admin.name}`,success:true,token})
    } catch (error) {
        res.json({message:error.message,success:false})
    }
}