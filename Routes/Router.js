require("dotenv").config();
const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Data = require("../Model/Data");
const mongoose = require("mongoose");
const http = require("http");

const { Server } = require("socket.io");
const { jwtMiddleware } = require("../Controller/JWT");
const server = http.createServer(router);
const io = new Server(server);
const MongoDb=process.env.MongoUrl;
const User=require("../Model/User");
const session=require("express-session");
const flash=require("connect-flash");

const passport = require("passport");
const passportLocal = require("passport-local");
const { console } = require("inspector");




main()
    .then(() => {
        console.log("mongo connected to the server");
    })
    .catch((err) => {
        console.log(err)
    })

async function main() {
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect(MongoDb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 20000,  
        });
        console.log("Successful connection to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

router.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.success = req.flash("success"); 
    res.locals.error = req.flash("error");
    next();
});


router.get("/", async (req, res) => {
    const datas = await Data.find({}).populate("name");
    res.render("index.ejs", { datas, user: req.user }); // ✅
});

router.get("/map", async (req, res) => {
    const datas = await Data.find({}).populate("name");
    res.render("map.ejs", { datas, user: req.user }); // ✅
});


router.delete("/:id", async (req, res) => {
    let { id } = req.params;
    await Data.findByIdAndDelete(id);
    res.redirect("/");
})

router.get("/sign",(req,res)=>{
    res.render("./Auth/Sign.ejs");
})

router.post("/sign",async(req,res)=>{
    try{
    // res.send("jwt successful");
    const {username,email,password}=req.body;
    const UserData=new User({
        username:username,
        email:email,
    })
   await User.register(UserData, password);   
    res.redirect("/");
    }catch(err){
        console.log(err);
    }
})


router.get("/log",(req,res)=>{
    res.render("./Auth/Log.ejs");
})

router.post("/log", passport.authenticate("local", { 
    failureRedirect: "/log", 
    failureFlash: true 
}), (req, res) => {
    try{
    res.redirect("/");
    }catch(err){
        console.log(err);
    }
});

router.get("/logout", (req, res) => {
    try {
        req.logOut((err) => {
            if (err) {
                nextTick(err);
            }
            res.redirect("/");
        })
    }
    catch (err) {
        console.error(err);
        res.status(500).send("please fill the data");
    }
})

module.exports = router;