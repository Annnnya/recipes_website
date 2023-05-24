import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import ProfilePage from './ProfilePage';
import Desktop1 from "./Desktop1";
import RecipeComponent from './RecipeComponent.js';
import SearchPage from './SearchPage';


function App() {
	return (
		<div className="App">
			<link href="https://fonts.googleapis.com/css2?family=Changa&display=swap" rel="stylesheet"></link>
			<script src="https://apis.google.com/js/platform.js" async defer></script>
			<meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com"></meta>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/profile" element={<ProfilePage />} />
					<Route exact path="/auth" element={<Desktop1 />} />
					<Route exact path="/dish-page/:recipeId" element={<RecipeComponent />} />
					<Route exact path="/search-page" element={<SearchPage />} />
					<Route exact path="/acc" element={<CreateAcc />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
