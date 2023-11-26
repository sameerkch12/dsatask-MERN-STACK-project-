import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProblemSection from '../components/TaskDisplayCode/ProblemSection';
import './UpcomingContest.css'; 
import SignUp from './SignUp/SignUp';
import { Link, useNavigate } from "react-router-dom";

export default function UpcomingContest() {
  const [UpcomingContestData, setUpcomingContestData] = useState([]);
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
      .get("https://dsaback.onrender.com/api/upcomingtask", {
        params: {
          Email: Email,
          BodyDate: BodyDate.toISOString().slice(0, 10), // Format the date as 'YYYY-MM-DD'
        }
      })
      .then((res) => {
        console.log("API Response:", res.data);
        setUpcomingContestData(res.data.tasks);
        setLoading(false); // API call is finished
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false); // API call is finished (even if there's an error)
      });
  }

  console.log("UpcomingContestData:", UpcomingContestData);

  if (!Email) {
    navigate('/signup');
    return null; // Render nothing until the redirect happens
  }

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>UpcomingContest</h1>
      <p>Number of Upcoming Contests: {UpcomingContestData.length}</p>
      <div className="grid-container">
        {loading ? (
          <p>Loading...</p>
        ) : UpcomingContestData.length > 0 ? (
          UpcomingContestData.map((task, index) => (
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
  );
}
