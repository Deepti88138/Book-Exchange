import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

   
    navigate('/');
  };

  return (
    <div className="signup-body">
      <div className="left"></div>
      <div className="right">
        <div className="form-container">
          <h2>Create an Account</h2>
          <form onSubmit={handleSignUp}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
          </form>
          <div className="toggle">
            <p>
              Already have an account? <Link to="/login">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
