const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerSchema = require("./Validation/authValidation");

// app.post("/register", async (req, res) => {
const createUser = async (req, res) => {
  try {
    const { error, value } = registerSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    //abortEarly: false to return all validation errors instead of stopping at the first one
    //stripUnknown: true to remove any fields that are not defined in the schema from the validated value

    if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message) // Map through the error details and extract the error messages to send in the response
      });
    }
    
    //get  data
    //const { username, email, password, role } = req.body;
    const { username, email, password, role } = value; // Use the validated and sanitized value from Joi
    // validation
    // if (!username || !email || !password)
    //   return res.status(400).json({ msg: "Invalid Data!!" }); // removed this validation as we are using Joi for validation

    const existUser = await User.findOne({ email });
    if (existUser)
      return res.status(400).json({ msg: "Account already Exist" });
    // Create New User
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashPassword,
      role,
    });
    // Response
    res.status(201).json({ msg: "Done Created User", data: user });
  } catch (error) {
    console.log(error);
  }
};

// app.post("/login", async (req, res) => {
const loginUser = async (req, res) => {
  try {
    
    const { error, value } = loginSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });
    if (error) {
      return res.status(400).json({
        msg: error.details.map((err) => err.message) 
      });
    }
    //const { email, password } = req.body;
    const { email, password } = value;
    // validation
    // if (!email || !password)
    //   return res.status(400).json({ msg: "Invalid Data!!" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "Account Not Exist" });
    // Match Password
    const matchPass = await bcrypt.compare(password, user.password);
    if (!matchPass) return res.status(400).json({ msg: "Invalid Password" });
    res.status(200).json({ msg: "Success Login" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUser, loginUser };
