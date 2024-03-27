import React from "react";
import { useLocation } from "react-router-dom";
import HomeImg from "../../assets/images/homeimg.png";
import AboutImg from "../../assets/images/aboutimg.png";
import "./index.scss";

function Banner() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";

  const getImage = () => {
    if (isHomePage) {
      return (
        <div className="banner-home">
          <img src={HomeImg} alt="Banner" />
          <div className="banner-text">Chez vous, partout et ailleurs</div>
        </div>
      );
    } else if (isAboutPage) {
      return (
        <div className="banner-about">
          <img src={AboutImg} alt="Banner" />
        </div>
      );
    } else {
      return null;
    }
  };
  return <div className="banner">{getImage()}</div>;
}

export default Banner;
