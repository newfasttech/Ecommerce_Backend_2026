import express, { json } from "express";
import dotenv from 'dotenv'
import connectDB from "./db/connectDB.js";
dotenv.config()
const app = express()
const port = process.env.App_url


// middelware 
app.use(express.json())

// connect Database
connectDB()

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})