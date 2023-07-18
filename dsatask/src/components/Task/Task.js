import React from 'react'
import './Task.css'

export default function Task(props) {
  return (
    <div className='task-item'>
        <div className='upper-task-data'>
            <label>{props.task}</label>
            <button>Go To Task</button>
        </div>
        <div className='lower-task-data'>
            <p className='truncate-text'>{props.link}</p>
        </div>
    </div>
  )
}
