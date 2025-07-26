const mongoose = require("mongoose");
const User=require("./User.js");
const DataSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    Latitude: {
        type: String,
    },
    Longitude: {
        type: String,
    },

})

const Data =  mongoose.model("Data", DataSchema);
module.exports= Data ;