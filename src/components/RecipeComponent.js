import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeComponent = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const apiKey = 'e4ed392f455e4e18bdf6553c5b88581a';
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${recipeId.toString()}/information?apiKey=${apiKey}`
        );
        console.log(`https://api.spoonacular.com/recipes/${recipeId.toString()}/information?apiKey=${apiKey}`)
        const data = await response.json();
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading recipe...</div>;
  }

  const { title, image, extendedIngredients, summary, analyzedInstructions, readyInMinutes } = recipe;

  const removeHtmlTags = (text) => {
    return text.replace(/<[^>]*>/g, '');
  };

  const processedSummary = removeHtmlTags(summary);

  const tags = Object.entries(recipe).reduce((acc, [key, value]) => {
    if (typeof value === 'boolean' && value === true) {
      acc.push(key);
    }
    return acc;
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      {tags.length > 0 && (
        <div>
          <h2>Tags:</h2>
          <ul>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      )}
      <img src={image} alt={title} />
      <h2>Ingredients:</h2>
      <ul>
        {extendedIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </ul>
      <h2>Summary:</h2>
      <p>{processedSummary}</p>
      <h2>Instructions:</h2>
      <ol>
        {analyzedInstructions[0].steps.map((step, index) => (
          <li key={index}>{step.step}</li>
        ))}
      </ol>
      {readyInMinutes && (
        <div>
          <h2>Cooking Time:</h2>
          <p>{readyInMinutes} minutes</p>
        </div>
      )}
    </div>
  );
};

export default RecipeComponent;
