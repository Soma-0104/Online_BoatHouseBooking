import React, { useState } from 'react';
import '../assets/css/AdminDashboard.css';
import Sidebar from '../components/Sidebar';
import AdminSidebar from '../components/AdminSidebar';
import MyPieChart from '../components/MyPieChart';
import boat1 from '../assets/images/boat1.jpg';
import boat2 from '../assets/images/boat2.jpg';
const AdminDashboard = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customerName: 'John Doe',
      boatName: 'Speedboat 1',
      startDate: '2023-01-01',
      endDate: '2023-01-05',
      approved: false,
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      boatName: 'Sailboat 2',
      startDate: '2023-01-10',
      endDate: '2023-01-15',
      approved: true,
    },
    {
      id: 3,
      customerName: 'Bob Johnson',
      boatName: 'Motorboat 3',
      startDate: '2023-01-20',
      endDate: '2023-01-25',
      approved: false,
    },
  ]);

  
  return (
    <div className='addashboard'>
        <AdminSidebar/>
    <div className="admin-dashboard">
        <h1>Admin Dashboard</h1>
      <MyPieChart/>
      <h1>Fast Booking Boats</h1>
      <div className="fast-selling-boats">
          
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
    </div>
    </div>
  );
};

export default AdminDashboard;