const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    Latitude: {
        type: String,
    },
    Longitude: {
        type: String,
    },

})

const Data = new mongoose.model("Data", DataSchema);
module.exports = { Data };