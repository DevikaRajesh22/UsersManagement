const asyncHandler = require("express-async-handler");
const user = require('../models/userModel');
const bcrypt = require("bcryptjs");
const { json } = require("express");

//POST adminLogin()
const adminLogin=asyncHandler(async(req,res)=>{
    console.log('admin login');
});

//POST addUser()
const addUser=asyncHandler(async(req,res)=>{
    console.log('add user');
})

//GET getUser()
const getUser=asyncHandler(async(req,res)=>{
    console.log('get user');
});

//PUT editUser()
const editUser=asyncHandler(async(req,res)=>{
    console.log('edit user');
});

//DELETE deleteUser()
const deleteUser=asyncHandler(async(req,res)=>{
    console.log('delete user');
});

//PUT blockUser()
const blockUser=asyncHandler(async(req,res)=>{
    console.log('block user');
});

//GET users()
const users=asyncHandler(async(req,res)=>{
    console.log('users');
});

//GET logoutAdmin()
const logoutAdmin=asyncHandler(async(req,res)=>{
    console.log('logout admin');
});

module.exports = { adminLogin,addUser,getUser,editUser,deleteUser,blockUser,users,logoutAdmin };