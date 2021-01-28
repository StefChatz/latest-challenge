import { configureStore } from "@reduxjs/toolkit";
import { historyListReducer } from "./historyList";

export const store = configureStore({
  reducer: {
    historyList: historyListReducer,
  },
});
