import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import connectedMongoDb from "./database/db.js";



config({
  path: "./.env",
});



const port = process.env.PORT;
const app = express();


app.use(express.json());




connectedMongoDb();



app.listen(port, ()=>{
    console.log("Server is Running")
})