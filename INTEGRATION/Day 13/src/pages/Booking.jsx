import React, { useState } from 'react';
import '../assets/css/Booking.css';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const boatId = localStorage.getItem('boatId');
  const boatName = localStorage.getItem('boatName');
  const image = localStorage.getItem('image');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    proof: '',
    food: '',
    acRoom: '',
    checkIn: '',
    checkOut: '',
    boatId: boatId || 0,
    boatName: boatName || '',
    image: image || ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      mobileNumber: '',
      proof: '',
      food: '',
      acRoom: '',
      checkIn: '',
      checkOut: '',
      boatId: boatId || 0,
      boatName: boatName || '',
      image: image || ''

    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
  
    if (Object.keys(validationErrors).length === 0) {
      try {
        const userId = localStorage.getItem('userId');
        const { boatId, boatName,image } = formData;
        const response = await axios.post('http://localhost:8081/book/add', { ...formData, userId });
        console.log('Booking response:', response.data);
        alert('Booking Successful!');
        setFormData({
          name: '',
          email: '',
          mobileNumber: '',
          proof: '',
          food: '',
          acRoom: '',
          checkIn: '',
          checkOut: '',
          boatId: boatId || 0,
          boatName: boatName || '',
          image: image || ''
        });
        navigate('/UserDashboard');
      } catch (error) {
        console.error('Error booking:', error);
        alert('Error booking. Please try again.');
      }
    }
  };
  
  const validateForm = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.mobileNumber.trim()) {
      errors.mobileNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(data.mobileNumber)) {
      errors.mobileNumber = 'Phone number must be 10 digits';
    }

    if (!data.proof.trim()) {
      errors.proof = 'Proof is required';
    }

    if (!data.food.trim()) {
      errors.food = 'Food preference is required';
    }

    if (!data.acRoom.trim()) {
      errors.acRoom = 'AC/Non-AC preference is required';
    }

    if (!data.checkIn.trim()) {
      errors.checkIn = 'Check-in date is required';
    }

    if (!data.checkOut.trim()) {
      errors.checkOut = 'Check-out date is required';
    }

    return errors;
  };

  return (
    <div className='bb'>
      <Sidebar />
      <div className="booking1-container">
        <h2>Booking Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="booking-form-group">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <div className='booking-error-message'>{errors.name}</div>}
          </div>
          <div className="booking-form-group">
            <label>Email:</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <div className="booking-error-message">{errors.email}</div>}
          </div>
          <div className="booking-form-group">
            <label>Mobile Number:</label>
            <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
            {errors.mobileNumber && <div className="booking-error-message">{errors.mobileNumber}</div>}
          </div>
          <div className="booking-form-group">
            <label>Proof:</label>
            <input type="text" name="proof" value={formData.proof} onChange={handleChange} />
            {errors.proof && <div className="booking-error-message">{errors.proof}</div>}
          </div>
          <div className="booking-form-group">
            <label>Food Preference:</label>
            <input type="text" name="food" value={formData.food} onChange={handleChange} />
            {errors.food && <div className="booking-error-message">{errors.food}</div>}
          </div>
          <div className="booking-form-group">
            <label>AC/Non-AC:</label>
            <input type="text" name="acRoom" value={formData.acRoom} onChange={handleChange} />
            {errors.acRoom && <div className="booking-error-message">{errors.acRoom}</div>}
          </div>
          <div className="booking-form-group">
            <label>Check-in Date:</label>
            <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} />
            {errors.checkIn && <div className="booking-error-message">{errors.checkIn}</div>}
          </div>
          <div className="booking-form-group">
            <label>Check-out Date:</label>
            <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} />
            {errors.checkOut && <div className="booking-error-message">{errors.checkOut}</div>}
          </div>
          <input type="hidden" name="boatId" value={formData.boatId} />
          <input type="hidden" name="boatName" value={formData.boatName} />
          <div className="booking-form-group">
            <button type="submit">Book</button>
          </div>
          <div className="booking-form-group">
            <button type="button" style={{ backgroundColor: "red" }} onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
