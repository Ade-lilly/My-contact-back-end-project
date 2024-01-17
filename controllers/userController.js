const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js")
const bcrypt = require("bcrypt")
// description register a user
// route POST /api/users/register
// access public

const registerUser = asyncHandler(async (req, res)=>{
    res.json({message: "Register the user"})
 });

// description loginuser
// route POST /api/users/login
// access public

const loginUser = asyncHandler(async (req, res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are required")
    }

    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400)
        res.json({message:"User already exist"})
    }
    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);
    res.json({message: "Login user"})
});

// description currentUserInfo
// route POST /api/users/current
// access private

const currentUser = asyncHandler(async (req, res)=>{
    res.json({message: "getting the current info"})
 });

  module.exports = {registerUser, loginUser, currentUser};