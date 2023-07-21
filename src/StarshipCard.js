import React, { useState } from "react";
import "./StarshipCard.css";

function StarshipCard({ starship }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="card" onClick={handleClick}>
      <h3 className="card-title">{starship.name}</h3>
      {expanded && (
        <div>
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Class: {starship.starship_class}</p>
          <p>Cost: {starship.cost_in_credits}</p>
          <p>Length in Meters: {starship.length}</p>
          <p>Crew: {starship.crew}</p>
          <p>Passengers: {starship.passengers}</p>
          <p>Max Speed in Atmosphere: {starship.atmosphering_speed} </p>
          <p>Hyperdrive Rating: {starship.hyperdrive_rating}</p>
          <p>Max Megalight: {starship.MGLT}</p>
          <p>Cargo capacity in Kilograms: {starship.capacity}</p>
          <p>Max of Consumbles: {starship.consumables} </p>
        </div>
      )}
    </div>
  );
}

export default StarshipCard;
