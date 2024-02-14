import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from '../components/AdminSidebar';
import '../assets/css/ViewEditBoat.css';

const ViewEditBoat = () => {
  const [boatHouses, setBoatHouses] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    filterBy: 'boatName',
    value: ''
  });
  const [selectedBoat, setSelectedBoat] = useState(null);
  const [updatedBoatName, setUpdatedBoatName] = useState('');
  const [updatedLocation, setUpdatedLocation] = useState('');

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

  const handleOpenModal = (boatHouse) => {
    setSelectedBoat(boatHouse);
    setUpdatedBoatName(boatHouse.boatName);
    setUpdatedLocation(boatHouse.location);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/boat/deleteboat/${id}`)
      .then(response => {
        console.log('Boat deleted successfully');
        setBoatHouses(prevBoatHouses => prevBoatHouses.filter(boatHouse => boatHouse.id !== id));
      })
      .catch(error => {
        console.error('Error deleting boat:', error);
      });
  };

  const handleUpdate = () => {
    const updatedBoat = {
      ...selectedBoat,
      boatName: updatedBoatName,
      location: updatedLocation
    };
    axios.put(`http://localhost:8081/boat/updateboat/${selectedBoat.id}`, updatedBoat)
      .then(response => {
        console.log('Boat details updated successfully');
        setBoatHouses(prevBoatHouses => prevBoatHouses.map(boatHouse => (boatHouse.id === selectedBoat.id ? updatedBoat : boatHouse)));
        setSelectedBoat(null);
      })
      .catch(error => {
        console.error('Error updating boat details:', error);
      });
  };

  const filteredBoatHouses = boatHouses.filter((boatHouse) => {
    if (filterCriteria.filterBy === 'boatName' && !boatHouse.boatName.toLowerCase().includes(filterCriteria.value.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="boatlist">
      <AdminSidebar />
      <div className="view-boat-container">
        <div className="filter-container">
          <select name="filterBy" value={filterCriteria.filterBy} onChange={handleFilterChange}>
            <option value="boatName">Filter by Boat Name</option>
          </select>
          <input
            type="text"
            placeholder="Enter Boat Name"
            name="value"
            value={filterCriteria.value}
            onChange={handleFilterChange}
          />
        </div>
        <div className="boat-houses">
          {filteredBoatHouses.map((boatHouse) => (
            <div key={boatHouse.id} className="boat-house">
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
                  <button className='book-button' onClick={() => handleOpenModal(boatHouse)}>
                    Update
                  </button>
                  <button className='book-button' style={{backgroundColor:'red'}} onClick={() => handleDelete(boatHouse.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedBoat && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Boat Details</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleUpdate();
            }}>
              <input type="text" value={updatedBoatName} onChange={(e) => setUpdatedBoatName(e.target.value)} />
              <input type="text" value={updatedLocation} onChange={(e) => setUpdatedLocation(e.target.value)} />
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewEditBoat;
