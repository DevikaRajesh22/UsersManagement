const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    }
},
    {
        timestamps: true
    });

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin;