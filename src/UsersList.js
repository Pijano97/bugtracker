import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import UserRow from "./UserRow";
import "./UsersList.css";

function UsersList() {
	const [users, setUsers] = useState([]);

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
		<div className="userslist">
			<div className="userslist__header">
				<p>All the users in database</p>
			</div>
			<input className="userslist__search" placeholder="Search" />
			<div className="userslist__label">
				<p className="userslist__name">Name</p>
				<p className="userslist__email">Email</p>
				<p className="userslist__role">Role</p>
			</div>
			{users.map(
				({ data: { email, firstName, lastName, role, timestamp } }) => (
					<UserRow
						email={email}
						firstName={firstName}
						lastName={lastName}
						role={role}
						time="0"
					/>
				)
			)}
		</div>
	);
}

export default UsersList;
