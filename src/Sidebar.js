import React, { useState } from "react";
import "./Sidebar.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PeopleIcon from "@material-ui/icons/People";
import MenuIcon from "@material-ui/icons/Menu";
import BugReportIcon from "@material-ui/icons/BugReport";
import PersonIcon from "@material-ui/icons/Person";
import SidebarRow from "./SidebarRow";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
	const [selected, setSelected] = useState("dashboard");
	const history = useHistory();
	const user = useSelector(selectUser);

	return (
		<div className="sidebar">
			<p>Navigation</p>
			<div className="sidebar__nav">
				<div
					onClick={() => {
						setSelected("dashboard");
						history.push("dashboard");
					}}
					className={selected === "dashboard" ? "sidebar__selected" : ""}
				>
					<SidebarRow title="Dashboard Home" Icon={HomeOutlinedIcon} />
				</div>
				<div
					onClick={() => {
						setSelected("home");
						user
							? history.push("manageRoleAssigment")
							: history.push("/logins");
					}}
					className={selected === "home" ? "sidebar__selected" : ""}
				>
					<SidebarRow title="Manage Role Assigment" Icon={GroupAddIcon} />
				</div>
				<div
					onClick={() => {
						setSelected("mpu");
						user ? history.push("manageProjectUsers") : history.push("/logins");
					}}
					className={selected === "mpu" ? "sidebar__selected" : ""}
				>
					<SidebarRow title="Manage Project Users" Icon={PeopleIcon} />
				</div>
				<div
					onClick={() => {
						setSelected("mp");
						user ? history.push("myProjects") : history.push("/logins");
					}}
					className={selected === "mp" ? "sidebar__selected" : ""}
				>
					<SidebarRow title="My Projcets" Icon={MenuIcon} />
				</div>
				<div
					onClick={() => {
						setSelected("mt");
						user ? history.push("myTickets") : history.push("/logins");
					}}
					className={selected === "mt" ? "sidebar__selected" : ""}
				>
					<SidebarRow title="My Tickets" Icon={BugReportIcon} />
				</div>
				<div
					onClick={() => {
						setSelected("up");
						user ? history.push("userProfile") : history.push("/logins");
					}}
					className={selected === "up" ? "sidebar__selected" : ""}
				>
					<SidebarRow title="User Profile" Icon={PersonIcon} />
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
