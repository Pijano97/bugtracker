import React from "react";
import "./SidebarRow.css";

function SidebarRow({ title, Icon }) {
	// const Icon = icon;

	return (
		<div className="sidebarRow">
			<Icon className="sidebarRow__icon" />
			<p>{title}</p>
		</div>
	);
}

export default SidebarRow;
