import '../assets/css/UserProfile.css';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    mobile: '123-456-7890',
  });
  const [isEditing, setIsEditing] = useState(false);

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

  const handleSave = () => {
    setIsEditing(false);
    
  };

  return (
    <div className='user'>
      <Sidebar />
      <div className='user-profile-container'>
        <div className="user-card">
          <div className="profile-pic">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" />
          </div>
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
                  name="mobile"
                  value={user.mobile}
                  onChange={handleChange}
                  className="input-field"
                />
              ) : (
                <span>{user.mobile}</span>
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
