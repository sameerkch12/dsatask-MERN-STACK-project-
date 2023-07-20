import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ProblemSection from '../components/TaskDisplayCode/ProblemSection'
import './UpcomingContest.css'; 

export default function UpcomingContest() {
  const [UpcomingContestData, setUpcomingContestData] = useState([]);
  const [BodyDate, setDate] = useState("2023-07-19");
  const [Email, setEmail] = useState("sameer.sc62@gmail.com");

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
  }, []);
//  <li key={index}>{task.Problem}</li>
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
