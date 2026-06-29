import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.dbUri)
        console.log(`Database is Connected..`);

    } catch (err) {
        console.log(err);

    }
}

export default connectDB