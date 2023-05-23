import React, { useEffect, useState, createContext, useContext } from 'react';
import './Recommendation.css';
import RecommendedDish from './RecommendedDish.js';
import { RandomDish } from '../utils.js';

const RecommendationContext = createContext();

const Recommendation = () => {
  const [recommendedDishes, setRecommendedDishes] = useState([]);

  useEffect(() => {
    const storedDishes = JSON.parse(localStorage.getItem('recommendedDishes'));
    if (storedDishes) {
      setRecommendedDishes(storedDishes);
    } else {
      fetchRandomDishes();
    }
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
        ingredients1: result[0].extendedIngredients[0].name,
        ingredients2: result[0].extendedIngredients[1].name,
        ingredients3: result[0].extendedIngredients[2].name,
        ingredients4: result[0].extendedIngredients[3].name,
        ingredients5: result[0].extendedIngredients[4].name,
        id: result[0].id,
        cuisine: result[0].cuisine
      }));

      setRecommendedDishes(dishes);
      localStorage.setItem('recommendedDishes', JSON.stringify(dishes));
    } catch (error) {
      console.error('Error fetching random dishes:', error);
    }
  };

  return (
    <RecommendationContext.Provider value={recommendedDishes}>
      <section className="recommendation-section">
        <h2 className="recommendation-section-title">Recommendation</h2>
        <p className="recommendation-description">
          Today we want to recommend you these dishes:
        </p>
        <div className="recommendation-section-boxes">
          <RecommendedDishesContainer />
        </div>
      </section>
    </RecommendationContext.Provider>
  );
};

const RecommendedDishesContainer = () => {
  const recommendedDishes = useContext(RecommendationContext);

  return recommendedDishes.map((dish, index) => (
    <RecommendedDish
      key={index}
      id={dish.id}
      cuisine={dish.cuisine}
      imgurl={dish.img}
      title={dish.title}
      ingredients1={dish.ingredients1}
      ingredients2={dish.ingredients2}
      ingredients3={dish.ingredients3}
      ingredients4={dish.ingredients4}
      ingredients5={dish.ingredients5}
    />
  ));
};

export default Recommendation;
