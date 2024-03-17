const mongoose = require("mongoose");
exports.dbConnect=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/shoppers",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("Database is connected"))
    .catch((error)=>{
        console.log("eroor",error);
    })
}