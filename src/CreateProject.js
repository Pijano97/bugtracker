import React, { useEffect, useState } from "react";
import "./CreateProject.css";
import { db } from "./firebase";
import firebase from "firebase";
import UserRow from "./UserRow";
import { useHistory } from "react-router-dom";

function CreateProject() {
	const [projectName, setProjectName] = useState("");
	const [projectDesc, setProjectDesc] = useState("");
	const [userAssigned, setUserAssigned] = useState("");
	const [users, setUsers] = useState([]);
	const [id, setId] = useState("");
	const [role, setRole] = useState("");
	const history = useHistory();

	const handleChange = (e) => {
		setRole(e.target.value);
	};

	const handleChangeUsers = (e) => {
		setId(e.target.value);
	};

	const makeProject = (e) => {
		db.collection("projects").add({
			projectName: projectName,
			projectDesc: projectDesc,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		db.collection("users").doc(id).update({
			projects: projectName,
		});

		history.push("/myProjects");
	};

	useEffect(() => {
		db.collection("users") // uzimi emails kolekciju
			.orderBy("firstName", "desc") // rapsoredi ih po timestampu
			.onSnapshot((
				snapshot // uzmi snapshot trenutni
			) =>
				setUsers(
					// stavi mail da bude ovo
					snapshot.docs.map((doc) => ({
						// id: doc.id, // id = doc.id nDqpnWjBpy....
						data: doc.data(), // ovo je email, firstname...
					}))
				)
			);
	}, []);

	return (
		<div className="createproject">
			<div className="createproject__container">
				<div className="createproject__details">
					<div className="createproject__header">
						{/* <h3>Your Projects</h3> */}
						<p>All the Projects you have in database</p>
						<div className="createproject__link">
							<a>Back to List</a>
							<a>Edit</a>
						</div>
					</div>
					<div className="createproject__label">
						<div className="createproject__name">
							<p>Project Name</p>
							<input
								value={projectName}
								onChange={(e) => setProjectName(e.target.value)}
							/>
						</div>
						<div className="createproject__desc">
							<p>Project Description</p>
							<input
								value={projectDesc}
								onChange={(e) => setProjectDesc(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="createproject__down">
					<div className="createproject__downLeft">
						<div className="createproject__subhead">
							{/* <h3>Your Projects</h3> */}
							<p>Assign Personnal</p>
							<div className="createproject__link">
								<p>Add Users</p>
							</div>
						</div>
						<div className="createproject__usersAssign">
							<div className="createproject__users">
								<p>Select 1 or more Users</p>
								<select onChange={handleChangeUsers}>
									{users.map(
										({
											id,
											data: { email, firstName, lastName, role, timestamp },
										}) => (
											<option value={id}>{`${firstName} ${lastName}`}</option>
										)
									)}
								</select>
							</div>
							<div className="createproject__role">
								<p>Select the Role to assign</p>
								<select value={role} onChange={handleChange}>
									<option value="" disabled selected hidden>
										--Select Role/None --
									</option>
									<option value="N/A">N/A</option>
									<option value="Admin">Admin</option>
									<option value="Developer">Developer</option>
									<option value="Demo_Admin">Demo_Admin</option>
									<option value="Project Manager">Project Manager</option>
								</select>
							</div>
						</div>
						<button className="createproject__addButton"> ADD </button>
					</div>
					<div className="createproject__downRight">
						<div className="createproject__subhead">
							{/* <h3>Your Projects</h3> */}
							<p>Assigned Personnal</p>
							<div className="createproject__link">
								<p>Current Users on this Project</p>
							</div>
							<button onClick={() => makeProject()}> Create Project </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreateProject;
