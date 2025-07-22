
require("dotenv").config();
const express=require("express");
const app=express();
const port=process.env.Port;
const routes=require("./Routes/Router.js");
const http=require("http");
const server=http.createServer(app);
const {Server}=require("socket.io");
const io=new Server(server);
const bodyParser=require("body-parser");
const path=require("path");
const mongoose=require("mongoose");

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

app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("view",path.join(__dirname,"VIEW"));

app.use("/track",routes);

server.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})