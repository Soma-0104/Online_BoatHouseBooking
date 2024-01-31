import React from 'react';
import '../assets/css/Modal.css';

const Modal = ({ isOpen, onClose, userBookingDetails }) => {
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
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Boats Booked</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{userBookingDetails.id}</td>
                    <td>{userBookingDetails.name}</td>
                    <td>{userBookingDetails.email}</td>
                    <td>{userBookingDetails.phoneNumber}</td>
                    <td>{userBookingDetails.boatsBooked.join(', ')}</td>
                    <td>{userBookingDetails.date}</td>
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
