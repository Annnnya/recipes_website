import React, { useEffect, useState } from 'react';
import './Recommendation.css';
import RecommendedDish from './RecommendedDish.js';
import { RandomDish } from '../utils.js';

const Recommendation = () => {
  const [recommendedDishes, setRecommendedDishes] = useState([]);

  useEffect(() => {
    fetchRandomDishes();
  }, []);

  const fetchRandomDishes = async () => {
    try {
      const results = await Promise.all([
        RandomDish(),
        RandomDish(),
        RandomDish()
      ]);

      const dishes = results.map(result => ({
        title: result[0].title,
        img: result[0].image,
        time: result[0].readyInMinutes,
        ingredients1: result[0].extendedIngredients[0].name,
        ingredients2: result[0].extendedIngredients[1].name,
        ingredients3: result[0].extendedIngredients[2].name,
        ingredients4: result[0].extendedIngredients[3].name,
        ingredients5: result[0].extendedIngredients[4].name,
        dishtype: result[0].dishTypes[0]
      }));

      setRecommendedDishes(dishes);
    } catch (error) {
      console.error('Error fetching random dishes:', error);
    }
  };

  return (
    <section className="recommendation-section">
      <h2 className="recommendation-section-title">Recommendation</h2>
      <p className="recommendation-description">
        Today we want to recommend you these dishes:
      </p>
      <div className="recommendation-section-boxes">
        {recommendedDishes.map((dish, index) => (
          <RecommendedDish
            key={index}
            id={`rec${index + 1}`}
            time={dish.time}
            imgurl={dish.img}
            title={dish.title}
            ingredients1={dish.ingredients1}
            ingredients2={dish.ingredients2}
            ingredients3={dish.ingredients3}
            ingredients4={dish.ingredients4}
            ingredients5={dish.ingredients5}
            dishtype={dish.dishtype}
          />
        ))}
      </div>
    </section>
  );
};

export default Recommendation;