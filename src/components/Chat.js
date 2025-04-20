// src/components/Chat.js
import React, { useState } from 'react';
import './Chat.css';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { user: 'Admin', text: '🏁 Welcome to the F1 Chat!' }
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { user: 'You', text: message }]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">Live F1 Chat</h1>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <div className="message-user">{msg.user}</div>
            <div className="message-text">{msg.text}</div>
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          className="chat-input"
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="chat-button" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;



