import React from 'react';
import {Link} from 'react-router-dom';
import './RecommendedDish.css';

const RecommendedDish = ({imgurl, ingredients, id, title}) => {
    return (
        <div className="dish-block">
            <Link to={`/dish-page/${id}`} className="dish-title">
                <div className="hover-block">
                    <img src={imgurl} className="recommendation-photo" alt="User account"/>

                    <div className="overlay">
            <pre className="text">
              Main Ingredients:<br/>
                {ingredients.map((ingredient, index) => (
                    <span key={index}>{ingredient}<br/></span>
                ))}
            </pre>
                    </div>
                </div>
            </Link>
            <div className="title-block">
                <Link to={`/dish-page/${id}`} className="dish-title">{title}</Link>
            </div>
        </div>
    );
};

export default React.memo(RecommendedDish);
