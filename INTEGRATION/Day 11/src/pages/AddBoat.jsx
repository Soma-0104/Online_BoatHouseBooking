import React, { useState } from 'react';
import '../assets/css/AddBoat.css';
import AdminSidebar from '../components/AdminSidebar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddBoat = () => {
    const [boatName, setBoatName] = useState('');
    const [location, setLocation] = useState('Alleppey');
    const [rooms, setRooms] = useState(1);
    const [type, setType] = useState('Motorboat');
    const [food, setFood] = useState('');
    const [foodType, setFoodType] = useState('');
    const [acRoom, setAcRoom] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/boat/addboat', {
                boatName,
                location,
                rooms,
                type,
                food,
                foodType,
                acRoom,
                price,
                image,
                fromTime,
                toTime
            });
            console.log(response.data);
            alert('Boat added successfully!');
        } catch (error) {
            console.error('Error adding boat:', error);
            setError('Error adding boat. Please try again.');
        }
    };

    return (
        <div className='add'>
            <AdminSidebar />
            <div className="boat-form-card">
                <h2>Add Boat</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Boat Name:</label>
                        <input
                            type="text"
                            value={boatName}
                            onChange={(e) => setBoatName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Location:</label>
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        >
                            <option value="Alleppey">Alleppey</option>
                            <option value="Kochi">Kochi</option>
                            <option value="Kumarakom">Kumarakom</option>
                        </select>
                    </div>
                    <div>
                        <label>Number of Rooms:</label>
                        <input
                            type="number"
                            value={rooms}
                            onChange={(e) => setRooms(parseInt(e.target.value))}
                            required
                        />
                    </div>
                    <div>
                        <label>Boat Type:</label>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            required
                        >
                            <option value="Motorboat">Motorboat</option>
                            <option value="Sailboat">Sailboat</option>
                            <option value="Kayak">Kayak</option>
                            <option value="Canoe">Canoe</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label>Food:</label>
                        <input
                            type="text"
                            value={food}
                            onChange={(e) => setFood(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Food Type:</label>
                        <input
                            type="text"
                            value={foodType}
                            onChange={(e) => setFoodType(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>AC Room:</label>
                        <input
                            type="text"
                            value={acRoom}
                            onChange={(e) => setAcRoom(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Price:</label>
                        <input
                            type="text"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Image:</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>From Time:</label>
                        <input
                            type="text"
                            value={fromTime}
                            onChange={(e) => setFromTime(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>To Time:</label>
                        <input
                            type="text"
                            value={toTime}
                            onChange={(e) => setToTime(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Add BoatHouse</button>
                    <Link to='/ViewEditBoat'><button type="button">View BoatHouse</button></Link>
                </form>
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
};

export default AddBoat;
