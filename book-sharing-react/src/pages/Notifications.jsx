import React from 'react';
import './Notifications.css';

function Notifications() {
  return (
    <div className="notifications-page">
      <h1>Your Notifications</h1>

      <div className="notification">
        🔔 Your request to borrow <em>The Crash</em> was approved!
      </div>
      <div className="notification">
        🔔 New book <em>Digital Fortress</em> added to your favorite genre.
      </div>
      <div className="notification">
        🔔 You have a new message in the Chat Section.
      </div>
    </div>
  );
}

export default Notifications;

