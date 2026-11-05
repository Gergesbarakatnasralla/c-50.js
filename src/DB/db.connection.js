import mongoose from "mongoose";
import Config from "../config/db.config.js";

const connectDB =async () => {
    try {
         await mongoose.connect('mongodb://localhost:27017/ass7');
        console.log('Database connected successfully');
    } catch (error) {
        console.log("DB connection error",error);
        
    }
}

export default connectDB