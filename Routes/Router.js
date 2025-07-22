const express=require("express");
const { model } = require("mongoose");
const router=express.Router();
const mongoose=require("mongoose");
const {Data}=require("../Model/Data");

main()
.then(()=>{
    console.log("mongo connected to the server");
})
.catch((err)=>{
    console.log(err)
})

 async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Track");
}
router.get("/",(req,res)=>{
    res.send("hello");
})

router.get("/index",(req,res)=>{
    res.render("index.ejs");
})
router.get("/data",(req,res)=>{
    res.render("index.ejs");
})

router.post("/data",(req,res)=>{
    const {name,Latitude,Longitude}=req.body;
    console.log(name);
    const datas=new Data({
        name:name,
        Latitude:Latitude,
        Longitude:Longitude
        
    })
    datas.save();
    res.json({data:"submit successful"}).status(200);
})

module.exports=router;