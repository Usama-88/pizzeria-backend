import express, { Response, Request} from "express";
import MyUserRoutes from './routes/MyUserRoutes'
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

// database connection
mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log("Database is connected Successfully")
});

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors());

// User Route
app.use("/api/my/user", MyUserRoutes);

app.listen(PORT, () => {
    console.log(`Server Started on Port: ${PORT}`)
})
