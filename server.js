import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import gigRoute from "./routes/gig.route.js";
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
app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);

app.listen(5000, () => {
  console.log("server is listening and here we go!..");
});
