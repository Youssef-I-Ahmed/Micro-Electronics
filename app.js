require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

async function dbConnect() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

dbConnect();
// requie Models
const User = require("./Models/User");

app.post("/register", async (req, res) => {
  try {
    //get  data
    const{username,email,password,role}=req.body
  } catch (error) {
    // validation
    if (!username || !email || !password || !role) return req.status(400).json({msg: "Invalid Data!!"});
    // Create New User
    // Response
  }
})



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});