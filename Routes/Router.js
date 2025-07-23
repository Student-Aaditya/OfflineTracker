const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Data = require("../Model/Data");
const mongoose = require("mongoose");
const http=require("http");

const {Server}=require("socket.io");
const server=http.createServer(router);
const io=new Server(server);

main()
    .then(() => {
        console.log("mongo connected to the server");
    })
    .catch((err) => {
        console.log(err)
    })

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Track");
}



router.get("/map",(req,res)=>{
    res.render("map.ejs");
})

router.get("/data", async(req, res) => {
    const datas=await Data.find({});
    res.render("index.ejs",{datas});
})  

router.delete("/data/:id",async(req,res)=>{
    let {id}=req.params;
    await Data.findByIdAndDelete(id);
    res.redirect("/track/data");
})

module.exports = router;