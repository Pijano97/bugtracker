import React from "react";
import "./AddRole.css";

function AddRole() {
	return (
		<div className="addrole">
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
		</div>
	);
}

export default AddRole;
