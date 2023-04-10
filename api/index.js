import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
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

// Middlerwares
// This is used because we cannot send direct JSON to express server.
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.listen(8800, () => {
  connect();
  console.log("Connected to backend!!");
});
