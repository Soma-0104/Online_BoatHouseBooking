import React, { useState } from 'react';
import '../assets/css/Booking.css';
import Sidebar from '../components/Sidebar';

const Booking = () => {
  const [formData, setFormData] = useState({
    numberOfPersons: '',
    persons: [],
    email: '',
    phoneNumber: '',
    acNonAc: '',
    paymentMethod: '',
    numberOfDays: '',
    startDate: '',
    endDate: '',
  });

  const [errors, setErrors] = useState({});
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
      // Add logic to submit form data
    } else {
      console.log('Form contains errors:', validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.numberOfPersons) {
      errors.numberOfPersons = 'Number of persons is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }

    if (!data.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(data.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be 10 digits';
    }

    if (!data.acNonAc.trim()) {
      errors.acNonAc = 'AC/Non-AC preference is required';
    }

    if (!data.paymentMethod.trim()) {
      errors.paymentMethod = 'Payment method is required';
    }

    if (!data.numberOfDays) {
      errors.numberOfDays = 'Number of days is required';
    }

    if (!data.startDate.trim()) {
      errors.startDate = 'Start date is required';
    }

    if (!data.endDate.trim()) {
      errors.endDate = 'End date is required';
    }

    return errors;
  };

  const handleNumberOfPersonsChange = (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      numberOfPersons: value,
      persons: Array.from({ length: parseInt(value) }, (_, index) => prevState.persons[index] || { name: '', age: '', gender: '' }),
    }));
    setShowAdditionalFields(value > 0);
  };

  const handleDaysChange = (e) => {
    const { value } = e.target;
    const today = new Date();
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + parseInt(value));
    setFormData((prevState) => ({
      ...prevState,
      numberOfDays: value,
      startDate: today.toISOString().slice(0, 10),
      endDate: endDate.toISOString().slice(0, 10),
    }));
  };

  const handlePersonDetailsChange = (index, field, value) => {
    const updatedPersons = [...formData.persons];
    updatedPersons[index][field] = value;
    setFormData((prevState) => ({
      ...prevState,
      persons: updatedPersons,
    }));
  };

  const renderPersonFields = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Person</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {formData.persons.map((person, index) => (
            <tr key={index}>
              <td>Person {index + 1}</td>
              <td>
                <input
                  type="text"
                  value={person.name}
                  onChange={(e) => handlePersonDetailsChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={person.age}
                  onChange={(e) => handlePersonDetailsChange(index, 'age', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={person.gender}
                  onChange={(e) => handlePersonDetailsChange(index, 'gender', e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  return (
    <div className='bb'>
        <Sidebar/>
    <div className="bookin-container">
      <h2>Booking Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="booking-form-group">
          <label>Number of Persons:</label>
          <input
            type="number"
            name="numberOfPersons"
            value={formData.numberOfPersons}
            onChange={handleNumberOfPersonsChange}
          />
          {errors.numberOfPersons && <div className="booking-error-message">{errors.numberOfPersons}</div>}
        </div>
        {showAdditionalFields && renderPersonFields()}
        <div className="booking-form-group">
          <label>Email:</label>
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="booking-error-message">{errors.email}</div>}
        </div>
        <div className="booking-form-group">
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          {errors.phoneNumber && <div className="booking-error-message">{errors.phoneNumber}</div>}
        </div>
        <div className="booking-form-group">
          <label>AC/Non-AC:</label>
          <div>
            <label>
              <input
                type="radio"
                name="acNonAc"
                value="AC"
                checked={formData.acNonAc === 'AC'}
                onChange={handleChange}
              />
              AC
            </label>
            <label>
              <input
                type="radio"
                name="acNonAc"
                value="Non-AC"
                checked={formData.acNonAc === 'Non-AC'}
                onChange={handleChange}
              />
              Non-AC
            </label>
          </div>
          {errors.acNonAc && <div className="booking-error-message">{errors.acNonAc}</div>}
        </div>
        <div className="booking-form-group">
          <label>Payment Method:</label>
          <input type="text" name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} />
          {errors.paymentMethod && <div className="booking-error-message">{errors.paymentMethod}</div>}
        </div>
        <div className="booking-form-group">
          <label>Number of Days:</label>
          <input
            type="number"
            name="numberOfDays"
            value={formData.numberOfDays}
            onChange={handleDaysChange}
          />
          {errors.numberOfDays && <div className="booking-error-message">{errors.numberOfDays}</div>}
        </div>
        <div className="booking-form-group">
          <label>Start Date:</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} />
          {errors.startDate && <div className="booking-error-message">{errors.startDate}</div>}
        </div>
        <div className="booking-form-group">
          <label>End Date:</label>
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} />
          {errors.endDate && <div className="booking-error-message">{errors.endDate}</div>}
        </div>
        <div className="booking-form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Booking;

