import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config(); // Using this we will access out data in .env file.

// Function to Connect to backend server.
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

// For again try to connect with mongoDB.
mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!!!");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected!!!");
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend!!");
});
