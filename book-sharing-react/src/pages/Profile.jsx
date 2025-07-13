import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <img
          src="https://i.pravatar.cc/100?img=12"
          alt="Profile"
          className="profile-pic"
        />
        <h2>Alex</h2>
        <div className="badge">🌟 Premium Member</div>

        <div className="profile-info">
          <p><i className="fas fa-envelope"></i> Email@example.com</p>
          <p><i className="fas fa-calendar-alt"></i> Member Since: January 2024</p>
          <p><i className="fas fa-book"></i> Total Books Shared: 15</p>
          <p><i className="fas fa-star"></i> Status: <strong>Premium</strong></p>
        </div>

        <Link to="/EditProfile" className="edit-btn">Edit Profile</Link>
      </div>
    </div>
  );
}

export default Profile;


