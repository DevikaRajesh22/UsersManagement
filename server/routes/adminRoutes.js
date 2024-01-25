const express = require('express');
const { adminLogin, addUser, getUser, editUser, deleteUser, blockUser, users, logoutAdmin } = require('../controllers/adminController');
const router = express.Router();

router.post('/adminLogin', adminLogin);
router.post('/addUser', addUser);
router.get('/getUser/:id', getUser);
router.put('/editUser', editUser);
router.delete('/deleteUser/:userId', deleteUser);
router.put('/blockUser', blockUser);
router.get('/users', users);
router.get('/logoutAdmin', logoutAdmin);

module.exports = router;