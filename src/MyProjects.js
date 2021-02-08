import React from "react";
import { useHistory } from "react-router-dom";
import "./MyProjects.css";

function MyProjects() {
	const history = useHistory();

	const createProject = () => {
		history.push("/createProject");
	};

	return (
		<div className="myprojects">
			<div className="myprojects__container">
				<button className="myprojects__button" onClick={createProject}>
					CREATE NEW PROJECT
				</button>
				<div className="myprojects__header">
					{/* <h3>Your Projects</h3> */}
					<p>All the Projects you have in database</p>
				</div>
				<input className="myprojects__search" placeholder="Search" />
				<div className="myprojects__label">
					<p className="myprojects__name">Name</p>
					<p className="myprojects__desc">Description</p>
					<p className="myprojects__settings">settings</p>
				</div>
			</div>
		</div>
	);
}

export default MyProjects;
