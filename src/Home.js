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
import SlideShow from './SlideShow.js';
import './SlideShow.css';


<style>
@import url('https://fonts.googleapis.com/css2?family=Changa&display=swap');
</style> 


const MainPhoto = () => {
  return (
    <div className = "big-block">
      <Navigation />
      <SlideShow slides={slides}/>
      <div className="home-section">
        <div className="home-section-content">
          <h1>Welcome to Kitchen Chronicles</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
