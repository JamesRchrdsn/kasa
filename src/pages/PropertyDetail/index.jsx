import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/carrousel/index";
import Data from "../../assets/data/logements.json";
import Rates from "../../components/rates";
import ExpendableBanner from "../../components/Expand";

function PropertyDetail() {
  const { id } = useParams();
  const lodging = Data.find((item) => item.id === id);

  return (
    <div className="all-components">
      <div className="carrousel">
        <Carousel id={lodging?.id} />
      </div>
      <div className="titleproperty">
        <h2>{lodging?.title}</h2>
        <div className="property">
          <p>{lodging?.host?.name}</p>
          {lodging?.host?.picture && (
            <img src={lodging.host.picture} alt={lodging.host.name} />
          )}
        </div>
      </div>
      <p className="location">{lodging?.location}</p>
      <div className="key-rating">
        <div className="keywords">
          {lodging?.tags.map((tag, index) => (
            <span key={index} className="keyword">
              {tag}
            </span>
          ))}
        </div>
        <Rates rating={lodging?.rating} />
      </div>
      <div className="expandselect">
        <ExpendableBanner
          closedText="Description"
          expandedText={lodging?.description}
        />
        <ExpendableBanner
          closedText="Équipements"
          expandedText={lodging?.equipments.map((equipment, index) => (
            <span key={index} className="equipment">
              {equipment}
            </span>
          ))}
        />
      </div>
    </div>
  );
}

export default PropertyDetail;
