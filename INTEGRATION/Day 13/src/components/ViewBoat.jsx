import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const ViewBoat = () => {
  const [boatHouses, setBoatHouses] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    filterBy: 'boatName',
    value: '',
    food: '',
    foodType: ''
  });

  useEffect(() => {
    // Fetch boat data from the backend when component mounts
    axios.get('http://localhost:8081/boat/get')
      .then(response => {
        setBoatHouses(response.data);
      })
      .catch(error => {
        console.error('Error fetching boat data:', error);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({ ...filterCriteria, [name]: value });
  };

  const filteredBoatHouses = boatHouses.filter((boatHouse) => {
    if (filterCriteria.filterBy === 'boatName' && !boatHouse.boatName.toLowerCase().includes(filterCriteria.value.toLowerCase())) {
      return false;
    }
    if (filterCriteria.filterBy === 'price') {
      const formattedPrice = parseFloat(boatHouse.price.replace('$', '').trim());
      if (isNaN(formattedPrice) || formattedPrice < parseFloat(filterCriteria.value)) {
        return false;
      }
    }
    if (filterCriteria.filterBy === 'rooms' && boatHouse.rooms < parseInt(filterCriteria.value, 10)) {
      return false;
    }
    return true;
  });
  
  return (
    <div className="boatlist">
      <Sidebar />
      <div className="view-boat-container">
        <div className="filter-container">
          <select name="filterBy" value={filterCriteria.filterBy} onChange={handleFilterChange}>
            <option value="boatName">Filter by Boat Name</option>
            <option value="price">Filter by Price</option>
            <option value="rooms">Filter by Rooms</option>
          </select>
          <input
            type="text"
            placeholder={`Enter ${filterCriteria.filterBy === 'boatName' ? 'Boat Name' : filterCriteria.filterBy}`}
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
            <div key={boatHouse.boatId} className="boat-house">
              <div className="price-box">{boatHouse.price}/day</div>
              <img src={boatHouse.image} alt={boatHouse.boatName} />
              <div className="details">
                <h3>{boatHouse.boatName}</h3>
                <p>Location: {boatHouse.location}</p>
                <p>No.of Rooms: {boatHouse.rooms}</p>
                <p>Timing: {boatHouse.fromTime} - {boatHouse.toTime}</p>
                <p>Food: {boatHouse.food}</p>
                <p>Food Type: {boatHouse.foodType}</p>
                <br/>
                <div className='book-boat'>
                <Link
  to={{
    pathname: '/Booking',
    state: { boatId: boatHouse.boatId, boatName: boatHouse.boatName }
  }}
>
  <button 
    className='book-button'
    onClick={() => {
      localStorage.setItem('boatId', boatHouse.boatId);
      localStorage.setItem('boatName', boatHouse.boatName);
      localStorage.setItem('image', boatHouse.image);
    }}
  >
    Book
  </button>
</Link>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewBoat;
