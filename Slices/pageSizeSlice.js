import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 20,
};

export const counterSlice = createSlice({
  name: "pageSize",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions;

export default counterSlice.reducer;
