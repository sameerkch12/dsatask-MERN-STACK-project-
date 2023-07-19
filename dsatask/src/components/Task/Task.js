import React from 'react'
import './Task.css'

export default function Task(props) {

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className='task-item'>
      <div className='upper-task-data'>
        <label>{props.task}</label>
        {/* // this same button should perform delete request*/}
        <button 
          className='button-style' 
          onClick={() => openInNewTab(props.link)}
        >
          Go To Task
        </button>
      </div>
      <div className='lower-task-data'>
        <p className='truncate-text'>{props.link}</p>
      </div>
    </div>
  )
}
