import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				// user is logged in
				dispatch(
					login({
						user: user.email,
					})
				);
			} else {
				//logout
			}
		});
	}, []);

	return (
		<Router>
			{!user ? (
				<Login />
			) : (
				<div className="app">
					<Switch>
						<Route path="/dashboard">
							<Header />
							<Sidebar />
							<Main />
						</Route>
						<Route path="/logins">
							<Login />
						</Route>
						<Route path="/">
							<Header />
							<Sidebar />
						</Route>
					</Switch>
				</div>
			)}
		</Router>
	);
}

export default App;
