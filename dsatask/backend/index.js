const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./Database")

mongoDB();

//ye banana he padt hai jab frontend port 3000 se backend port 5000 pe data accept krna hota haii to
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())
app.use('/api', require("./Routes/RegistrationUser"));
app.use('/api', require("./Routes/LoginUser"));
app.use('/api', require('./Routes/CreateTask'));
app.use('/api', require('./Routes/UpcomingTask'));
app.use('/api', require('./Routes/TodayTask'));



//nomal express start
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})