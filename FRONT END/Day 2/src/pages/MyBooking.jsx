import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/MyBooking.css';
import boat1 from '../assets/images/boat1.jpg'
import boat2 from '../assets/images/boat2.jpg'
import Sidebar from '../components/Sidebar';
const MyBooking = () => {
  // Dummy booking data for demonstration
  const bookings = [
    {
      id: 1,
      imageUrl: boat1,
      title: 'Boat House 1',
      checkInDate: '2024-02-15',
      checkOutDate: '2024-02-20',
      totalPrice: 500,
    },
    {
      id: 2,
      imageUrl: boat2,
      title: 'Boat House 2',
      checkInDate: '2024-03-10',
      checkOutDate: '2024-03-15',
      totalPrice: 600,
    },
  ];

  return (
    <div className="my-booking">
      <Sidebar />
      <div className="booking-container">
        <h1>My Bookings</h1>
       
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <img src={booking.imageUrl} alt={booking.title} />
            <div className="booking-details">
              <h2>{booking.title}</h2>
              <p>Check-in Date: {booking.checkInDate}</p>
              <p>Check-out Date: {booking.checkOutDate}</p>
              <p>Total Price: ${booking.totalPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
