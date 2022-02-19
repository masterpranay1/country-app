import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./theme/theme.reducer";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
