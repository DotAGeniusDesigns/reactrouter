import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css"; // Add styles for better UI

function DogList({ dogs }) {
  return (
    <div>
      <h1>Meet Our Dogs</h1>
      <div className="dog-list">
        {dogs.map((dog) => (
          <div key={dog.name} className="dog-card">
            <img src={dog.src} alt={dog.name} />
            <h2>
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;
