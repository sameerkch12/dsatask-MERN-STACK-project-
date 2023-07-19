const express = require('express');
const router = express.Router();
const UserTask = require('../Model/UserTask');

router.get('/upcomingtask', async (req, res) => {
  try {
    // Retrieve user's email and current date from the request query parameters
    const { Email, BodyDate } = req.query;

    // Find the user in the database based on the email
    const user = await UserTask.findOne({ Email });

    if (!user) {
      // User not found in the database
      return res.status(404).json({ message: 'User not found' });
    }

    // Filter the tasks based on the current date using a for loop
    const upcomingTasks = [];
    for (let i = 0; i < user.Dates.length; i++) {
      const date = user.Dates[i];
      if (new Date(date.Date) > new Date(BodyDate)) {
        upcomingTasks.push(...date.Tasks);
      }
    }

    // Return the upcoming tasks
    res.status(200).json({ tasks: upcomingTasks });
  } catch (error) {
    // Handle any errors that occurred during the process
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;

/*
JSON forment to fateh upcoming Tasks from database
api for upcomingtask
(GET)
http://localhost:5000/api/upcomingtask?Email=sameer.sc62@gmail.com&BodyDate=2023-07-19
after ? add pass email and date
*/