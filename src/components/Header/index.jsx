import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import "./index.scss";

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo" />
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
