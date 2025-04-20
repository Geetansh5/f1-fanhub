// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const quotes = [
  { text: "When you no longer go for a gap that exists, you're no longer a racing driver.", author: "Ayrton Senna" },
  { text: "I don’t know driving in another way which isn’t risky. Each one has to improve himself.", author: "Ayrton Senna" },
  { text: "Winning is the most important. Everything is consequence of that.", author: "Sebastian Vettel" },
  { text: "Second is first of the losers.", author: "Sebastian Vettel" },
  { text: "In racing, there are always things you can learn every single day.", author: "Lewis Hamilton" },
  { text: "If you no longer go for a gap, you’re no longer a racing driver.", author: "Max Verstappen" },
  { text: "You have to believe in yourself when no one else does.", author: "Lewis Hamilton" }
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src="/new-f1-logo.jpg" alt="F1 Logo" className="f1-logo" />
        <h1>Welcome to F1 FanHub</h1>
        <p>Your ultimate Formula 1 community hub!</p>
      </header>

      <div className="card-container">
        <Link to="/news" className="card">
          <h2>Latest News</h2>
          <p>Catch up on the latest F1 headlines.</p>
        </Link>
        <Link to="/chat" className="card">
          <h2>Live Chat</h2>
          <p>Join the conversation with fans worldwide.</p>
        </Link>
        <Link to="/community" className="card">
          <h2>Community</h2>
          <p>Share insights, memes & predictions.</p>
        </Link>
      </div>

      <div className="quote-box">
        <p className="quote">“{randomQuote.text}”</p>
        <p className="author">– {randomQuote.author}</p>
      </div>

      <footer>
        &copy; 2025 F1 FanHub | Built by Geetansh
      </footer>
    </div>
  );
}

export default Home;





