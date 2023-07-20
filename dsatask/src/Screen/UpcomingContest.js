import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProblemSection from '../components/TaskDisplayCode/ProblemSection';
import './UpcomingContest.css'; 
import SignUp from './SignUp/SignUp';
import { Link, useNavigate } from "react-router-dom";

export default function UpcomingContest() {
  const [UpcomingContestData, setUpcomingContestData] = useState([]);
  const [BodyDate, setDate] = useState("2023-07-19");
  const [Email, setEmail] = useState(""); // No default value here
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

  function getData() {
    axios
      .get("http://localhost:5000/api/upcomingtask", {
        params: {
          Email: Email,
          BodyDate: BodyDate,
        }
      })
      .then((res) => {
        console.log("API Response:", res.data);
        setUpcomingContestData(res.data.tasks);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }

  useEffect(() => {
    console.log("Email:", Email);
    console.log("BodyDate:", BodyDate);
    getData();
  }, [Email, BodyDate]);

  
  if (!Email) {
    navigate('/signup');
    return null; // Render nothing until the redirect happens
  }

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>UpcomingContest</h1>
      <div className="grid-container">
        {UpcomingContestData.length > 0 ? (
          UpcomingContestData.map((task, index) => (
            <ProblemSection
              key={index}
              link={task.Problem}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
