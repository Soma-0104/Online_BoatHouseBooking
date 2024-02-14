// App.jsx
import React, { useState } from 'react';
import '../assets/css/User.css';
import boatImage from '../assets/images/boat1.jpg'; // Import the boat image

const User = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validate email and password (Example validation)
      if (!email || !password) {
        setError('Email and Password are required');
        return;
      }
      // Simulate login (Example: check credentials)
      if (email === 'user@example.com' && password === 'password') {
        setLoggedIn(true);
        setError('');
      } else {
        setError('Invalid email or password');
      }
    };
  
    return (
      <div className="login-container">
        {/* Single card with separator line */}
        <div className="card-container">
          <div className="card-left">
            <div className="card-body">
              <h5 className="card-title"  style={{
                fontFamily:'cursive'
            }}>Welcome Back!!</h5>
              <p className="card-text"  style={{
                fontFamily:'cursive'
            }}>Book Your Boat House</p>
              {/* <img src={boatImage} className="img-fluid" alt="Boat House" /> */}
            </div>
          </div>
          <div className="separator-line"></div>
          <div className="card-right">
            <div className="login-card">
              <h2 style={{textAlign:'center',
            fontFamily:'cursive'}}>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                {error && <div className="error">{error}</div>}
                {loggedIn && <div className="alert success">Logged in successfully!</div>}
                <div className="button-container">
                    <center>
                  <button type="submit" className="btn btn-primary">Login</button>
                  </center>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default User;
