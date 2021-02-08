import React from "react";
import "./ProjectRow.css";
import { selectProject } from "./features/selectSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function ProjectRow({ id, projectDesc, projectName, timestamp }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const projectDetails = () => {
		dispatch(
			selectProject({
				id,
				projectDesc,
				projectName,
			})
		);
		// to track on app.js with /project+${id}?????
		history.push(`/project`);
	};

	return (
		<div className="projectrow">
			<div className="projectrow__name">
				<p>{projectName}</p>
			</div>
			<div className="projectrow__desc">
				<p>{projectDesc}</p>
			</div>
			<div className="projectrow__time">
				<a>Manage Users</a>
				<a onClick={projectDetails}>Details</a>
			</div>
		</div>
	);
}

export default ProjectRow;
