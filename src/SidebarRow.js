import React from "react";
import "./SidebarRow.css";

function SidebarRow({ title }) {
	return (
		<div className="sidebarRow">
			<h2>{title}</h2>
		</div>
	);
}

export default SidebarRow;