import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
})

UserSchema.plugin(passportLocalMongoose);
const User=new mongoose.model("User",UserSchema);

export default User;

