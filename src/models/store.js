import { configureStore } from "@reduxjs/toolkit";
import { historyListReducer } from "./historyList";
import { rideDetailsReducer } from "./rideDetails";

export const store = configureStore({
  reducer: {
    history: historyListReducer,
    details: rideDetailsReducer,
  },
});
