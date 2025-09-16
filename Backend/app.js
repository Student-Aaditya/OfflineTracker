if (process.env.NODE_ENV != "Production") {
    dotenv.config();
}
import express from 'express'
import path from 'path';
import router from './Router/routes.js'
import { __dirname, __filename } from './config.js';
import main from './database.js';
import passport from 'passport';
import passportStratergy from 'passport-local';
import session from 'express-session';
import cookie from 'cookie-parser'
import dotenv from 'dotenv'
import User from './Model/User.js';
import morgan from 'morgan';
import mapRoutes from './Router/mapRoutes.js'
import cors from 'cors'
const app=express();
const port=7056;


main();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"Public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"View"));
app.use(morgan("dev"));


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:["POST","GET","DELETE","UPDATE"]
}))
app.use(session({
    secret:process.env.SECRET,
    saveUninitialized:true,
    resave:false,
    cookie:{
        expires:3*24*60*60,
        maxAge:8*24*60*60
    }
}))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/",router);
app.use("/map",mapRoutes);

app.listen(port,(req,res)=>{
    console.log(`server workinh on ${port}`);
})