import { configureStore } from "@reduxjs/toolkit";
import { historyListReducer } from "./historyList";

export const store = configureStore({
  reducer: {
    history: historyListReducer,
  },
});
