const jwt=require("jsonwebtoken");
require("dotenv").config();
const jwtMiddleware=(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1];
    if (!token) return res.status().json({error:'Unauthorized'});

    try{
        const decodec=process.env.JWT_SECRET;
        res.user=decodec;
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({err:"invalid token"});
    }
}


// function to generate jwt token

const generate=(userData)=>{
    return jwt.sign(userData,process.env.JWT_SECRET);
}

module.exports={jwtMiddleware,generate};