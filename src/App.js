// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import News from './components/News';
import Chat from './components/Chat';
import Community from './components/Community';
import Schedule from './components/Schedule'; // ✅
import Standings from './components/Standings'; // ✅

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/community" element={<Community />} />
        <Route path="/schedule" element={<Schedule />} /> {/* ✅ */}
        <Route path="/driver-standings" element={<Standings />} /> {/* ✅ */}
      </Routes>
    </Router>
  );
}

export default App;





