const Product = require("../models/Product");
const cloudinary = require("cloudinary").v2;
exports.createProduct = async (req,res)=>{
    try{
        
        const {name,newPrice,oldPrice,description,category}=req.body;
        
    if(!name||!newPrice||!oldPrice||!description||!category){
        return res.status(400).json({
            success:false,
            message:"Enter all details",
        })
    }
    // const supportedTypes = ["jpg", "jpeg", "png"];
    // const fileType = file.name.split('.')[1].toLowerCase();
    // console.log("File Type:", fileType);
    // if(!isFileTypeSupported(fileType, supportedTypes)) {
    //     return res.status(400).json({
    //         success:false,
    //          message:'File format not supported',
    //     })
    // }
    // const response = await uploadFileToCloudinary(file, "Codehelp");
    // console.log(response.secure_url);
    const newproduct = await Product.create({
        name,newPrice,oldPrice,description,category
    })
    return res.status(200).json({
        success:true,
        message:newproduct,
    })
    }catch(error){
        return res.status(401).json({
            success:false,
            message:error.message,
        })
    }

}
exports.getallproducts = async (req,res)=>{
    try{
        const allproducts = await Product.find();
    return res.status(200).json({
        success:true,
        data:allproducts
    })
    }catch(error){
        return res.status(401).json({
            success:false,
            message:error.message,
        })
    }

}
exports.getcategory = async (req,res)=>{
    try{
        const {category} = req.body;
        
        const allproducts = await Product.find({category:category});
        return res.status(200).json({
        success:true,
        data:allproducts
    })
    }catch(error){
        console.log(error.message)
        return res.status(500).json({
            success:false,
            message:error.message,
            data:"error"
            
        })
    }

}