import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ExchangeChat.css';

function ExchangeChat() {
  const [messages, setMessages] = useState([
    { sender: 'other', text: "Hi Alex! Thanks for accepting my request...", time: "10:05 AM" },
    { sender: 'self', text: "Hey Alice! I'm free Wednesday evening or Saturday morning.", time: "10:10 AM" },
    { sender: 'other', text: "How about 10 AM at the 'Central Park Cafe'?", time: "10:15 AM" },
    { sender: 'self', text: "Perfect! See you at 10 AM Saturday at Central Park Cafe.", time: "10:20 AM" },
    { sender: 'other', text: "Looking forward to it!", time: "10:25 AM" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { sender: 'self', text: input.trim(), time }]);
    setInput("");
  };

  return (
    <>
      <header>
        <div className="header-left">
          <strong>BookLoop</strong>
          <nav>
              <Link to="/">Index</Link>
            <Link to="/addbook">Add Book</Link>
            <Link to="/searchbooks">Search Books</Link>
            <Link to="/myhistory">My History</Link>
            <Link to="/borrowrequests">Borrow Requests</Link>
            <Link to="/exchangechat">Exchange Chat</Link>
            <Link to="/membership">Membership</Link>
          </nav>
        </div>
        <div className="header-right">
          <Link to="/notifications" className="icon-link" title="Notifications">🔔</Link>
          <Link to="/profile" className="icon-link" title="Profile">👤</Link>
        </div>
      </header>

      <main className="container">
        <aside className="sidebar">
          <h3>How to Coordinate Your Book Exchange</h3>
          <ul>
            <li>📞 Reach out after accepting</li>
            <li>📍 Choose a public location</li>
            <li>🕒 Pick a time/date that works</li>
            <li>✅ Confirm details to avoid issues</li>
            <li>📖 Meet and exchange book</li>
            <li>📦 Mark as exchanged</li>
          </ul>
          <div className="borrower-box">
            <h4>Borrower Info</h4>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT0ZnUKa5MS1tglmhU1JhkW3SxexchRBo6SA&s"
              alt="Alice Johnson"
              className="avatar"
            />
            <p><strong>Alice Johnson</strong></p>
            <p>📧 alice.c@example.com</p>
            <p>📞 +1 (555) 123-4567</p>
          </div>
        </aside>

        <section className="chat-area">
          <h2>Exchange Coordination Chat</h2>

          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className={`msg ${msg.sender}`}>
                {msg.text}
                <span>{msg.time}</span>
              </div>
            ))}
          </div>

          <div className="input-box">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>

          <div className="meeting-box">
            <h4>📅 Exchange Meeting Confirmed</h4>
            <p><strong>Saturday, July 27, 2024</strong></p>
            <p>10:00 AM – 10:30 AM</p>
            <p>📍 Central Park Cafe</p>
          </div>
        </section>
      </main>

      <footer>
        © 2025 BookLoop | Exchange made easy
      </footer>
    </>
  );
}

export default ExchangeChat;

