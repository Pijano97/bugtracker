import React, { useState } from "react";
import "./Sidebar.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SidebarRow from "./SidebarRow";

function Sidebar() {
	const [selected, setSelected] = useState("dashboard");

	return (
		<div className="sidebar">
			<p>Navigation</p>
			<div className="sidebar__nav">
				<div
					onClick={() => setSelected("dashboard")}
					className={selected === "dashboard" ? "sidebar__selected" : ""}
				>
					<SidebarRow title="dashboard" Icon={HomeOutlinedIcon} />
				</div>
				<div
					onClick={() => setSelected("home")}
					className={selected === "home" ? "sidebar__selected" : ""}
				>
					<SidebarRow title="dashboard" Icon={HomeOutlinedIcon} />
				</div>
				<div className="test">
					<SidebarRow title="dashboard" Icon={HomeOutlinedIcon} />
				</div>
				<div className="">
					<SidebarRow title="dashboard" Icon={HomeOutlinedIcon} />
				</div>
				<div className="">
					<SidebarRow title="dashboard" Icon={HomeOutlinedIcon} />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
