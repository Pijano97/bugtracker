import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "./features/userSlice";
import { auth, db } from "./firebase";
import firebase from "firebase";

import "./Login.css";

function Login() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then(({ auth }) => {
				dispatch(
					login({
						email,
					})
				);
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();
		db.collection("users").add({
			firstName: firstName,
			lastName: lastName,
			email: email,
			role: "N/A",
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(({ auth }) => {
				dispatch(
					login({
						email,
					})
				);

				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login__container">
				<h1>Sign in</h1>
				<form>
					<div className="login__name">
						{/* <h5>First Name</h5> */}
						<input
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						{/* <h5>Last Name</h5> */}
						<input
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<h5>E-Mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button
						type="submit"
						onClick={signIn}
						className="login__signInButton"
					>
						Sign In
					</button>
				</form>

				<p>By sign-in....</p>
				<button onClick={register} className="login__registerButton">
					Create your Bugtracker Account
				</button>
			</div>
		</div>
	);
}

export default Login;
