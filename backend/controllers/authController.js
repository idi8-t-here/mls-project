const User = require('../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, password, userName, state, userType, userRoles } = req.body;

    try {
        const newUser = new User({ firstName, lastName, email, phoneNumber, password, userName, state, userType, userRoles });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: 'User registration failed' });
    }
};
exports.login = (req, res, next) => {
    const { email, password } = req.body;

    console.log("Login request received:", { email, password }); // Log the email and password received

    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err) {
            console.error("Passport authentication error:", err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (!user) {
            console.log("Authentication failed:", info.message || 'Login failed'); // Log any authentication failure messages
            return res.status(400).json({ message: info.message || 'Login failed' });
        }

        console.log("User authenticated successfully:", user);
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // Send response with token and user data
        res.json({ token, user });
    })(req, res, next);
};