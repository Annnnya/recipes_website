import './App.css';
import Home from './Home.js';
import ProfilePage from './ProfilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Desktop1 from "./Desktop1";
import RecipeComponent from './RecipeComponent.js';
import SearchPage from './SearchPage';


function App() {
	return (
		<div className="App">
			<link href="https://fonts.googleapis.com/css2?family=Changa&display=swap" rel="stylesheet"></link>
			<script src="https://apis.google.com/js/platform.js" async defer></script>
			<meta name="google-signin-client_id" content="988358529452-28melk7o68t67m9bq28i0ots19hm9d6g.apps.googleusercontent.com.apps.googleusercontent.com"></meta>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/profile" element={<ProfilePage />} />
					<Route exact path="/auth" element={<Desktop1 />} />
					<Route exact path="/dish-page/:recipeId" element={<RecipeComponent />} />
					<Route exact path="/search-page" element={<SearchPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
