import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import img from "./img/img.jpg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<p>BUGTRACKER</p>
			</div>
			<div className="header__right">
				<div className="header__search">search icon?</div>
				<div className="header__notification">
					<NotificationsOutlinedIcon className="header__notificationIcon" />
					<ChatBubbleOutlineIcon className="header__chatIcon" />
					<Avatar alt="IMG" src={img} />
					<p>Dimitrije Gadzic</p>
					<ArrowDropDownIcon />
				</div>
			</div>
		</div>
	);
}

export default Header;
