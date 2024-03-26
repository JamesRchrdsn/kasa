import React from "react";
import { useParams } from "react-router-dom";

function PropertyDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Détails de la propriété {id}</h1>
      <p>Exemple de propriété</p>
    </div>
  );
}

export default PropertyDetail;
