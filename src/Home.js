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

const slides = [
  {
    imageUrl: require('https://www.google.com/search?q=weather&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjz-5Cjk4T_AhU1i8MKHZ56AzcQ_AUoA3oECAMQBQ&biw=1366&bih=588&dpr=1#imgrc=ZuptfM5RB6TDYM').default,
    caption: 'Slide 1',
  },
  {
    imageUrl: 'https://www.google.com/search?q=weather&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjz-5Cjk4T_AhU1i8MKHZ56AzcQ_AUoA3oECAMQBQ&biw=1366&bih=588&dpr=1#imgrc=ZuptfM5RB6TDYM',
    caption: 'Slide 2',
  },
  {
    imageUrl: 'https://www.google.com/search?q=weather&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjz-5Cjk4T_AhU1i8MKHZ56AzcQ_AUoA3oECAMQBQ&biw=1366&bih=588&dpr=1#imgrc=DoDSeWzdJbqUnM',
    caption: 'Slide 3',
  },
];

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
