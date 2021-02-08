import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";
import "./MyProjects.css";
import ProjectRow from "./ProjectRow";

function MyProjects() {
	const history = useHistory();
	const [projects, setProjects] = useState([]);

	const createProject = () => {
		history.push("/createProject");
	};

	useEffect(() => {
		db.collection("projects") // uzimi emails kolekciju
			.orderBy("timestamp", "asc") // rapsoredi ih po timestampu
			.onSnapshot((
				snapshot // uzmi snapshot trenutni
			) =>
				setProjects(
					// stavi mail da bude ovo
					snapshot.docs.map((doc) => ({
						id: doc.id, // id = doc.id nDqpnWjBpy....
						data: doc.data(), // ovo je email, firstname...
					}))
				)
			);
	}, []);

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
				{projects.map(
					({ id, data: { projectDesc, projectName, timestamp } }) => (
						<ProjectRow
							value={id}
							id={id}
							projectDesc={projectDesc}
							projectName={projectName}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default MyProjects;
