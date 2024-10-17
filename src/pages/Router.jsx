import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Router() {
	return (
		<BrowserRouter basename="/assignment-karsten-nelle">
			<Routes>
				<Route path="/" element={<Nav />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
