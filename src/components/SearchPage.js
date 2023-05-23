import React, { useState, useEffect } from 'react';
import SearchByParameters from './SearchParameters';
import SearchResult from './SearchResult';
import "./SearchPage.css"

const SearchPage = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const [searchResults, setSearchResults] = useState([]);
    const handleSearchResults = (results) => {
        setSearchResults(results);
    };

    const handleSearch = () => {
        const apiKey = 'e4ed392f455e4e18bdf6553c5b88581a';
        if (searchQuery) {
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
                    <SearchResult
                        key={result.id}
                        image={result.image}
                        name={result.title}
                        time={result.readyInMinutes}
                        price={result.pricePerServing}
                        details={result.summary}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
