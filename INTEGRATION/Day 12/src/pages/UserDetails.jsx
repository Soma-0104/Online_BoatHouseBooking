// UserDetails.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../components/AdminSidebar';
import Modal from './Modal';
import '../assets/css/UserDetails.css';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend when component mounts
    axios.get('http://localhost:8081/api/v1/auth/all')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleBookingDetailsClick = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8081/book/getbyid/${userId}`);
      setBookingDetails(response.data);
    } catch (error) {
      console.error('Error fetching booking details:', error);
    }
  };

  const handleCloseModal = () => {
    setBookingDetails(null);
  };

  return (
    <div className='user'>
      <AdminSidebar />
      <div className='user-details'>
        <h2 style={{textAlign:'center'}}>User Details</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Booking Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
                <td>
                  <button onClick={() => handleBookingDetailsClick(user.id)}>Booking Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal isOpen={!!bookingDetails} onClose={handleCloseModal} booking={bookingDetails} /> {/* Pass booking details to Modal */}
      </div>
    </div>
  );
};

export default UserDetails;
