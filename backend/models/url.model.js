import mongoose from "mongoose";


const urlSchema=mongoose.Schema({
    originalUrl:{
        type:String,
        
    },
    shortUrl:{
        type:String,
        unique:true
    },
    expire:{
        type:Date,
        
    },
    clicks:{
        type:Number,
        default:0
    },
    created:{
        type:Date,
        default:new Date()
    }
})


const urlModel=mongoose.model("url",urlSchema)

export default urlModel