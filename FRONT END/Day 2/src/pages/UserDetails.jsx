import React, { useState } from 'react';
import '../assets/css/UserDetails.css';
import AdminSidebar from '../components/AdminSidebar';
import Modal from './Modal';

const UserDetails = () => {
  const userBookingDetails = [
    {
      id: 1,
      name: 'Soma',
      email: 'soma@gmail.com',
      phoneNumber: '7539932004',
      boatsBooked: ['Sunset Boat House', 'Riverside Retreat'],
      date: '2024-02-05',
    },
    {
      id: 2,
      name: 'Usha',
      email: 'ushasaia@gmail.com',
      phoneNumber: '7397154128',
      boatsBooked: ['Blue Waters'],
      date: '2024-02-06',
    },
    {
      id: 3,
      name: 'Rasika',
      email: 'rasika@gmail.com',
      phoneNumber: '93453984938',
      boatsBooked: ['Tranquil Lake Cabin'],
      date: '2024-02-02',
    },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleBookingDetailsClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className='user'>
      <AdminSidebar />
      <div className='user-details'>
        <h2>User Details</h2>
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
            {userBookingDetails.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <button onClick={() => handleBookingDetailsClick(user)}>Booking Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal isOpen={!!selectedUser} onClose={handleCloseModal} userBookingDetails={selectedUser} /> {/* Pass selected user's details to Modal */}
      </div>
    </div>
  );
};

export default UserDetails;
