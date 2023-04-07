import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./redux/reducer/add.reducer";

export const store = configureStore({
  reducer: {
    add: addReducer,
  },
});
