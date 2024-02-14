// Modal.jsx

import React from 'react';
import '../assets/css/Modal.css';

const Modal = ({ isOpen, onClose, booking }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={onClose}>
              &times;
            </span>
            <div className="modal-header">
              <h2>Booking Details</h2>
            </div>
            <div className="modal-body">
              <table>
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>User ID</th>
                    <th>Boat Name</th>
                    <th>Boat ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Proof</th>
                    <th>Check-in Date</th>
                    <th>Check-out Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{booking.bookingId}</td>
                    <td>{booking.userId}</td>
                    <td>{booking.boatName}</td>
                    <td>{booking.boatId}</td>
                    <td>{booking.name}</td>
                    <td>{booking.email}</td>
                    <td>{booking.mobileNumber}</td>
                    <td>{booking.proof}</td>
                    <td>{booking.checkIn}</td>
                    <td>{booking.checkOut}</td>
                  </tr>
                </tbody>
              </table>
              <button onClick={onClose}>Close</button> {/* Close button in the modal */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
