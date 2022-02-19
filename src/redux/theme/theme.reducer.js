import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  hidden: 0,
};
console.log();
export const themeSlice = createSlice({
  name: 'theme',
  initialState : INITIAL_STATE,
  reducers: {
    toggleTheme: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
