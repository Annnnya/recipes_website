import React from 'react';
import './RecommendedDish.css';

const RecommendedDish = (props) => {
  return (
<div className = "dish-block">
    <img src={props.imgurl} className = "recommendation-photo" alt="User account"/>
    <div class="overlay">
      <p class="text">Hover Text</p>
    </div>
    {/* <div className="recommendation-photo recommendation-photo-1"></div> */}
    <h3>Name</h3>
</div>
  );
};

export default RecommendedDish;