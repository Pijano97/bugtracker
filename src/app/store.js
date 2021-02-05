import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import openReducer from "../features/openSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		open: openReducer,
	},
});
