import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './env'
})
const PORT = process.env.PORT || 3000;
connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("Express Error: ", error);
            throw error;
        });
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running at ${PORT}`)
        });
    })
    .catch((error) => {
        console.log('MongoDB connection failed !!', error);
    });
