const User = require("../models/User");
const jwt = require("jsonwebtoken")
const Product = require("../models/Product");
const { JsonWebTokenError } = require("jsonwebtoken");
exports.auth = async (req,res,next)=>{
    try{
        const token = req.body.token;
    if(!token) {
        return res.status(401).json({
        success:false,
        message:'Token Missing',
        });
    }
    
    try{
        const payload = await jwt.verify(token,"rithin");
        console.log(payload);
        req.user=payload;
    }catch(error){
        return res.status(400).json({
            success:false,
            message:error.message,
            data:"token is invalid"
        })
    }
    next();
    }catch(error){
        return res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}
exports.isAdmin = async (req,res,next)=>{
    const role = req.user.role;
    if(role=="Admin"){
        next();
    }
    else{
        return res.status(400).json({
            success:false,
            message:"Thhis is protected route for admin",
        })
    }
}