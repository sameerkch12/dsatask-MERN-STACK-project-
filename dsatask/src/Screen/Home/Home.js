
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Task from '../../components/Task/Task'
import './Home.css'
import TodayCard from '../../components/TodayCard/TodayCard'
import CreateTask from '../../components/CreateNewTask/CreateNewTask'
import Divider from '../../components/Divider/Divider'
import ProblemSection from '../../components/TaskDisplayCode/ProblemSection';
export default function Home() {

  const [todaytaskContestData, settodaytaskContestData] = useState([]);
  const [BodyDate, setDate] = useState(new Date());
  const [Email, setEmail] = useState(""); // No default value here
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Load the email from localStorage if it exists
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);


  useEffect(() => {
    // Save the Email value to localStorage whenever it changes
    localStorage.setItem("email", Email);
  }, [Email]);


  useEffect(() => {
    console.log("Email:", Email);
    console.log("BodyDate:", BodyDate);

    // Call the API only when both Email and BodyDate are available
    if (Email && BodyDate) {
      getData();
    }
  }, [Email, BodyDate]);


  function getData() {
    setLoading(true);
    axios
      .get("http://localhost:5000/api/todaytask", {
        params: {
          Email: Email,
          BodyDate: BodyDate.toISOString().slice(0, 10), // Format the date as 'YYYY-MM-DD'
        }
      })
      .then((res) => {
        console.log("API Response:", res.data);
        settodaytaskContestData(res.data.tasks);
        setLoading(false); // API call is finished
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false); // API call is finished (even if there's an error)
      });
  }

  if (!Email) {
    navigate('/signup');
    return null; // Render nothing until the redirect happens
  }


  console.log("todaytask:", todaytaskContestData);

  return (
    <div>
      <Navbar />


      <div className='container'>
        <div className='time-add'>
          <TodayCard name={Email} />
          {Email === null ?
            (<Link to='/login'>Login Here</Link>) :
            (<CreateTask email={Email} />)
          }
        </div>
        <Divider />

      </div>
      <p>Number of Today Contests: {todaytaskContestData.length}</p>
      <div className="grid-container">
        {loading ? (
          <p>Loading...</p>
        ) : todaytaskContestData.length > 0 ? (
          todaytaskContestData.map((task, index) => (
            <ProblemSection
              key={index}
              link={task.Problem}
            />
          ))
        ) : (
          <p>No upcoming contests found.</p>
        )}
      </div>



      <Footer />
    </div>
  )
}
