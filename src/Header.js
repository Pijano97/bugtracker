import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import img from "./images/img.jpg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function Header() {
	const history = useHistory();
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const handleClick = () => {
		history.push("/logins");
	};

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(logout());
		});
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
					<div className="test" onClick={signOut}>
						<p>{user?.user}</p>
					</div>
					<ArrowDropDownIcon />
				</div>
			</div>
		</div>
	);
}

export default Header;
