import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import '../assets/css/UserDashboard.css';
import boat1 from '../assets/images/boat1.jpg';
import boat2 from '../assets/images/boat2.jpg';
import boat3 from '../assets/images/boat3.jpg';
import boat4 from '../assets/images/boat4.jpg';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Welcome to Your Dashboard</h1>
        <Link to="/MyBooking" className="view-booking-button">
          View My Booking
        </Link>
        <div className="fast-selling-boats">
          <h2>Fast Selling Boats</h2>
          <div className="boat-list">
            {/* Boat 1 */}
            <div className="boat-card">
              <img src={boat1} alt="Boat 1" />
              <h3>Sailboat Paradise</h3>
              <p>Experience the thrill of sailing with our top-rated Sailboat Paradise. Perfect for a relaxing cruise or an adventurous journey.</p>
            </div>
            {/* Boat 2 */}
            <div className="boat-card">
              <img src={boat2} alt="Boat 2" />
              <h3>Speedy Motorboat</h3>
              <p>Zoom across the water with our Speedy Motorboat. Feel the wind in your hair and enjoy the high-speed excitement on the waves.</p>
            </div>
            {/* Add more boats here as needed */}
          </div>
        </div>

        <div className="offers">
          <h2>Special Offers</h2>
          <div className="offer-list">
            {/* Offer 1 */}
            <div className="offer-card">
              <img src={boat3} alt="Offer 1" />
              <h3>Weekend Getaway Package</h3>
              <p>Book Boat 3 for a weekend getaway and enjoy a 20% discount. Perfect for a short escape with friends or family.</p>
            </div>
            {/* Offer 2 */}
            <div className="offer-card">
              <img src={boat4} alt="Offer 2" />
              <h3>Extended Voyage Special</h3>
              <p>Unlock Offer 2 for an extended voyage and get a complimentary dinner onboard. Explore the seas with this exclusive offer.</p>
            </div>
            {/* Add more offers here as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
