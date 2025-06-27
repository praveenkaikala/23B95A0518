import express from "express"
import { getAllUrlController, getUrlController, getUrlStatsController, urlShortnerController } from "../controller/url.controller.js";
const router=express.Router();


router.post("/shorturls",urlShortnerController)
router.get("/shorturls/all",getAllUrlController)
router.get("/shorturls/:url",getUrlStatsController)
router.get("/:url",getUrlController)
export default router