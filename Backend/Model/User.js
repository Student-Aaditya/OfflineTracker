import { time } from "console";
import mongoose from "mongoose";
import { type } from "os";
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
    },
   createdAt: {
        type:String,
        default:Date(),
        required:false
    }
},{
    timestamps:true
}
)

UserSchema.plugin(passportLocalMongoose);
const User=new mongoose.model("User",UserSchema);

export default User;

