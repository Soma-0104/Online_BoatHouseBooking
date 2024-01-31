// AddBoat.jsx
import React, { useState } from 'react';
import '../assets/css/AddBoat.css';
import AdminSidebar from '../components/AdminSidebar';

const AddBoat = () => {
    const [boats, setBoats] = useState([]);
    const [boatName, setBoatName] = useState('');
    const [location, setLocation] = useState('');
    const [numberOfPersons, setNumberOfPersons] = useState(1);
    const [availability, setAvailability] = useState('');
    const [acPreference, setAcPreference] = useState('');
    const [foodPreference, setFoodPreference] = useState('');
    const [foodType, setFoodType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, for example, update state with new boat
        const newBoat = {
            id: Date.now(), // Unique identifier for each boat
            boatName,
            location,
            numberOfPersons,
            availability,
            acPreference,
            foodPreference,
            foodType
        };
        setBoats([...boats, newBoat]);
        // Reset form fields after submission
        setBoatName('');
        setLocation('');
        setNumberOfPersons(1);
        setAvailability('');
        setAcPreference('');
        setFoodPreference('');
        setFoodType('');

        alert('Boat added successfully!');
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
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Number of Persons:</label>
                        <input
                            type="number"
                            value={numberOfPersons}
                            onChange={(e) => setNumberOfPersons(parseInt(e.target.value))}
                            required
                        />
                    </div>
                    <div>
                        <label>Availability:</label>
                        <input
                            type="text"
                            value={availability}
                            onChange={(e) => setAvailability(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>AC Preference:</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="ac"
                                    checked={acPreference === 'ac'}
                                    onChange={(e) => setAcPreference(e.target.value)}
                                />
                                AC
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="non-ac"
                                    checked={acPreference === 'non-ac'}
                                    onChange={(e) => setAcPreference(e.target.value)}
                                />
                                Non-AC
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Food Preference:</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="yes"
                                    checked={foodPreference === 'yes'}
                                    onChange={(e) => {
                                        setFoodPreference(e.target.value);
                                        setFoodType('');
                                    }}
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="no"
                                    checked={foodPreference === 'no'}
                                    onChange={(e) => {
                                        setFoodPreference(e.target.value);
                                        setFoodType('');
                                    }}
                                />
                                No
                            </label>
                        </div>
                    </div>
                    {foodPreference === 'yes' && (
                        <div>
                            <label>Food Type:</label>
                            <div>
                                <label>
                                    <input
                                        type="radio"
                                        value="veg"
                                        checked={foodType === 'veg'}
                                        onChange={(e) => setFoodType(e.target.value)}
                                    />
                                    Veg
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="non-veg"
                                        checked={foodType === 'non-veg'}
                                        onChange={(e) => setFoodType(e.target.value)}
                                    />
                                    Non-Veg
                                </label>
                            </div>
                        </div>
                    )}
                    <button type="submit">Add Boat</button>
                </form>
                
            </div>
        </div>
    );
};

export default AddBoat;
