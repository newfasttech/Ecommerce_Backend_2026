import express, { json } from "express";
import dotenv from 'dotenv'
import connectDB from "./db/connectDB.js";
import routes from './routes/index.js'
dotenv.config()
const app = express()
const port = process.env.port


// middelware 
app.use(express.json())

// connect Database
connectDB()
//routes
app.use(routes)
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})