import React, { useState, useEffect } from "react";
import logementData from "../../assets/data/logements.json";

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
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
        <Card key={index} title={property.title} cover={property.cover} />
      ))}
    </div>
  );
}

export default CardList;

// import React, { useState, useEffect } from "react";

// function Card({ title, cover }) {
//   return (
//     <div className="card">
//       <img src={cover} alt={title} />
//       <h2>{title}</h2>
//     </div>
//   );
// }

// function CardList() {
//   const [propertyData, setPropertyData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
//         );
//         if (!response.ok) {
//           throw new Error("Erreur lors du chargement des données: 1");
//         }
//         const data = await response.json();
//         setPropertyData(data);
//       } catch (error) {
//         console.error(
//           "Erreur lors du chargement des données: 2",
//           error.message
//         );
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="card-list">
//       {propertyData.map((property, index) => (
//         <Card key={index} title={property.title} cover={property.cover} />
//       ))}
//     </div>
//   );
// }

// export default CardList;
