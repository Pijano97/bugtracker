import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
	name: "select",
	initialState: {
		id: "test",
	},
	reducers: {
		selectProject: (state, action) => {
			state.id = action.payload;
		},
	},
});

export const { selectProject } = selectSlice.actions;
export const selectId = (state) => state.select.id;

export default selectSlice.reducer;
