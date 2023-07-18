import React from 'react'

export default function TodayCard() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
  
    return (
      <div className="date-container">
        <h2>Today's Date</h2>
        <p className="date">{formattedDate}</p>
      </div>
    );
}
