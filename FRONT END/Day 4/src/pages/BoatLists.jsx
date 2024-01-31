import React, { useState } from "react";
import "../assets/css/BoatLists.css";


const BoatsList = ({ boats }) => {
  const [editingBoat, setEditingBoat] = useState(null);

  const handleEdit = (boat) => {
    setEditingBoat(boat);
  };

  const handleSave = () => {
    // Add logic to save edited boat data
    setEditingBoat(null);
  };

  const handleCancel = () => {
    setEditingBoat(null);
  };

  return (
    <div className="boats-list">
      {boats.map((boat) => (
        <div className="boat-card" key={boat.id}>
          {editingBoat && editingBoat.id === boat.id ? (
            <div className="boat-card-edit">
              <input
                type="text"
                defaultValue={boat.name}
                onChange={(e) => (boat.name = e.target.value)}
              />
              <input
                type="text"
                defaultValue={boat.type}
                onChange={(e) => (boat.type = e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div className="boat-card-view">
              <div>Name: {boat.name}</div>
              <div>Type: {boat.type}</div>
              <button onClick={() => handleEdit(boat)}>Edit</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BoatsList;
