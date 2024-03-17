const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require,
    },
    email:{
        type:String,
        require,
    },
    password:{
        type:String,
        require,
    },
    address:{
        type:String,
    },
    phoeno:{
        type:Number,
    },
    userCartdetails:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    }],
    role:{
        type:String,
        enum:["Admin","customer"],
    }

})
module.exports = mongoose.model("User",UserSchema);