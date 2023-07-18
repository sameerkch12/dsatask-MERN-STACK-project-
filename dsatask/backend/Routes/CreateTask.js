const express = require('express');
const router = express.Router();
const UserTask = require('../Model/UserTask');


router.post('/createtask', async (req, res) => {
  try {
    const { Email, BodyDate, Problem } = req.body;

    let userTask = await UserTask.findOne({ Email });

    if (userTask) 
    {
      // Check if the user's email already exists in the database
      let existingDate = null;
      for (let i = 0; i < userTask.Dates.length; i++) {
        if (userTask.Dates[i].Date === BodyDate) {
          //compare to Bodydate with database date
          existingDate = userTask.Dates[i];
          console.log(existingDate)
          break;
        }
      }

      if (existingDate) {
        // If the date already exists, push the problem into the existing date's tasks array
        existingDate.Tasks.push({ Problem });
      }
      
      else {
        // If the date doesn't exist, create a new date with the task and push it into the dates array
        userTask.Dates.push({
          Date: BodyDate,
          Tasks: [{ Problem }],
        });
      }
    }
    
    else
    {
      // If the user doesn't exist, create a new user task with the date and task
      userTask = new UserTask({
        Email,
        Dates: [
          {
            Date: BodyDate,
            Tasks: [{ Problem }],
          },
        ],
      });
    }

    await userTask.save();

    res.status(201).json({ success: true, message: 'User task created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to create user task' });
  }
});

module.exports = router;

/*

JSON forment for Inserting Task in Database .
api for create task
(PSOT)
This type of send to backend for this api  
http://localhost:5000/api/createtask

{
  "Email": "test3@example.com",
  "BodyDate": "2023-07-20",
  "Problem": "Finish project"
}

*/