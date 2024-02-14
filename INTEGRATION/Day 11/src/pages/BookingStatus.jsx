import React from 'react';
import '../assets/css/BookingStatus.css';

const BookingStatus = () => {
    // Example data (replace with actual data from your system)
    const bookings = [
        { id: 1, status: 'Confirmed', user: 'John Doe', boat: 'Motorboat 1' },
        { id: 2, status: 'Pending', user: 'Alice Smith', boat: 'Sailboat 3' },
        { id: 3, status: 'Cancelled', user: 'Bob Johnson', boat: 'Kayak 2' },
        // Add more booking data as needed
    ];

    return (
        <div className="booking-status-table">
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>Status</th>
                        <th>User</th>
                        <th>Boat</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.status}</td>
                            <td>{booking.user}</td>
                            <td>{booking.boat}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingStatus;
