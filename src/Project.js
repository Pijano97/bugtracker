import React, { useEffect, useState } from "react";
import "./Project.css";
import { selectId } from "./features/selectSlice";
import { useSelector } from "react-redux";
import { db } from "./firebase";

function Project() {
	// const id = useSelector(selectOpenProject);
	const id = useSelector(selectId);
	const [project, setProject] = useState([]);

	// useEffect(() => {
	// 	db.collection("projects")
	// 		.doc(id)
	// 		.onSnapshot((
	// 			snapshot // uzmi snapshot trenutni
	// 		) =>
	// 			setProject(
	// 				// stavi mail da bude ovo
	// 				snapshot.docs.map((doc) => ({
	// 					// id: doc.id, // id = doc.id nDqpnWjBpy....
	// 					data: doc.data(), // ovo je email, firstname...
	// 				}))
	// 			)
	// 		);
	// }, []);

	return (
		<div className="project">
			{id.id}
			{id.projectDesc}
		</div>
	);
}

export default Project;
