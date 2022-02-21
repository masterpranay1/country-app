import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";

import themeReducer from "./theme/theme.reducer";
import searchReducer from "./search/search.reducer";
import countryReducer from "./country/country.reducer";

export default configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
    country: countryReducer,
  },
  // middleware: [logger],
});
