// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/community">Community</Link></li> {/* Link to Community */}
        <li><Link to="/driver-standings">Driver Standings</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;









