import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/MyBooking.css';
import Sidebar from '../components/Sidebar';

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking data from the backend when component mounts
    axios.get('http://localhost:8081/book/getbyid/' + localStorage.getItem('userId'))
      .then(response => {
        console.log(response.data); // Log response data to console
        if (Array.isArray(response.data)) { // Check if response data is an array
          setBookings(response.data);
        } else if (typeof response.data === 'object') { // Check if response data is an object
          setBookings([response.data]); // Convert the object to an array with a single entry
        } else {
          console.error('Error: Response data is not an array or object');
        }
      })
      .catch(error => {
        console.error('Error fetching booking data:', error);
      });
  }, []);
  
  console.log(bookings); // Add this line for debugging

  return (
    <div className="my-booking">
      <Sidebar />
      <div className="booking-container">
        <h1>My Bookings</h1>
       
        {bookings.length === 0 && (
          <p>No bookings found.</p>
        )}

        {bookings.map((booking) => (
          <div key={booking.bookingId} className="booking-card">
            {booking.image ? (
              <img src={booking.image} alt={booking.boatName} />
            ) : (
              <p>No image available</p>
            )}
            <div className="booking-details">
              <h2>{booking.boatName}</h2>
              <p>Check-in Date: {booking.checkIn}</p>
              <p>Check-out Date: {booking.checkOut}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
