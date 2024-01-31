const express = require('express');
const { adminLogin, addUser, getUser, editUser, deleteUser, users, logoutAdmin } = require('../controllers/adminController');
const router = express.Router();

router.post('/adminLogin', adminLogin);
router.post('/addUser', addUser);
router.get('/getUser/:id', getUser);
router.put('/editUser/:id', editUser);
router.delete('/deleteUser/:userId', deleteUser);
router.get('/users', users);
router.get('/logoutAdmin', logoutAdmin);

module.exports = router;