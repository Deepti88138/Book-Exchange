import React, { useState } from 'react';
import './EditProfile.css';

function EditProfile() {
  const [name, setName] = useState('Alex');
  const [email, setEmail] = useState('email@example.com');
  const [bio, setBio] = useState('Book lover. Sharing is caring.');

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Profile updated successfully!');
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Bio:
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </label>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditProfile;
