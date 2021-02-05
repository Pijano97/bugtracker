import React from "react";
import DropDownItem from "./DropDownItem";
import "./DropDownList.css";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import { useHistory } from "react-router-dom";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { opens, selectOpen } from "./features/openSlice";

function DropDownList() {
	const user = useSelector(selectUser);
	const open = useSelector(selectOpen);
	const dispatch = useDispatch();
	const history = useHistory();

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(logout());
			dispatch(opens(open));
			history.push("/");
		});
	};

	return (
		<div className="dropdownlist">
			<div className="dropdownlist__item">
				<DropDownItem Icon={SettingsOutlinedIcon} title="settings" />
			</div>
			<div className="dropdownlist__item">
				<DropDownItem Icon={PermIdentityOutlinedIcon} title="profile" />
			</div>
			<div className="dropdownlist__item">
				<DropDownItem Icon={EmailOutlinedIcon} title="my messages" />
			</div>
			<div onClick={signOut} className="dropdownlist__item">
				<DropDownItem Icon={ExitToAppOutlinedIcon} title="logout" />
			</div>
			<div className="dropdownlist__item">
				<DropDownItem Icon={ExitToAppOutlinedIcon} title="logout" />
			</div>
		</div>
	);
}

export default DropDownList;
