import React, {useState, useEffect} from 'react';
import SearchByParameters from './SearchParameters';
import "./SearchPage.css"
import RecommendedDish from './RecommendedDish';
import Navigation from './Navigation';
import {spoonacularKey1} from '../utils'

const SearchPage = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const [searchResults, setSearchResults] = useState([]);
    const handleSearchResults = (results) => {
        setSearchResults(results);
    };

    const getFirstFiveIngredients = (recipe) => {
        if (recipe.extendedIngredients && recipe.extendedIngredients.length > 0) {
            return recipe.extendedIngredients.slice(0, 5).map(ingredient => ingredient.original);
        }

        return [];
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // console.log(event);
            event.preventDefault();
            handleSearch();
        }
    }


    const handleSearch = () => {
        const apiKey = spoonacularKey1;
        if (searchQuery) {
            // Perform search logic based on the search query
            const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&addRecipeInformation=true&number=10&sort=popularity`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setSearchResults(data.results);
                })
                .catch(error => {
                    setSearchResults([]);
                    console.error('Error:', error);
                });
        } else {
            const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setSearchResults(data.recipes);
                })
                .catch(error => {
                    setSearchResults([]);
                    console.error('Error:', error);
                });
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);


    return (
        <div>

            <Navigation/>

            <h1>Search Page</h1>

            <div className='search-input'>
                <input className='text-input'
                       type="text"
                       value={searchQuery}
                       onChange={handleSearchQueryChange}
                       placeholder="Enter the food's name"
                       onKeyDown={handleKeyDown}
                />
                <div className="search-controls-container">
                    <SearchByParameters onSearchResults={handleSearchResults}/>
                    <button onClick={handleSearch} className="search-button">Search</button>
                </div>
            </div>

            <div className='search-section'>
                <h2>Search Results</h2>
                {searchResults && searchResults.length > 0 ? (
                    searchResults.map((result) => (
                        <RecommendedDish
                            imgurl={result.image}
                            ingredients={getFirstFiveIngredients(result)}
                            id={result.id}
                            title={result.title}
                        />
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
