import React from "react";
import LogoFooter from "../../assets/images/logofooter.png";
import "./index.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="element">
        <img src={LogoFooter} alt="Logo Footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
