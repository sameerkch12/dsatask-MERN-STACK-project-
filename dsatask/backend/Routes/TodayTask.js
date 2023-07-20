const express = require('express');
const router = express.Router();
const UserTask = require('../Model/UserTask');

router.get('/todaytask', async (req, res) => {
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
    const TodayTasks = [];
    for (let i = 0; i < user.Dates.length; i++) {
      const date = user.Dates[i];
      console.log("DATABASE DATE ->",date.Date)
      console.log("BODYDATE DATE ->",BodyDate)
      if ( (new Date(date.Date).getTime() === new Date(BodyDate).getTime()) )  {
        TodayTasks.push(...date.Tasks);
      }
    }

    // Return the upcoming tasks
    res.status(200).json({ tasks: TodayTasks });
  } catch (error) {
    // Handle any errors that occurred during the process
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;

/*
JSON forment to fateh Today Tasks from database
api for TodayTask
(GET)
http://localhost:5000/api/todaytask
{
    "Email": "sameer.sc62@gmail.com",
    "BodyDate": "2023-07-19"
}
*/