import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  countries: [],
  isLoading: true,
  dataLoaded: false,
  isContinentFilterOn: false,
  continentName: "",
  isSearchFilterOn: false,
  searchText: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: INITIAL_STATE,
  reducers: {
    dataIsLoading: (state) => {
      state.isLoading = true;
    },
    dataLoaded: (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
      state.countriesCopy = action.payload;
      state.dataLoaded = true;
    },
    filterByContinent: (state, action) => {
      state.isContinentFilterOn = true;
      state.continentName = action.payload;
    },
    filterByName: (state, action) => {
      console.log(action.payload);
      if (action.payload === "") {
        state.isSearchFilterOn = false;
        state.searchText = action.payload;
      } else {
        state.isSearchFilterOn = true;
        state.searchText = action.payload;
      }
    },
    reset: (state) => INITIAL_STATE,
  },
});

export const {
  dataIsLoading,
  dataLoaded,
  filterByContinent,
  filterByName,
  reset,
} = searchSlice.actions;
export default searchSlice.reducer;
