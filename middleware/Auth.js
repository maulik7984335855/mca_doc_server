import jwt from 'jsonwebtoken'

import { Admin } from '../Models/Admin.js'


export const isauthenticated = async(req,res,next) =>{
    try {
        const token = req.header('Auth')
        if(!token)
        {
            return res.json({message:"Please Login First....",success:false})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        
        const id = decoded.admin
        // console.log(id);
        
        let admin = await Admin.findOne({_id:id})
        if(!admin)
        {
            return res.json({message:"Admin Not Found",success:false})
        }
        req.admin = admin;
        next()
        
        
    } catch (error) {
        res.json({message:error.message})
    }
}