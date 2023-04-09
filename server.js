import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//mongoose connection
try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to mongoDB");
} catch (error) {
  console.log(error);
}

app.listen(5000, () => {
  console.log("server is listening and here we go!..");
});
