import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: false,
  isDataLoaded: false,
  data: {},
  bordersName: [],
};

const countrySlice = createSlice({
  name: "country",
  initialState: INITIAL_STATE,
  reducers: {
    dataLoading: (state) => {
      state.isLoading = true;
    },
    dataLoaded: (state, action) => {
      state.isLoading = false;
      state.isDataLoaded = true;
      state.data = action.payload;
    },
    setBorderName: (state, action) => {
      state.bordersName = action.payload;
    },
    reset: (state) => INITIAL_STATE,
  },
});

export const { dataLoading, dataLoaded, reset, setBorderName } =
  countrySlice.actions;
export default countrySlice.reducer;
