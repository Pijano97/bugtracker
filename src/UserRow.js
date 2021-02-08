import React from "react";
import "./UserRow.css";

function UserRow({ email, firstName, lastName, role, time }) {
	return (
		<div className="userrow">
			<div className="userrow__name">
				<p>{`${firstName} ${lastName}`}</p>
			</div>
			<div className="userrow__email">
				<p>{email}</p>
			</div>
			<div className="userrow__role">
				<p>{role}</p>
			</div>
		</div>
	);
}

export default UserRow;
