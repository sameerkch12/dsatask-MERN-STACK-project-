import React, { useState } from 'react'
import axios from 'axios'

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

    // const res = await axios.post('http://localhost:5000/api/createtask',newData)

    // console.log(res.json())

    console.log(newData)
    setTaskDate('')
    setTaskLink('')
  }

  return (
    
    <div className='task-item'>
        <div className='upper-task-data'>
          <input value={taskLink} className='input-data' type='text' placeholder='link...' onChange={taskLinkChangeHandler}/>
        </div>
        <div className='lower-task-data'>  
          <div>
            <input value={taskDate} type='date' placeholder='Date' onChange={taskDateChangeHandler}/>
          </div>    
          <button onClick={createTaskHandler}>Add Task</button>
        </div>
    </div>
  )
}

export default CreateTask