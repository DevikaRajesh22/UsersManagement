const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const Admin = require('../models/adminModel');
const bcrypt = require("bcryptjs");
const generateToken = require('../utils/generateToken');
const { json } = require("express");

//POST adminLogin()
const adminLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ status: false, message: "Invalid credentials" });
        throw new Error("Email or password not provided");
    }
    const admin = await Admin.findOne({ email });
    if (admin && admin.password == req.body.password) {
        generateToken(res, admin._id, 'admin');
        res.status(201).json({
            status: true,
            _id: admin._id,
            email: admin.email,
            message: "Logged in successfully",
        });
    } else {
        res.status(401).json({ status: false, message: "Invalid credentials" });
        throw new Error("Invalid email or password");
    }
});

//POST addUser()
const addUser = asyncHandler(async (req, res) => {
    try {
        console.log('add user');
        console.log(req.body);
        const { name, email, password, contactnumber } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400).json({ status: false, message: "user already exist" });
        } else {
            const addUser = new User({
                name,
                email,
                password: hashedPassword,
                phone: contactnumber
            });
            await addUser.save();
            res.status(201).json({ status: true, message: "user added succesfully" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Error creating user" });
    }
});

//GET getUser() for editing
const getUser = asyncHandler(async (req, res) => {
    console.log('get user');
    const userId = req.params.id;
    if (userId) {
        const user = await User.findById({ _id: userId })
        console.log(user);
        res.status(200).json({ user });
    }
});

//PUT editUser()
const editUser = asyncHandler(async (req, res) => {
    try {
        console.log('edit');
        console.log(req.body);
        const { name, email,phone } = req.body;
        const { id } = req.params;
        console.log(id);
        const user = await User.findById(id);
        console.log(user);
        if (user) {
            user.name = req.body.name
            user.email = req.body.email
            user.phone=req.body.phone
            const editUser = await user.save();
            console.log('edit user',editUser)
            res.status(200).json({
                status: true,
                _id: editUser._id,
                name: editUser.name,
                email: editUser.email,
                phone:editUser.phone
            });
        } else {
            res.status(404).json({ message: 'user not found' })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//DELETE deleteUser()
const deleteUser = asyncHandler(async (req, res) => {
    try {
        const { userId } = req.params;
        await User.findByIdAndDelete(userId);
        const users = await User.find();
        res.json({ status: true, message: 'User deleted successfully', users });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET users() shows users
const users = asyncHandler(async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 }).limit(10); // Sort by createdAt in ascending order
        res.json(users);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//GET logoutAdmin()
const logoutAdmin = asyncHandler(async (req, res) => {
    res.cookie("admin", '', {
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({ status: true, message: "User logged out" });
});

module.exports = { adminLogin, addUser, getUser, editUser, deleteUser, users, logoutAdmin };