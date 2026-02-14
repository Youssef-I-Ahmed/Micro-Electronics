require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

const port = process.env.PORT || 4000;

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
        // validation
    if (!username || !email || !password) return req.status(400).json({msg: "Invalid Data!!"});

    const existUser = await User.findOne({email});
    if (existUser) return res.status(400).json({msg: "Account already Exist"})
    // Create New User
    const hashPassword = await bcrypt.hash(password,10)
    const user = await User.create({
      username, email,
      password: hashPassword,
      role
    })
    // Response
    res.status(201).json({msg: "Done Created User", data: user,})
  } catch (error) {
    console.log(error); 
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});