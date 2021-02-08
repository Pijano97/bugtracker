import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import openReducer from "../features/openSlice";
import selectReducer from "../features/selectSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		open: openReducer,
		select: selectReducer,
	},
});
