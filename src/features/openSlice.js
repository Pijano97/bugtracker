import { createSlice } from "@reduxjs/toolkit";

export const openSlice = createSlice({
	name: "open",
	initialState: {
		open: false,
	},
	reducers: {
		opens: (state) => {
			state.open = !state.open;
		},
	},
});

export const { opens } = openSlice.actions;

export const selectOpen = (state) => state.open.open;

export default openSlice.reducer;
