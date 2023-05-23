import logo from './logo.svg';
import './App.css';
import SearchByParameters from './components/SearchParameters';
import SearchPage from './components/SearchPage';
import RecipeComponent from './components/RecipeComponent';


function App() {
  return (
    <div className="App">
      <RecipeComponent recipeId={956718}/>
    </div>
  );
}

export default App;
