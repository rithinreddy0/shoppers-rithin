const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
exports.signup = async (req,res)=>{
    try{
        let {name,email,password,confirmPassword,role} = req.body;
        role = 'customer'
        console.log(req.body)
    if(!name||!email||!password){
        return res.status(400).json({
            success:false,
            message:"enter all details"
        })
    }
    // if(password!==confirmPassword){
    //     return res.status(400).json({
    //         success:false,
    //         message:"password doesnot match"
    //     }) 
    // }
    const user = await User.findOne({email});
    if(user){
        return res.status(405).json({
            success:false,
            message:"account exists",
            data:100,
        })
    }
    const hashedpass = await bcrypt.hash(password,10);
    const newuser =  User.create({name,password:hashedpass,email,role});
    res.status(200).json({
        success:true,
        message:"account created successfully",
    })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email||!password){
        return res.status(400).json({
            success:false,
            message:"enter all details"
        })
        }
        let user = await User.findOne({email});
        if(!user){
        return res.status(401).json({
            success:false,
            message:"user not found"
        })
        }
        const payload = {
            name:user.name,
            address:user.address,
            role:user.role,
        }
        console.log(payload);
    if(await bcrypt.compare(password,user.password)){
         let token = jwt.sign(payload,"rithin",{
            expiresIn:"2h",
         })
         user=user.toObject();
         user.token=token;
         user.password = undefined;
         const options={
            expires:new Date(Date.now()+3*24*60*60*1000),
            httpOnly:true,
         }
         res.cookie("rithincookie",token,options).status(200).json({
            success:true,
            messsage:user
         })
    }
    else{
        return res.status(400).json({
            success:false,
            message:"password doesnot match"
        })
    }
}
    catch(error){
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}