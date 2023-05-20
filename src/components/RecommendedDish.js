import React from 'react';
import './RecommendedDish.css';

const RecommendedDish = (props) => {
  return (
<div className = "dish-block">
    <img src={props.imgurl} className = "recommendation-photo" alt="User account"/>
    <div className="overlay">
      <pre className="text">
      Time to cook: {props.time} min<br></br>
      Type: {props.dishtype}<br></br>
      Main Ingredients:<br></br>
      {props.ingredients1}<br></br>
      {props.ingredients2}<br></br>
      {props.ingredients3}<br></br>
      {props.ingredients4}<br></br>
      {props.ingredients5}<br></br>
      </pre>
      {/* <p className="text">Ingredients: {props.data.extendedIngredients[0].name}</p>
      <p className="text">Ingredients: {props.data.extendedIngredients[1].name}</p> */}

    </div>
    {/* <div className="recommendation-photo recommendation-photo-1"></div> */}
    <h3>{props.title}</h3>
</div>
  );
};

export default RecommendedDish;