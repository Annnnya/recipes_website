import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {BsClock, BsPeople, BsHeart} from 'react-icons/bs';
import './RecipeComponent.css';
import Navigation from './Navigation';
import {spoonacularKey1} from '../utils'
import {addToWishList} from '../utils'


const RecipeComponent = () => {
    const [recipe, setRecipe] = useState(null);
    const {recipeId} = useParams();

    useEffect(() => {
        const apiKey = spoonacularKey1;

        const fetchRecipe = async () => {
            try {
                const response = await fetch(
                    `https://api.spoonacular.com/recipes/${recipeId.toString()}/information?apiKey=${apiKey}`
                );

                if (!response.ok) {
                    throw new Error('Failed to fetch recipe');
                }

                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.log(error);
                // Handle error state here (e.g., set an error state)
            }
        };

        fetchRecipe();
    }, [recipeId]);

    if (!recipe) {
        return <div>Loading recipe...</div>;
    }

    const {
        title,
        image,
        extendedIngredients,
        summary,
        analyzedInstructions,
        readyInMinutes,
        winePairing,
        servings
    } = recipe;

    const removeHtmlTags = (text) => {
        return text ? text.replace(/<[^>]*>/g, '') : '';
    };

    const processedSummary = removeHtmlTags(summary);

    const tags = Object.entries(recipe).reduce((acc, [key, value]) => {
        if (typeof value === 'boolean' && value === true) {
            acc.push(key);
        }
        return acc;
    }, []);

    return (
        <div className="recipe-container">
            <Navigation/>
            <div className="recipe-image-container">
                <img src={image} alt={title} className="recipe-image"/>
            </div>
            <div className="recipe-info-container">
                <h1 className="recipe-title">{title}</h1>
                <button className="like-button" onClick={() => {
                    addToWishList("andrea-kozlovkyy1", "87718b3846a15bdaa0dbb6f5754dc7385120b278", recipeId).then(data => {
                        console.log(`Added a motherfucking dish with id=${recipeId} to wish list.`);
                    });
                }}>
                    <BsHeart className="heart-icon"/>
                </button>
                {readyInMinutes && (
                    <div className="recipe-info">
                        <span className="info-icon"><BsClock/></span>
                        <span className="info-label">Cooking Time:</span>
                        <span className="info-text">{readyInMinutes} min</span>
                    </div>
                )}
                {servings && (
                    <div className="recipe-info">
                        <span className="info-icon"><BsPeople/></span>
                        <span className="info-label">Servings:</span>
                        <span className="info-text">{servings}</span>
                    </div>
                )}
                {tags.length > 0 && (
                    <div className="recipe-tags">
                        <h2 className="tags-title">Tags:</h2>
                        <div className="tags">
                            <ul className="tags-list">
                                {tags.map((tag) => (
                                    <li key={tag} className="tag-item">{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <h2 className="recipe-section-title">Ingredients:</h2>
            <ul className="recipe-ingredients">
                {extendedIngredients.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">{ingredient.original}</li>
                ))}
            </ul>
            <h2 className="recipe-section-title">Summary:</h2>
            <p className="recipe-summary">{processedSummary}</p>
            <h2 className="recipe-section-title">Instructions:</h2>
            <ol className="recipe-instructions">
                {analyzedInstructions[0].steps.map((step, index) => (
                    <li key={index} className="instruction-step">{step.step}</li>
                ))}
            </ol>
            {winePairing && winePairing.pairedWines.length > 0 && (
                <div className="recipe-wine-pairing">
                    <h2 className="wine-pairing-title">Wine Pairing:</h2>
                    <ul className="wine-pairing-list">
                        {winePairing.pairedWines.map((wine, index) => (
                            <li key={index} className="wine-pairing-item">{wine}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default RecipeComponent;
