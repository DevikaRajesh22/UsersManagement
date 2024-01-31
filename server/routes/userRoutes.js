const express = require('express');
const router = express.Router();
const {login,register,logout,profile,updateProfile} = require('../controllers/userController.js');
const {protect}=require('../middlewares/authMiddleware.js');
const upload=require('../middlewares/multerMiddleware.js');

router.post('/login', login);
router.post('/register',register);
router.get('/logout',logout);
router.get('/profile',protect,profile);
router.put('/updateProfile', protect, upload.single('image'), updateProfile);

module.exports = router;
