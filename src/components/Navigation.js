import React from "react";
import {Link as ScrollLink} from "react-scroll";
import {Link} from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
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
                        <Link to="/search-page" smooth={true} className="navigation-link">
                            Search
                        </Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/profile" smooth={true} className="navigation-link">
                            Account
                        </Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/auth" smooth={true} className="navigation-link">
                            Register
                        </Link>
                    </li>
                </ul>
                {/* <img
          src="user-icon.svg"
          className="icon user-icon"
          alt="User account"
        /> */}
            </div>
        </nav>
    );
};

export default Navigation;
