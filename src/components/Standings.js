// src/components/DriverStanding.js

import React, { useEffect, useState } from 'react';
import './DriverStandings.css';

// Map constructor IDs to logo images (you'll need to add these in /public/logos/)
const teamLogos = {
  mercedes: '/Users/geetansh/f1-fanhub/public/logos/mercedes.png',
  red_bull: '/Users/geetansh/f1-fanhub/public/logos/redbull.png',
  ferrari: '/Users/geetansh/f1-fanhub/public/logos/ferrari.png',
  mclaren: '/Users/geetansh/f1-fanhub/public/logos/mclaren.png',
  aston_martin: '/Users/geetansh/f1-fanhub/public/logos/astonmartin.png',
  alpine: '/Users/geetansh/f1-fanhub/public/logos/Alpine_logo.png',
  haas: '/Users/geetansh/f1-fanhub/public/logos/Logo_Haas_F1.png',
  williams: '/Users/geetansh/f1-fanhub/public/logos/Logo_Williams_F1.png',
  alfa: '/Users/geetansh/f1-fanhub/public/logos/Logo_of_Stake_F1_Team_Kick_Sauber.png',
  rb: '/Users/geetansh/f1-fanhub/public/logos/VCARB_logo.png' // if Visa CashApp RB is used
};

const DriverStandings = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    fetch('https://ergast.com/api/f1/current/driverStandings.json')
      .then((res) => res.json())
      .then((data) => {
        const driverStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setStandings(driverStandings);
      })
      .catch((err) => console.error('Error fetching driver standings:', err));
  }, []);

  return (
    <div className="standings-container">
      <h2>2025 Real-Time Driver Standings</h2>
      <table className="standings-table">
        <thead>
          <tr>
            <th>Pos</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((driver, index) => {
            const constructor = driver.Constructors[0];
            const logoPath = teamLogos[constructor.constructorId] || '/logos/default.png';
            return (
              <tr key={index}>
                <td>{driver.position}</td>
                <td>{driver.Driver.givenName} {driver.Driver.familyName}</td>
                <td>
                  <img src={logoPath} alt={constructor.name} className="team-logo" />
                  {constructor.name}
                </td>
                <td>{driver.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DriverStandings;


