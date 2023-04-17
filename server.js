import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cors from "cors";

const app = express();
dotenv.config();

//mongoose connection
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to mongoDB");
} catch (error) {
  console.log(error);
}
//middleware
app.use(cors({ origin: "https://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(5000, () => {
  console.log("server is listening and here we go!..");
});
