import React from "react";
import { Link as ScrollLink} from "react-scroll";
import { Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation-logo">Kitchen Chronicles</div>
      <div className="nav-right-side">
        <ul className="navigation-list">
          <li className="navigation-item">
            <ScrollLink to="home-section" smooth={true} className="navigation-link">
              Home
            </ScrollLink>
          </li>
          <li className="navigation-item">
            <ScrollLink
              to="recommendation-section"
              smooth={true}
              className="navigation-link"
            >
              Recommendation
            </ScrollLink>
          </li>
          <li className="navigation-item">
            <ScrollLink to="AboutUs" smooth={true} className="navigation-link">
              About
            </ScrollLink>
          </li>
          <li className="navigation-item">
            <Link to="/profile" smooth={true} className="navigation-link">
              Account
            </Link>
          </li>
        </ul>
        <img
          src="user-icon.svg"
          className="icon user-icon"
          alt="User account"
        />
      </div>
    </nav>
  );
};

export default Navigation;
