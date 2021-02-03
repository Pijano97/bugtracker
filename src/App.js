import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Router path="/dashboard"></Router>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
