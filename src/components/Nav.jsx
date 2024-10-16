// is used to navigate between routes in a React application without reloading the page. It helps maintain the single-page application (SPA) behavior.
import { Link } from "react-router-dom";
<Link to="/about">About</Link>;

//NavLink extends Link by adding styling functionality for active links. It automatically applies an "active" class to the link when the current URL matches the link’s destination.
import { NavLink } from "react-router-dom";
<NavLink to="/about" activeClassName="active">
	About
</NavLink>;

//Example
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
	return (
		<Router>
			<div>
				{/* Navigation using Link */}
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>

				{/* Define Routes */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;

//How Does This Example Work
// Navigation: The navigation uses Link to navigate the user to different routes (/, /about, /contact) without reloading the page.
// Routing: The Routes component in React Router defines which component should be displayed for each route (Home, About, Contact).
