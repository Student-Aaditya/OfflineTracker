
require("dotenv").config();
const express=require("express");
const app=express();
const port=process.env.Port;
const routes=require("./Routes/Router.js");

const bodyParser=require("body-parser");
const path=require("path");
const mongoose=require("mongoose");
const http=require("http");
const {Server}=require("socket.io");
const Data = require("./Model/Data.js");
const server=http.createServer(app);
const io = new Server(server);
const methodoverride=require("method-override");


app.use(methodoverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"VIEW"));

app.use("/track",routes);

io.on("connection",(socket)=>{
   
    socket.on("send-location",function(data){
      io.emit("received-location",{id:socket.id,...data});
       const mapdata=new Data({
        name:"testing",
        Longitude:data.longitude,
        Latitude:data.latitude,
      })
      mapdata.save();
    })
    
    console.log("socket connected");

    socket.on("disconnect",function(){
        io.emit("user-disconnected",socket.id)
    })
})

server.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})

module.exports=app;