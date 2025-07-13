import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BorrowRequests.css';

function BorrowRequests() {
  const [activeTab, setActiveTab] = useState('incoming');

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

      <div className="container">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === 'incoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('incoming')}
          >
            Incoming Requests
          </button>
          <button
            className={`tab-btn ${activeTab === 'outgoing' ? 'active' : ''}`}
            onClick={() => setActiveTab('outgoing')}
          >
            Outgoing Requests
          </button>
        </div>

        {activeTab === 'incoming' && (
          <div className="main-content" id="incoming">
            <div className="left-panel">
              <div className="request selected">
                <img src="https://m.media-amazon.com/images/I/51Z0nLAfLmL._SY445_SX342_.jpg" alt="Wanderlust Chronicles" />
                <div className="request-details">
                  <h4>Wanderlust Chronicles</h4>
                  <p>From: Explorer Nomad</p>
                  <span className="tag pending">Pending</span>
                  <span className="time">2 hours ago</span>
                </div>
              </div>

              <div className="request">
                <img src="https://m.media-amazon.com/images/I/61i4k7DWNFL._UF1000,1000_QL80_.jpg" alt="Sapiens" />
                <div className="request-details">
                  <h4>Sapiens</h4>
                  <p>From: Bob Smith</p>
                  <span className="tag pending">Pending</span>
                  <span className="time">1 day ago</span>
                </div>
              </div>

              <div className="request">
                <img src="https://m.media-amazon.com/images/I/81gepf1eMqL._UF1000,1000_QL80_.jpg" alt="To Kill a Mockingbird" />
                <div className="request-details">
                  <h4>To Kill a Mockingbird</h4>
                  <p>From: Diana Prince</p>
                  <span className="tag rejected">Rejected</span>
                  <span className="time">5 days ago</span>
                </div>
              </div>
            </div>

            <div className="right-panel">
              <div className="book-preview">
                <img src="https://m.media-amazon.com/images/I/51Z0nLAfLmL._SY445_SX342_.jpg" alt="Wanderlust Chronicles" />
                <div>
                  <h3>Wanderlust Chronicles</h3>
                  <p><strong>Explorer Nomad</strong></p>
                  <p>
                    A classic tale of a shepherd boy named Santiago who journeys to the Egyptian desert
                    in search of a hidden treasure...
                  </p>
                  <p><span className="genre">Genre:</span> Adventure, Philosophy</p>
                </div>
              </div>

              <div className="message-box">
                <div className="user-info">
                  <div className="avatar">AJ</div>
                  <div>
                    <strong>Alice Johnson</strong><br />
                    <small>Requester</small>
                  </div>
                </div>
                <p><strong>Request Message:</strong></p>
                <p>Hello! I’m very interested in borrowing “The Alchemist”. I’ve heard great things about it.</p>
                <p className="timestamp">Sent on July 26, 2024, 10:30 AM</p>
                <div className="actions">
                  <button className="reject">Reject Request</button>
                  <button className="accept">Accept Request</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'outgoing' && (
          <div className="main-content" id="outgoing">
            <p style={{ padding: '2rem' }}>No outgoing requests yet.</p>
          </div>
        )}
      </div>

      <footer>
        BookExchange © 2025 | Stay updated with BookExchange
      </footer>
    </>
  );
}

export default BorrowRequests;
