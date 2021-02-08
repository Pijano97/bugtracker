import React from "react";
import "./MyProjects.css";

function MyProjects() {
	return (
		<div className="myprojects">
			<div className="myprojects__container">
				<button className="myproject__button">CREATE NEW PROJECT</button>
				<div className="userslist__header">
					<p>All the users in database</p>
				</div>
			</div>
		</div>
	);
}

export default MyProjects;
