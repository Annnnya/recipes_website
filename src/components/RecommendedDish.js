import React from 'react';
import './RecommendedDish.css';

const RecommendedDish = (props) => {
  return (
    <div className="dish-block">
      <img src={props.imgurl} className="recommendation-photo" alt="User account" />
      <div className="overlay">
        <pre className="text">
          {/* Cuisine: {props.cuisine}<br /> */}
          Main Ingredients:<br />
          {props.ingredients1}<br />
          {props.ingredients2}<br />
          {props.ingredients3}<br />
          {props.ingredients4}<br />
          {props.ingredients5}<br />
        </pre>
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default React.memo(RecommendedDish);
