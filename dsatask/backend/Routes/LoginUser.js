const express = require('express');
const router = express.Router();
const User = require('../Model/RegistrationModel');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored password
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Password is correct, proceed with authentication
    // You can generate and return a JWT token here for further authentication

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;


/*
JSON forment to Login user in database
api for create user
(POST)
http://localhost:5000/api/login
{
  "name": "John Doe",
  "email": "johndoe2@example.com",
  "password": "secretpassword",
  "confirmPassword": "secretpassword"
}
*/