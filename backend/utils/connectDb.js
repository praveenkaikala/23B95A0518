import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const connectDb=async()=>{
    try {
        mongoose.connect(process.env.MONGO_URI,{
            dbName:"23b95a0518"
        }).then(()=>console.log("database connect")).catch((error)=>console.log(error))
    } catch (error) {
        console.log(error)
    }
}