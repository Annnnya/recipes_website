import React from 'react';
import './Home.css';
import Navigation from './Navigation.js';
import './Navigation.css';
import Recommendation from './Recommendation.js';
import './Recommendation.css';
import AboutUs from './AboutUs.js';
import './AboutUs.css';
import Footer from './Footer.js';
import './Footer.css';
import {Link, useNavigate} from 'react-router-dom';


<style>
    @import url('https://fonts.googleapis.com/css2?family=Changa&display=swap');
</style>

const MainPhoto = () => {
    const navigate = useNavigate();

    return (
        <div className="big-block">
            <Navigation/>
            <div className="home-section">
                <div className="home-section-content">
                    <h1>Welcome to Kitchen Chronicles</h1>
                    <span>Discover a vast collection of recipes carefully curated from around the world.</span>
                    <button onClick={() => navigate('/search-page')} className="search-button">
                        <div className="button-text">
                            <img src="search.svg" className="icon" alt="Search"/>
                            <span>Find Recipe</span>
                        </div>
                    </button>
                </div>
            </div>
            <Recommendation/>
            <AboutUs/>
            <Footer/>
        </div>
    );
};

export default MainPhoto;
