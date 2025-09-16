import mongoose from "mongoose";

const mapDataSchema=new mongoose.Schema({
    username:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    Longitude:{
        type:Number,
    },
    Latitude:{
        type:Number,
    }
});

const mapData=new mongoose.model("mapData",mapDataSchema);
export default mapData; 