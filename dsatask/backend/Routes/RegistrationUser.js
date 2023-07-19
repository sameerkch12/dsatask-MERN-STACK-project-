const express = require('express');
const router = express.Router();
const User = require('../Model/RegistrationModel');



// Signup route
router.post('/signup', async (req, res) => {
    try {
      const { name, email, password, confirmPassword } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }
  
      // Create a new user
      const newUser = new User({
        name,
        email,
        password,
        confirmPassword
      });
  
      await newUser.save();
      res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
      
    }
  });
  
module.exports = router;


/*
JSON forment to create user in database
api for create user
(POST)
http://localhost:5000/api/signup
{
  "email": "johndoe@example.com",
  "password": "secretpassword"
}
*/