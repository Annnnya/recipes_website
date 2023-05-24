import React from "react";
// import { Link as ScrollLink} from "react-scroll";
import { Link } from 'react-router-dom';
// import "./Navigation.css";

const NavigationSearchPage = () => {
  return (
    <nav className="navigation">
      <div className="navigation-logo">Kitchen Chronicles</div>
      <div className="nav-right-side">
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/" smooth={true} className="navigation-link">
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link to="/profile" smooth={true} className="navigation-link">
              Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationSearchPage;
