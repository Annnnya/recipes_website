import './App.css';
import Home from './components/Home.js';
import ProfilePage from './components/ProfilePage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RecipeComponent from './components/RecipeComponent.js';
import SearchPage from './components/SearchPage';
import SignUpPage from "./components/SignUpPage";
import SignInPage from "./components/SignInPage";


function App() {
    return (
        <div className="App">
            <link href="https://fonts.googleapis.com/css2?family=Changa&display=swap" rel="stylesheet"></link>
            <script src="https://apis.google.com/js/platform.js" async defer></script>
            <meta name="google-signin-client_id"
                  content="988358529452-28melk7o68t67m9bq28i0ots19hm9d6g.apps.googleusercontent.com.apps.googleusercontent.com"></meta>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/profile" element={<ProfilePage/>}/>
                    <Route exact path="/signup" element={<SignUpPage/>}/>
                    <Route exact path="/signin" element={<SignInPage/>}/>
                    <Route exact path="/dish-page/:recipeId" element={<RecipeComponent/>}/>
                    <Route exact path="/search-page" element={<SearchPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
