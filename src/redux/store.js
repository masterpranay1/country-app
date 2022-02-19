import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import themeReducer from "./theme/theme.reducer";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware : [logger]
});
