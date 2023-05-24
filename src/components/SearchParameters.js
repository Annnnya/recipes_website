import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./SearchParameters.css";
import Papa from 'papaparse';
import {GoSettings} from 'react-icons/go';
import {MdClose} from 'react-icons/md'
import {spoonacularKey1} from '../utils'

const SearchByParameters = ({onSearchResults}) => {
    const [mealType, setMealType] = useState('');
    const handleMealTypeChange = (selected) => {
        if (selected) {
            setMealType(selected.value);
        } else {
            setMealType('');
        }
    };

    const [ingredientsInclude, setIngredientsInclude] = useState([]);
    const handleIngredientsIncludeChange = (selected) => {
        const selectedValues = selected.map((option) => option.label);
        setIngredientsInclude(selectedValues);

        const filteredOptions = ingredientOptions.filter(
            (option) => !selectedValues.includes(option.label)
        );
        setFilteredIngredientOptions(filteredOptions);
    };

    const [ingredientsExclude, setIngredientsExclude] = useState([]);
    const handleIngredientsExcludeChange = (selected) => {
        const selectedValues = selected.map((option) => option.label);
        setIngredientsExclude(selectedValues);

        const filteredOptions = ingredientOptions.filter(
            (option) => !selectedValues.includes(option.label)
        );
        setFilteredIngredientOptions(filteredOptions);
    };

    const [ingredientOptions, setIngredientOptions] = useState([]);
    const [filteredIngredientOptions, setFilteredIngredientOptions] = useState([]);

    const [cuisine, setCuisine] = useState([]);
    const handleCuisineChange = (selected) => {
        const selectedValues = selected.map((option) => option.value);
        setCuisine(selectedValues);
    };

    const [diets, setDiets] = useState([]);
    const handleDietsChange = (selected) => {
        const selectedValues = selected.map((option) => option.value);
        setDiets(selectedValues);
    };

    const [intolerances, setIntolerances] = useState([]);
    const handleIntolerancesChange = (selected) => {
        const selectedValues = selected.map((option) => option.value);
        setIntolerances(selectedValues);
    };

    const [searchByKeyword, setSearchByKeyword] = useState('');
    const handleSearchByKeywordChange = (event) => {
        setSearchByKeyword(event.target.value);
    };

    const [nutrientRanges, setNutrientRanges] = useState({
        calories: [0, 2000],
        carbs: [0, 200],
        fats: [0, 200],
        proteins: [0, 200],
    });

    const handleNutrientRangeChange = (nutrient, values) => {
        setNutrientRanges((prevRanges) => ({
            ...prevRanges,
            [nutrient]: values,
        }));
    };

    const [menuVisible, setMenuVisible] = useState(false); // State to track menu visibility

    const toggleMenu = () => {
        setMenuVisible((prevState) => !prevState); // Toggle the menu visibility
    };

    const handleSearch = () => {
        const apiKey = spoonacularKey1;
        const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

        const params = {};

        params.number = 30;

        params.sort = "popularity";

        params.addRecipeInformation = true;

        if (mealType) {
            params.type = mealType;
        }

        if (ingredientsInclude.length > 0) {
            params.includeIngredients = ingredientsInclude.join(',');
        }

        if (ingredientsExclude.length > 0) {
            params.excludeIngredients = ingredientsExclude.join(',');
        }

        if (cuisine.length > 0) {
            params.cuisine = cuisine.join(',');
        }

        if (diets.length > 0) {
            params.diet = diets.join(',');
        }

        if (intolerances.length > 0) {
            params.intolerances = intolerances.join(',');
        }

        params.maxCalories = nutrientRanges.calories[1];
        params.minCarbs = nutrientRanges.carbs[0];
        params.maxCarbs = nutrientRanges.carbs[1];
        params.minFats = nutrientRanges.fats[0];
        params.maxFats = nutrientRanges.fats[1];
        params.minProteins = nutrientRanges.proteins[0];
        params.maxProteins = nutrientRanges.proteins[1];

        if (searchByKeyword) {
            params.query = searchByKeyword;
        }

        const queryString = Object.entries(params)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');

        const fullApiUrl = `${apiUrl}&${queryString}`;

        fetch(fullApiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                onSearchResults(data.results);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        setMenuVisible(false);
    };


    const intolerancesOptions = [
        {value: 'Dairy', label: 'Dairy'},
        {value: 'Egg', label: 'Egg'},
        {value: 'Gluten', label: 'Gluten'},
        {value: 'Grain', label: 'Grain'},
        {value: 'Peanut', label: 'Peanut'},
        {value: 'Seafood', label: 'Seafood'},
        {value: 'Sesame', label: 'Sesame'},
        {value: 'Shellfish', label: 'Shellfish'},
        {value: 'Soy', label: 'Soy'},
        {value: 'Sulfite', label: 'Sulfite'},
        {value: 'Tree Nut', label: 'Tree Nut'},
        {value: 'Wheat', label: 'Wheat'},
    ];

    const mealTypes = ['main course',
        'side dish',
        'dessert',
        'appetizer',
        'salad',
        'bread',
        'breakfast',
        'soup',
        'beverage',
        'sauce',
        'marinade',
        'fingerfood',
        'snack',
        'drink'];

    const mealTypeOptions = mealTypes.map((type) => ({
        value: type,
        label: type,
    }));

    const cuisineOptions = [
        "African",
        "Asian",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "Eastern European",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Korean",
        "Latin American",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese",
    ];


    const dietOptions = [
        {value: 'gluten-free', label: 'Gluten Free'},
        {value: 'ketogenic', label: 'Ketogenic'},
        {value: 'vegetarian', label: 'Vegetarian'},
        {value: 'lacto-vegetarian', label: 'Lacto-Vegetarian'},
        {value: 'ovo-vegetarian', label: 'Ovo-Vegetarian'},
        {value: 'vegan', label: 'Vegan'},
        {value: 'pescetarian', label: 'Pescetarian'},
        {value: 'paleo', label: 'Paleo'},
        {value: 'primal', label: 'Primal'},
        {value: 'low-fodmap', label: 'Low FODMAP'},
        {value: 'whole30', label: 'Whole30'},
    ];


    useEffect(() => {
        Papa.parse('top-1k-ingredients.csv', {
            download: true,
            complete: function (results) {
                const ingredients = results.data.map((row) => ({
                    value: row[1],
                    label: row[0],
                }));

                setIngredientOptions(ingredients);
                setFilteredIngredientOptions(ingredients);
            },
        });
    }, []);

    return (
        <div>
            <button className='show-button' onClick={toggleMenu}><GoSettings style={{transform: 'rotate(90deg)'}}/>
            </button>
            <div className={`searchMenu ${menuVisible ? 'active' : ''}`}>

                <button className='close-button' onClick={toggleMenu}><MdClose size={40}/></button>

                <h2>Start typing dish name:</h2>

                <input
                    type="text"
                    value={searchByKeyword}
                    onChange={handleSearchByKeywordChange}
                    placeholder="Enter the food's name"
                    className='text-adv-search'
                />

                <div className="mealType">
                    <h2>Meal Type:</h2>
                    <Select
                        id="mealType"
                        name="mealType"
                        options={mealTypeOptions}
                        value={mealTypeOptions.find((option) => option.value === mealType)}
                        onChange={handleMealTypeChange}
                        isClearable
                    />
                </div>

                <div className="ingredientsInclude">
                    <h2>Ingredients to Include:</h2>
                    <Select
                        isMulti
                        options={filteredIngredientOptions}
                        value={ingredientsInclude.map((ingredient) => ({
                            value: ingredient,
                            label: ingredient,
                        }))}
                        onChange={handleIngredientsIncludeChange}
                    />

                </div>

                <div className="ingredientsExclude">
                    <h2>Ingredients to Exclude:</h2>
                    <Select
                        isMulti
                        options={filteredIngredientOptions}
                        value={ingredientsExclude.map((ingredient) => ({
                            value: ingredient,
                            label: ingredient,
                        }))}
                        onChange={handleIngredientsExcludeChange}
                    />
                </div>

                <div className="cuisine">
                    <h2>Cuisine:</h2>
                    <Select
                        isMulti
                        options={cuisineOptions.map((cuisine) => ({
                            value: cuisine,
                            label: cuisine,
                        }))}
                        value={cuisine.map((cuisine) => ({
                            value: cuisine,
                            label: cuisine,
                        }))}
                        onChange={handleCuisineChange}
                    />
                </div>

                <div className="intolerances">
                    <h2>Intolerances:</h2>
                    <Select
                        isMulti
                        options={intolerancesOptions}
                        value={intolerances.map((intolerance) => ({
                            value: intolerance,
                            label: intolerance,
                        }))}
                        onChange={handleIntolerancesChange}
                    />
                </div>

                <div className="diets">
                    <h2>Diets:</h2>
                    <Select
                        isMulti
                        options={dietOptions}
                        value={diets.map((diet) => ({
                            value: diet,
                            label: diet,
                        }))}
                        onChange={handleDietsChange}
                    />
                </div>

                <div className="nutrients">
                    <h2>Nutrients per serving:</h2>
                    <div className="slider-div">
                        <label>Calories:</label>
                        <div>
                            <Slider
                                range
                                min={0}
                                max={2000}
                                value={nutrientRanges.calories}
                                onChange={(values) =>
                                    handleNutrientRangeChange('calories', values)
                                }
                            />
                            <span>
                                {nutrientRanges.calories[0]} - {nutrientRanges.calories[1]}
                            </span>
                        </div>
                    </div>

                    <div className="slider-div">
                        <label>Carbs:</label>
                        <div>
                            <Slider
                                range
                                min={0}
                                max={200}
                                value={nutrientRanges.carbs}
                                onChange={(values) => handleNutrientRangeChange('carbs', values)}
                            />
                            <span>
                                {nutrientRanges.carbs[0]} - {nutrientRanges.carbs[1]}
                            </span>
                        </div>
                    </div>

                    <div className="slider-div">
                        <label>Fats:</label>
                        <div>
                            <Slider
                                range
                                min={0}
                                max={200}
                                value={nutrientRanges.fats}
                                onChange={(values) => handleNutrientRangeChange('fats', values)}
                            />
                            <span>
                                {nutrientRanges.fats[0]} - {nutrientRanges.fats[1]}
                            </span>
                        </div>
                    </div>

                    <div className="slider-div">
                        <label>Proteins:</label>
                        <div>
                            <Slider
                                range
                                min={0}
                                max={200}
                                value={nutrientRanges.proteins}
                                onChange={(values) =>
                                    handleNutrientRangeChange('proteins', values)
                                }
                            />
                            <span>
                                {nutrientRanges.proteins[0]} - {nutrientRanges.proteins[1]}
                            </span>
                        </div>
                    </div>
                </div>
                <button className='search-button2' onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
};

export default SearchByParameters;