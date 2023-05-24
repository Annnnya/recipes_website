import React, { useEffect, useState, createContext, useContext } from 'react';
import './Recommendation.css';
import RecommendedDish from './RecommendedDish.js';
import { RandomDish } from '../utils.js';

const RecommendationContext = createContext();

const Recommendation = () => {
  const [recommendedDishes, setRecommendedDishes] = useState([]);

  useEffect(() => {
    const savedDishes = localStorage.getItem('recommendedDishes');
    if (savedDishes) {
      setRecommendedDishes(JSON.parse(savedDishes));
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

      const dishes = results.map(result => {
        let notEnough = 5;
        if (result[0].extendedIngredients.length - 5 < 0) {
          notEnough = result[0].extendedIngredients.length;
        }
        const ingredients = result[0].extendedIngredients.slice(0, notEnough).map(ingredient => ingredient.name);
        // const ingredients = result[0].extendedIngredients.slice(0, 5).map(ingredient => ingredient.name);
        return {
          title: result[0].title,
          img: result[0].image,
          ingredients,
          id: result[0].id,
        };
      });

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
      id={dish.id}
      imgurl={dish.img}
      title={dish.title}
      ingredients={dish.ingredients}
    />
  ));
};

export default Recommendation;
