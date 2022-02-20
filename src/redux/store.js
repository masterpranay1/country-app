import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import themeReducer from "./theme/theme.reducer";
import searchReducer from "./search/search.reducer";

export default configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
  },
  middleware: [logger],
});
