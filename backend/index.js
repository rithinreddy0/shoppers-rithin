const express  = require('express');
const cors = require('cors')
const {dbConnect} = require("./cofig/Databaseconnect");
const { signup, login } = require('./controllers/User');
const { createProduct, getallproducts, getcategory } = require('./controllers/Product');
const { auth, isAdmin } = require('./middlewares/auth');
const { cloudinaryConnect } = require('./cofig/Cloudinaryconnect');
const App = express();
App.use(express.json());
App.use(
    cors({
    origin:"http://localhost:3000",
    credentials:true,
    })
)    
cloudinaryConnect();
dbConnect();
App.post("/signup",signup);
App.post("/login",login);
App.post("/test",auth,isAdmin,(req,res)=>{
    console.log("welcome admin"); 
    res.status(200).json({
        success:true,
        message:"Welcome admin"
    })
})
App.get("/getallproducts",getallproducts);
App.post("/getcategory",getcategory);

App.get("/admin",auth,isAdmin);
App.post("/createproduct",createProduct);
App.listen(4000,()=>{
    console.log("server started at 4000");
    
})
