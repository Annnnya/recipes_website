import './App.css';
import Home from './Home.js';
import ProfilePage from './ProfilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthProvider } from '../auth';


function App() {
	return (
		<div className="App">
			<link href="https://fonts.googleapis.com/css2?family=Changa&display=swap" rel="stylesheet"></link>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/profile" element={<ProfilePage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
