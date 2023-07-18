const mongoose = require('mongoose');
const { Schema } = mongoose;

const TaskSchema = new Schema({
  Problem: String,
});

const DateSchema = new Schema({
  Date: { type: Date, default: Date.now },
  Tasks: [TaskSchema],
});

const UserTaskSchema = new Schema({
  Email: String,
  Dates: [DateSchema],
});

const UserTask = mongoose.model('UserTask', UserTaskSchema);

module.exports = UserTask;


/*
for this data base

[
  {
    "Email": "sameer@gmail.com",
    "Dates": [
      {
        "Date": "2023-12-20",
        "Tasks": [
          {
            "Problem": "problem 1"
          },
          {
            "Problem": "problem 2"
          },
          {
            "Problem": "problem 3"
          }
        ]
      },
      {
        "Date": "2023-12-22",
        "Tasks": [
          {
            "Problem": "problem 3"
          },
          {
            "Problem": "problem 4"
          },
          {
            "Problem": "problem 5"
          }
        ]
      }
    ]
  },


  {
    "Email": "bobo@gmail.com",
    "Dates": [
      {
        "Date": "2023-12-28",
        "Tasks": [
          {
            "Problem": "problem 1"
          },
          {
            "Problem": "problem 2"
          },
          {
            "Problem": "problem 3"
          }
        ]
      }
    ]
  }
]


*/