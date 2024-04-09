import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../../components/carrousel/index";
import Data from "../../assets/data/logements.json";
import Rates from "../../components/rates";
import ExpendableBanner from "../../components/Expand";

function PropertyDetail() {
  const { id } = useParams();
  const lodging = Data.find((item) => item.id === id);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!lodging) {
      navigate("/404Error");
    }
  }, [id, lodging, navigate]);

  if (!lodging) {
    return null;
  }

  return (
    <div className="all-components">
      <div className="carrousel">
        <Carousel id={lodging?.id} />
      </div>
      {windowWidth <= 768 ? (
        <div className="mobil-prop">
          <div className="titleproperty">
            <h2>{lodging?.title}</h2>
          </div>
          <p className="location">{lodging?.location}</p>
          <div className="keywords">
            {lodging?.tags.map((tag, index) => (
              <span key={index} className="keyword">
                {tag}
              </span>
            ))}
          </div>
          <div className="rating-host">
            <Rates rating={lodging?.rating} />
            <div className="property">
              <p>{lodging?.host?.name}</p>
              {lodging?.host?.picture && (
                <img src={lodging.host.picture} alt={lodging.host.name} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="desktop-prop">
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
        </div>
      )}

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
