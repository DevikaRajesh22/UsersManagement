const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    isBlocked: {
        type: Boolean,
        required: false,
    }
},
    {
        timestamps: true,
    });

const User = mongoose.model('User', userSchema)


module.exports = User;