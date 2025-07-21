const express=require("express");
const app=express();
const port=8040;
app.get("/",(Req,res)=>{
    res.send("hello world");
})

app.listen(port,(req,res)=>{
    console.log(`server working on ${port}`);
})