// src/components/Schedule.js

import React, { useEffect, useState } from 'react';
import './Schedule.css';  // Styling for the schedule

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetch('https://ergast.com/api/f1/current.json')
      .then((res) => res.json())
      .then((data) => {
        const raceSchedule = data.MRData.RaceTable.Races;
        setSchedule(raceSchedule);
      })
      .catch((err) => console.error('Error fetching schedule:', err));
  }, []);

  return (
    <div className="schedule-container">
      <h2>2025 F1 Race Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Race</th>
            <th>Date</th>
            <th>Location</th>
            <th>Circuit</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((race, index) => (
            <tr key={index}>
              <td>{race.raceName}</td>
              <td>{new Date(race.date).toLocaleDateString()}</td>
              <td>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</td>
              <td>{race.Circuit.circuitName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
