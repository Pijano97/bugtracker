import React from "react";
import "./DropDownItem.css";

function DropDownItem({ Icon, title }) {
	return (
		<div className="dropdownitem">
			<Icon className="dropdownitem__icon" />
			<p className="dropdownitem__title">{title}</p>
		</div>
	);
}

export default DropDownItem;
