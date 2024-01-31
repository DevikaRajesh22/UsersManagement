const asyncHandler = require("express-async-handler");
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');
const jwt = require('jsonwebtoken');
const swal =require('sweetalert2');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'drg0tpesm',
    api_key: '791429244689684',
    api_secret: 'IH5wg42RCuWEqb8-3llD7hlNIec'
});

//POST login()
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(200).send('Email and password are required');
        throw new Error('Email and password are required');
    }
    const user = await User.findOne({ email });
    if (user) {
        const hashedPassword = user.password;
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (passwordMatch) {
            generateToken(res, user._id, 'user');
            res.status(201).json({
                status: true,
                _id: user._id,
                name: user.name,
                email: user.email,
                phone:user.phone
            });
        } else {
            // Display SweetAlert for incorrect password
            swal.fire({
              icon: 'error',
              title: 'Incorrect Password',
              text: 'Please enter the correct password.',
            });
            res.status(200).json({ status: false, message: 'Wrong email or password' });
        }
    } else {
        res.status(200).json({ status: false, message: 'User doesn\'t exist' });
    }
});


//POST register()
const register = asyncHandler(async (req, res) => {
    const { name, email, phone, password } = req.body;
    try {
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            res.status(200).json({ status: false, message: "Email already exists" });
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name: name, email: email, phone: phone, password: hashedPassword });
        await user.save();
        if (user) {
            generateToken(res, user._id, 'user');
            res.status(201).json({
                status: true,
                _id: user._id,
                name: user.name,
                email: user.email
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data')
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Error creating user" });
    }
});

//GET logout()
const logout = asyncHandler(async (req, res) => {
    res.cookie('user', '', {
        httpOnly: true,
        expires: new Date(0)
    });
    res.status(200).json({ message: " user logged Out" });
});

//GET profile()
const profile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            image: user.image // Include image data
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

//PUT updateProfile()
const updateProfile = asyncHandler(async (req, res) => {
    try {
        const { id } = req.query
        const user = await User.findById(id);
        const image = req.file;
        if (user) {
            user.name = req.body.name;
            user.email = req.body.email;
            user.phone=req.body.phone;
            if (image) {
                let result = await cloudinary.uploader.upload(image.path)
                user.image = result.secure_url
            } else {
                user.image = user.image
            }
            if (req.body.password) {
                const hashedPassword = await bcrypt.hash(req.body.password, 10)
                user.password = hashedPassword
            }
            const updatedUser = await user.save();
            res.status(200).json({
                status: true,
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                image: updatedUser.image
            });
        } else {
            res.status(404)
            throw new Error('User not found');
        }
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = { login, register, logout, profile, updateProfile };