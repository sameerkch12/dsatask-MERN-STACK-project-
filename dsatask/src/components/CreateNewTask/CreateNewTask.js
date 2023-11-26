import React, { useState } from 'react'
import axios from 'axios';
import './CreateNewTask.css'

const CreateTask = (props) => {
  const email = props.email
  const [taskLink,setTaskLink] = useState('')
  const [taskDate,setTaskDate] = useState('')

  const taskDateChangeHandler = (e) => {
    setTaskDate(e.target.value)
  }

  const taskLinkChangeHandler = (e) => {
    setTaskLink(e.target.value)
  }

  const createTaskHandler = async(e) => {
    e.preventDefault()
    
    // Create newData
    const newData = {
      Email: email, 
      BodyDate: taskDate, 
      Problem: taskLink,
    }

    await axios
      .post('https://dsaback.onrender.com/api/createtask',newData)
      .then((res) =>{
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
        console.log("'Server Down hai' - SBI")
      })

    console.log(newData)
    setTaskDate('')
    setTaskLink('')
  }

  return (
    
    <div className='task-create-item'>
        <div className='upper-task-create-data'>
          <input value={taskLink} className='input-create-data' type='text' placeholder='link...' onChange={taskLinkChangeHandler}/>
        </div>
        <div className='lower-task-create-data'>  
          <div>
            <input value={taskDate} className='input-date-data' type='date' placeholder='Date' onChange={taskDateChangeHandler}/>
          </div>    
          <button className='input-create-button' onClick={createTaskHandler}>Add Task</button>
        </div>
    </div>
  )
}

export default CreateTask