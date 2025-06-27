import express from "express";
import { connectDb } from "./utils/connectDb.js";
import cors from "cors"
import urlRoutes from "./routes/url.routes.js"
const app = express();
app.use(cors())
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send({
    message: "hello user",
  });
});
app.use("/",urlRoutes)
connectDb()
app.listen(5000, () => {
  console.log("server is running");
});
