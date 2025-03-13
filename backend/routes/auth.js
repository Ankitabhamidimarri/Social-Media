// backend/routes/auth.js
const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');  // Make sure this path is correct!

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

module.exports = router;
