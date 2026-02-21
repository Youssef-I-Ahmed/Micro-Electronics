const User = require("../Models/User");
const bcrypt = require("bcrypt");

// app.post("/register", async (req, res) => {
    const createUser = async (req, res) => {
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
};

// app.post("/login", async (req, res) => {
const loginUser = async (req, res) => {
  try {
    const{email,password}=req.body
        // validation
    if (!email || !password) return res.status(400).json({msg: "Invalid Data!!"});

    const user = await User.findOne({email});
    if (!user) return res.status(404).json({msg: "Account Not Exist"})
      // Match Password
    const matchPass = await bcrypt.compare(password,user.password);
    if(!matchPass) return res.status(400).json({msg: "Invalid Password"})
    res.status(200).json({msg:"Success Login"})
  } catch (error) {
    console.log(error); 
  }
};

module.exports = {createUser, loginUser};