import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();




const connectDB = async () => {
    try {
        const mongoUrl = process.env.MONGODB_URL;
        
        const connection = await mongoose.connect(`${mongoUrl}/${DB_NAME}`);
        console.log(`\n MongoDB connection !! DB HOST: ${connection.connection.host}`);
    } catch (error) {
        console.log("mongodb connection error ", error);
        process.exit(1);
    }
}

export default connectDB;