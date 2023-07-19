import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

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

  return (
    <div>
      <Navbar />
      <h1>UpcomingContest</h1>
      {UpcomingContestData.length > 0 ? (
        <ul>
          {UpcomingContestData.map((task, index) => (
            <li key={index}>{task.Problem}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
}
