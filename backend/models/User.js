const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    subscription: {
        type: String,
        enum: ['basic', 'premium', 'enterprise'],
        default: 'basic'
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;