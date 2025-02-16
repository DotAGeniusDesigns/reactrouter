import React from "react";
import { useParams, Redirect } from "react-router-dom";
import "./DogDetails.css"; // Create styles if needed

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) return <Redirect to="/dogs" />;

  return (
    <div className="dog-details">
      <img src={dog.src} alt={dog.name} />
      <h2>{dog.name}</h2>
      <h3>Age: {dog.age}</h3>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
