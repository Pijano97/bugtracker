import React, { useState } from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import img from "./images/img.jpg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { opens, selectOpen } from "./features/openSlice";
import DropDownList from "./DropDownList";

function Header() {
	const history = useHistory();
	const user = useSelector(selectUser);
	const open = useSelector(selectOpen);
	const dispatch = useDispatch();

	const handleClick = () => {
		history.push("/logins");
	};

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
					<div className="header__login" onClick={() => handleClick()}>
						<Avatar alt="IMG" src={img} />
					</div>

					{/* <p>{user}</p> */}
					{user ? (
						<p>{user.user}</p>
					) : (
						<p
							className="header__login"
							onClick={() => history.push("/logins")}
						>
							Login
						</p>
					)}

					<ArrowDropDownIcon
						className="header__icon"
						onClick={() => dispatch(opens(open))}
					/>
					{open ? <DropDownList /> : ""}
					{console.log(open)}
					{/* if logged nor */}
				</div>
			</div>
		</div>
	);
}

export default Header;
