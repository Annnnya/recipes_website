import React from 'react';
import './Recommendation.css';
import RecommendedDish from './RecommendedDish.js';


const Recommendation = () => {
  return (
    <section className="recommendation-section">
      <h2 className="recommendation-section-title">Recommendation</h2>
      <p className = "recommendation-description">Today we want to recommend you these dishes:</p>
      <div className="recommendation-section-boxes">
        <RecommendedDish imgurl = 'rec1.jpg'/>
        <RecommendedDish imgurl = 'rec2.jpg'/>
        <RecommendedDish imgurl = 'rec3.jpg'/>
      </div>
    </section>
  );
};

export default Recommendation;