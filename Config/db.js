import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mangodb_url=process.env.MANGODB_URL;
const connectDb = async(req,res)=>{
    try{
    const connection = await mongoose.connect(mangodb_url)
    console.log("Mangodb connection successfully");
    return connection;

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal server error in mangodb connection" });
    }
};
export default connectDb;

