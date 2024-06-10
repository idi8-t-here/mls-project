const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    phoneNumber: {
        type: String,
    },
    password: {
        type: String,
    },
    userName: {
        type: String,
        unique: true
    },
    state: {
        type: String,
    },
    image: {
        type: String,
    },
    userType: {
        type: String,
    },
    userStatus: {
        type: String,
    },
    userRoles: {
        type: String,
    },
    licenceFront: {
        type: String
    },
    licenceBack: {
        type: String,
    },
    subscription: {
        tier: { type: String, default: 'Free' },
        validUntil: { type: Date },
      },
    
});

// Hash password before saving the user
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to match password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
