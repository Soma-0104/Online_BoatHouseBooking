import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios'; // Import Axios library
import '../assets/css/UserProfile.css'
import profile from '../assets/images/profie.jpg'
const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobileNumber: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Function to fetch user details by ID
    const fetchUserDetails = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Get the user ID from localStorage
        const response = await axios.get(`http://localhost:8081/api/v1/auth/${userId}`);
        setUser(response.data); // Set the user details in state
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails(); // Call the function to fetch user details
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const userId = localStorage.getItem('userId'); // Get the user ID from localStorage
      await axios.put(`http://localhost:8081/api/v1/auth/${userId}`, user); // Update user details
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <div className='user'>
      <Sidebar />
      <div className='user-profile-container'>
        <div className="user-card">
        <div className="profile-pic">
            <img src={profile} alt="Common" /> {/* Use the common image */}
          </div>
          {/* Profile pic */}
          <div className="user-details">
            <div className="detail">
              <span>Name:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span>{user.name}</span>
              )}
            </div>
            <div className="detail">
              <span>Mobile Number:</span>
              {isEditing ? (
                <input
                  type="text"
                  name="mobileNumber"
                  value={user.mobileNumber}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span>{user.mobileNumber}</span>
              )}
            </div>
            <div className="detail">
              <span>Email:</span>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span>{user.email}</span>
              )}
            </div>
            {isEditing ? (
              <button onClick={handleSave} className="save-button">
                Save
              </button>
            ) : (
              <button onClick={handleEdit} className="edit-button">
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
