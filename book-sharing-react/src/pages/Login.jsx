import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="left"></div>
      <div className="right">
        <div className="form-container">
          <h2>Welcome to BookLoop!</h2>
          <p className="subtext">Join our community of readers!</p>

          <div className="switch-buttons">
            <Link to="/login" className="switch-btn active">Sign In</Link>
            <Link to="/signup" className="switch-btn">Sign Up</Link>
          </div>

          <form onSubmit={handleLogin}>
            <input type="email" placeholder="email@example.com" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign in</button>
          </form>

          <div className="toggle">
            <Link to="/forgot">Forgot password?</Link>
          </div>

          <div className="skip-btn">
            <Link to="/">Skip for now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

