const middleWare={
    middleData:(req,res,next)=>{
        if(req.body.role=="admin"){
            res.status(200).json({msg:"a admin"});
            next();
        }
    }
}

export default middleWare;  