import React, { useState } from 'react';
import '../assets/css/ViewEditBoat.css';
import sunset from '../assets/images/sunset.jpg';
import bluewater from '../assets/images/bluewater.jpg';
import river from '../assets/images/river.jpg';
import cabin from '../assets/images/cabin.jpeg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';

const ViewEditBoat = () => {
  const [filterCriteria, setFilterCriteria] = useState({ filterBy: 'name', value: '' });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedBoatId, setSelectedBoatId] = useState(null);
  const [boatHouses, setBoatHouses] = useState([
    {
      id: 1,
      name: 'Sunset Boat House',
      image: sunset,
      location: 'Lakeview, California',
      personsPerRoom: 4,
      availableDates: ['2024-02-01', '2024-02-03', '2024-02-05'],
      timing: '9:00 AM - 6:00 PM',
      foodIncluded: true,
      rating: 4.5,
      price: 200,
    },
    {
      id: 2,
      name: 'Blue Waters',
      image: bluewater,
      location: 'Oceanview, Florida',
      personsPerRoom: 6,
      availableDates: ['2024-02-02', '2024-02-04', '2024-02-06'],
      timing: '10:00 AM - 7:00 PM',
      foodIncluded: false,
      rating: 3.8,
      price: 150,
    },
    {
      id: 3,
      name: 'Riverside Retreat',
      image: river,
      location: 'Riverview, Oregon',
      personsPerRoom: 3,
      availableDates: ['2024-02-01', '2024-02-03', '2024-02-06'],
      timing: '8:00 AM - 5:00 PM',
      foodIncluded: true,
      rating: 4.2,
      price: 180,
    },
    {
      id: 4,
      name: 'Tranquil Lake Cabin',
      image: cabin,
      location: 'Lakeside, Montana',
      personsPerRoom: 5,
      availableDates: ['2024-02-02', '2024-02-05', '2024-02-06'],
      timing: '10:00 AM - 6:00 PM',
      foodIncluded: true,
      rating: 4.0,
      price: 220,
    },
  ]);

  const filteredBoatHouses = boatHouses.filter((boatHouse) => {
    if (filterCriteria.filterBy === 'name') {
      return boatHouse.name.toLowerCase().includes(filterCriteria.value.toLowerCase());
    } else if (filterCriteria.filterBy === 'price') {
      return boatHouse.price >= parseInt(filterCriteria.value, 10);
    } else if (filterCriteria.filterBy === 'persons') {
      return boatHouse.personsPerRoom >= parseInt(filterCriteria.value, 10);
    }
    return true;
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({ ...filterCriteria, [name]: value });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const toggleCalendar = (boatId) => {
    setShowCalendar(!showCalendar);
    setSelectedBoatId(boatId);
  };

  const handleDelete = (id) => {
    setBoatHouses(boatHouses.filter((boat) => boat.id !== id));
  };

  return (
    <div className='adview'>
        <AdminSidebar/>
    <div className="boatlist">
      <div className="view-boat-container">
        <div className="filter-container">
          <select name="filterBy" value={filterCriteria.filterBy} onChange={handleFilterChange}>
            <option value="name">Filter by Name</option>
            <option value="price">Filter by Price</option>
            <option value="persons">Filter by Persons</option>
          </select>
          <input
            type="text"
            placeholder={`Enter ${filterCriteria.filterBy === 'name' ? 'name' : filterCriteria.filterBy}`}
            name="value"
            value={filterCriteria.value}
            onChange={handleFilterChange}
          />
        </div>
        {filteredBoatHouses.length === 0 && (
          <p>No boats found based on the selected criteria.</p>
        )}
        <div className="boat-houses">
          {filteredBoatHouses.map((boatHouse) => (
            <div key={boatHouse.id} className="boat-house">
              <div className="price-box">${boatHouse.price}/day</div>
              <img src={boatHouse.image} alt={boatHouse.name} />
              <div className="details">
                <h3>{boatHouse.name}</h3>
                <p>Location: {boatHouse.location}</p>
                <p>Persons per Room: {boatHouse.personsPerRoom}</p>
                <p>Timing: {boatHouse.timing}</p>
                <p>Food Included: {boatHouse.foodIncluded ? 'Yes' : 'No'}</p>
                <p className="rating">
                  Rating:{' '}
                  {[...Array(Math.round(boatHouse.rating))].map((_, i) => (
                    <span key={i} className="filled">★</span>
                  ))}
                  {[...Array(5 - Math.round(boatHouse.rating))].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </p>
                <div className="available-dates">
                  <button className='date' onClick={() => toggleCalendar(boatHouse.id)}>Available Dates</button>
                  {showCalendar && selectedBoatId === boatHouse.id && (
                    <Calendar
                      onChange={handleDateChange}
                      value={selectedDate}
                      tileDisabled={({ date }) =>
                        !boatHouse.availableDates.includes(
                          date.toISOString().split('T')[0]
                        )
                      }
                    />
                  )}
                </div>
                <br/>
                <div className='book-boat'>
                    <button className='book-button' onClick={() => handleDelete(boatHouse.id)}>
                        Delete
                    </button>
                    
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewEditBoat;
