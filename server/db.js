import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

mongoose.set("strictQuery", true);

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
    } catch {
        console.error(`error: ${e.message}`);
        process.exit(1);
    }
};
