const express = require('express');
const router = express.Router();
const {login,register,logout,profile,updateProfile} = require('../controllers/userController.js');

router.post('/login', login);
router.post('/register',register);
router.get('/logout',logout);
router.get('/profile',profile);
router.put('/updateProfile',updateProfile);

module.exports = router;
