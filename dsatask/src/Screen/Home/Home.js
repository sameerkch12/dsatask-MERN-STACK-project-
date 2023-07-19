import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Task from '../../components/Task/Task'
import './Home.css'
import TodayCard from '../../components/TodayCard/TodayCard'
import CreateTask from '../../components/CreateNewTask/CreateNewTask'
import Divider from '../../components/Divider/Divider'
import { Link } from 'react-router-dom'

export default function Home() {
  const Email = localStorage.getItem("email")

  return (
    <div>
      <Navbar/>
      <div className='container'>
        <div className='time-add'>
          <TodayCard name={Email}/>
          {Email === null ? 
            (<Link to='/login'>Login Here</Link>):
            (<CreateTask email={Email}/>)
          }
        </div>
        <Divider />
        <div className='item-container'>
          <Task task="Task Name" link="https://leetcode.com/problems/non-overlapping-intervals/"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
        </div>
      </div>
      <Footer />
    </div>
  )
}
