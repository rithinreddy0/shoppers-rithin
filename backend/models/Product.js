const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require,
    },
    imageUrl:{
        type:String,
        
    },
    oldPrice:{
        type:String,
        require,
    },
    newPrice:{
        type:String,
        require,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
        enum:["Men","Women","Kids"],
        require,
    },
    
})
module.exports = mongoose.model("Product",productSchema);