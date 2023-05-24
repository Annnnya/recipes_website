import React, { useState, useEffect } from 'react';
import SearchByParameters from './SearchParameters';
import SearchResult from './SearchResult';
import "./SearchPage.css"
import RecommendedDish from './RecommendedDish';
import NavigationSearchPage from './NavigatinSearchPage';

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
      

    const handleSearch = () => {
        const apiKey = '02855522d96c497d88f3fc4c6fdc54aa';
        if (searchQuery) {
            // Perform search logic based on the search query
            const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&addRecipeInformation=true`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setSearchResults(data.results);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=30`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setSearchResults(data.recipes);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };

    useEffect(() => {
        handleSearch();
    }, []);


    return (
        <div>

            <NavigationSearchPage/>

            <h1>Search Page</h1>

            <div className='search-input'>
                <input className='text-input'
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                    placeholder="Enter the food's name"
                />
                <div className="search-controls-container">
                    <SearchByParameters onSearchResults={handleSearchResults} />
                    <button onClick={handleSearch} className="search-button">Search</button>
                </div>
            </div>

            <div className='search-section'>
                <h2>Search Results</h2>
                {searchResults.map((result) => (
                    <RecommendedDish
                    imgurl = {result.image}
                    ingredients={getFirstFiveIngredients(result)}
                    id  = {result.id}
                    title = {result.title}/>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
