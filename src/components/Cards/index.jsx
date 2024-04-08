import React, { useState, useEffect } from "react";
import logementData from "../../assets/data/logements.json";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`}>
      <div className="card">
        <img src={cover} alt={title} />
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

function CardList() {
  const [propertyData, setPropertyData] = useState([]);

  useEffect(() => {
    setPropertyData(logementData);
  }, []);

  return (
    <div className="card-list">
      {propertyData.map((property, index) => (
        <Card
          key={index}
          id={property.id}
          title={property.title}
          cover={property.cover}
        />
      ))}
    </div>
  );
}

export default CardList;
