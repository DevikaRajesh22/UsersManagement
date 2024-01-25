const asyncHandler = require("express-async-handler");
const user = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//POST login()
const login=asyncHandler(async(req,res)=>{
    console.log('login');
});

//POST register()
const register=asyncHandler(async(req,res)=>{
    console.log('register');
});

//GET logout()
const logout=asyncHandler(async(req,res)=>{
    console.log('logout');
});

//GET profile()
const profile=asyncHandler(async(req,res)=>{
    console.log('profile');
});

//PUT updateProfile()
const updateProfile=asyncHandler(async(req,res)=>{
    console.log('update profile');
});

module.exports = { login,register,logout,profile,updateProfile };