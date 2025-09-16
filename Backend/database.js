import mongoose from "mongoose";

main()
.then(()=>{
    console.log("mongoose connected");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/offline");
}

export default main;