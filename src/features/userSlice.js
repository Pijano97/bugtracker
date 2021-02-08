import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		id: null,
	},
	reducers: {
		selectProject: (state, action) => {
			state.selectId = action.payload;
		},
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

export const { login, logout, selectProject } = userSlice.actions;

// user slice -> user obj
export const selectUser = (state) => state.user.user;
export const selectId = (state) => state.user.user;

export default userSlice.reducer;
