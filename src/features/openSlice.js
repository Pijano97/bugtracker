import { createSlice } from "@reduxjs/toolkit";

export const openSlice = createSlice({
	name: "open",
	initialState: {
		open: false,
		selectedProject: null,
	},
	reducers: {
		opens: (state) => {
			state.open = !state.open;
		},
		openProject: (state, action) => {
			state.selectedProject = action.payload;
		},
	},
});

export const { opens } = openSlice.actions;

export const selectOpen = (state) => state.open.open;
export const selectProject = (state) => state.selectedProject.open;

export default openSlice.reducer;
