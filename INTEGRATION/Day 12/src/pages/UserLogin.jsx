import React, { useState } from 'react';
import '../assets/css/UserLogin.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios'; // Import Axios library

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', { email, password });
            if (response.data.token) {
                setError('');
                console.log(response.data.id); // Check if the user ID is available in the response
                localStorage.setItem('token', response.data.token); // Store the token in localStorage
                localStorage.setItem('userId', response.data.id); // Store the user ID in localStorage
                navigate('/UserDashboard');
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('Error logging in. Please try again.');
        }
    };

    return (
        <div className='log-nav'>
            <Navbar />
            <div className="login2-container">
                <div className="card2-container">
                    <div className="card2-left">
                        <div className="card2-body">
                            <h5 className="card2-title" style={{ fontFamily: 'cursive' }}>Welcome Back!!</h5>
                            <p className="card2-text" style={{ fontFamily: 'cursive' }}>Book Your Boat House</p>
                        </div>
                    </div>
                    <div className="separator-line"></div>
                    <div className="card2-right">
                        <div className="login-card2">
                            <h2 style={{ textAlign: 'center', fontFamily: 'cursive' }}>User Login</h2>
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
                                <div className="button-container">
                                    <center>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                        <br></br>
                                        <br></br>
                                        <p><Link className='reg' to='/Registration'>New User? Create an account</Link></p>
                                    </center>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
