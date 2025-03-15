import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
{
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true //to make the data optimised searchable
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true //to make the data optimised searchable
    },
    avatar:{
        type:String, //cloudinery url
        required:true,
    },
    coverImage:{
        type:String
    },
    watchHistory:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    refreshToken:{
        type:String
    }
},{timestamps:true});

userSchema.pre("save", async function(){
    if(!this.isModified("password"))return next();

    this.password = await bcrypt.hash(this.password,10);
    next();
})

userSchema.method.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

export const User = mongoose.Model("User",userSchema);