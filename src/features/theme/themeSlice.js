import { createSlice } from "@reduxjs/toolkit";

const initialStatecolor = {
  color: "",
};

export const counterSlice = createSlice({
  name: "themeColor",
  initialState: initialStatecolor,
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { changeColor } = counterSlice.actions;

export default counterSlice.reducer;
