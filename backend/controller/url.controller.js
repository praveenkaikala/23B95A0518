import urlModel from "../models/url.model.js";
import { generateShortUrl } from "../utils/genarateShortUlr.js";
import dotenv from "dotenv"
dotenv.config()
export const urlShortnerController=async (req, res) => {
  try {
    const {url,name,time}=req.body;
    if (!url || !/^https?:\/\/.+/.test(url)) {
      return res.status(400).json({
        message: "Invalid or missing URL",
        success: false,
        error: true,
      });
    }

    const shortcode = name || generateShortUrl();
    const existing = await urlModel.findOne({ shortUrl: shortcode });
    if (existing) {
      return res.status(409).json({
        message: "Shortcode already in use",
        success: false,
        error: true,
      });
    }

    const validity = time ? parseInt(time) : 30;
    const expireAt = new Date(Date.now() + validity * 60 * 1000);
    const newUrl = new urlModel({
      originalUrl: url,
      shortUrl: shortcode,
      expire: expireAt,
    });

    await newUrl.save();
    const hostname=`${process.env.URL}:${process.env.PORT}`
    res.status(201).json({
      shortLink: `${hostname}/${shortcode}`,
      expiry: expireAt.toISOString(),
    });
  } catch (error) {
    res.status(500).send({
        message:error.message || error,
        success:false,
        error:true
    })
  }
}


export const getUrlStatsController=async(req,res)=>{
     try {
    const { url } = req.params;
   
    const data = await urlModel.findOne({ shortUrl :url});
    if (!data) {
      return res.status(404).send("Short URL not found.");
    }

    if (new Date() > new Date(data.expire)) {
      return res.status(410).send("Link has expired.");
    }
     return res.status(200).send({
        message:"stats",
        data:data
     })
    
  } catch (error) {
        res.status(500).send({
        message:error.message || error,
        success:false,
        error:true
    })
    }
}


export const getUrlController=async(req,res)=>{
   try {
    const { url } = req.params;
   
    const data = await urlModel.findOne({ shortUrl :url});
    if (!data) {
      return res.status(404).send("Short URL not found.");
    }

    if (new Date() > new Date(data.expire)) {
      return res.status(410).send("Link has expired.");
    }
    data.clicks += 1;
    await data.save();
    res.redirect(data.originalUrl);
    
  } catch (error) {
        res.status(500).send({
        message:error.message || error,
        success:false,
        error:true
    })
}
}
