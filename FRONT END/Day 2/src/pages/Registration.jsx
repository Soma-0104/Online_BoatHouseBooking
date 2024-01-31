// App.jsx
import React, { useState } from 'react';
import '../assets/css/Registration.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [registered, setRegistered] = useState(false); // State to track registration status

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation
        if (!name || !email || !mobileNumber || !password || !repeatPassword) {
            setError('All fields are required');
            return;
        }
        if (password !== repeatPassword) {
            setError('Passwords do not match');
            return;
        }
        // Proceed with registration
        setError('');
        setRegistered(true); // Set registration status to true
        // Additional logic for registration process
    };

    return (
        <div className='reg-nav'>
            <Navbar/>
        <div className="login-container">
            
        {/* Single card with separator line */}
        <div className="card-container">
          <div className="card-left">
            <div className="card-body">
              <h5 className="card-title"  style={{
                fontFamily:'cursive'
            }}>Welcome !!</h5>
              <p className="card-text"  style={{
                fontFamily:'cursive'
            }}> Create an Account and Book Your Boat House</p>
              {/* <img src={boatImage} className="img-fluid" alt="Boat House" /> */}
            </div>
          </div>
          <div className="separator-line"></div>
          <div className="card-right">
          <h2 style={{textAlign:'center',
            fontFamily:'cursive'}}>Create an Account</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
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
                                <label>Mobile Number</label>
                                <input
                                    type="tel"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
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
                            <div className="form-group">
                                <label>Repeat Password</label>
                                <input
                                    type="password"
                                    value={repeatPassword}
                                    onChange={(e) => setRepeatPassword(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            {error && <div className="error">{error}</div>}
                            {registered && <div className="alert success">Registered successfully!</div>} {/* Display success message */}
                            <div className="button-container">
                                <center>
                                    <button type="submit" className="btn btn-primary">Register</button>
                                    <br></br>
                                    <br></br>
                                    <p><Link className='reg' to='/UserLogin'>Already have an account? Login</Link></p>
                                </center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
