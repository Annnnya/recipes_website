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


<style>
@import url('https://fonts.googleapis.com/css2?family=Changa&display=swap');
</style> 

const MainPhoto = () => {
  return (
    <div className = "big-block">
      <Navigation />
      <div className="home-section">
        <div className="home-section-content">
          <h1>Welcome to Kitchen Chronicles</h1>
          <p>Discover a vast collection of recipes carefully curated from around the world, brought
            to you by passionate home cooks and seasoned chefs alike.</p>
          <button className = "search-button">
            <div className = "button-text">
              <img src="search.svg" className = "icon" alt="Search"/>
              <span>Find Recipe</span>
            </div>
          </button>
        </div>
      </div>
      <Recommendation />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default MainPhoto;
