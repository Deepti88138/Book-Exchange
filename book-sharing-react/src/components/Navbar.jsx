import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <strong className="navbar-logo">BookLoop</strong>
      </div>
      <ul className="navbar-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/SearchBooks">Search</Link></li>
        <li><Link to="/AddBook">Add Book</Link></li>
        <li><Link to="/BorrowRequests">Requests</Link></li>
        <li><Link to="/Membership">Membership</Link></li>
        <li><Link to="/MyHistory">My History</Link></li>
      </ul>
      <div className="navbar-right">
        <Link to="/Notifications" className="nav-icon">🔔</Link>
        <Link to="/Profile" className="nav-icon">👤</Link>
      </div>
    </header>
  );
}

export default Navbar;
