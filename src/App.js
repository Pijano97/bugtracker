import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<div className="app__page">
					<Sidebar />
					<Main />
				</div>
				<Switch></Switch>
			</div>
		</Router>
	);
}

export default App;
