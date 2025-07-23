require("dotenv").config();
const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const Data = require("../Model/Data");
const mongoose = require("mongoose");
const http = require("http");

const { Server } = require("socket.io");
const server = http.createServer(router);
const io = new Server(server);
const MongoDb=process.env.MongoUrl;

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



router.get("/map", (req, res) => {
    res.render("map.ejs");
})

router.get("/data", async (req, res) => {
    const datas = await Data.find({});
    res.render("index.ejs", { datas });
})

router.delete("/data/:id", async (req, res) => {
    let { id } = req.params;
    await Data.findByIdAndDelete(id);
    res.redirect("/track/data");
})

module.exports = router;