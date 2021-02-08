import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import "./RoleAssigment.css";
import UsersList from "./UsersList";

function RoleAssigment() {
	const [role, setRole] = useState("");
	const [users, setUsers] = useState([]);
	const [id, setId] = useState("");

	const handleChange = (e) => {
		setRole(e.target.value);
	};

	const handleChangeUsers = (e) => {
		setId(e.target.value);
	};

	const changeRole = () => {
		if (id == "" || role == "") {
			alert("Erorr");
		} else {
			db.collection("users").doc(id).update({
				role: role,
			});
		}
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
						id: doc.id, // id = doc.id nDqpnWjBpy....
						data: doc.data(), // ovo je email, firstname...
					}))
				)
			);
	}, []);

	return (
		<div className="roleassigment">
			<div className="roleassigment__title">
				<h1>Manage User Roles</h1>
			</div>
			<div className="roleassigment__down">
				<div className="roleassigment__left">
					<div className="roleassigment__users">
						<p>Select 1 or more Users</p>
						<select multiple onChange={handleChangeUsers}>
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
					<div className="roleassigment__assign">
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
						<button onClick={changeRole}> SUBMIT </button>
					</div>
				</div>
				<div className="roleassigment__right">
					<UsersList />
				</div>
				{/* Pages */}
			</div>
		</div>
	);
}

export default RoleAssigment;
