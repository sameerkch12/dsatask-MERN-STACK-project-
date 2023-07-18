import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Task from '../../components/Task/Task'
import './Home.css'
import TodayCard from '../../components/TodayCard/TodayCard'
import CreateTask from '../../components/CreateNewTask/CreateNewTask'
import Divider from '../../components/Divider/Divider'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <div className='time-add'>
          <TodayCard />
          <CreateTask email="ankitsharma@gmail.com"/>
        </div>
        <Divider />
        <div className='item-container'>
          {/* <Task task="Longest Substring Without Repeating Characters" link="https://leetcode.com/problems/longest-substring-without-repeating-characters/"/> */}
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
          <Task task="Task Name" link="problem_link"/>
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
