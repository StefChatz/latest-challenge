import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { rideDetailsUrl, commentSubmissionUrl, client } from "../api";

const initialState = {
  rideDetails: {},
  selectedRide: null,
  status: "idle",
  error: null,
};

export const fetchRideDetails = createAsyncThunk(
  "rideDetails/fetchRideDetails",
  async (id) => await client.get(rideDetailsUrl(id))
);

export const postComment = createAsyncThunk(
  "rideDetails/postComment",
  async ({ rating, message }) =>
    await client.post(commentSubmissionUrl, { rating, message })
);

const { reducer, actions } = createSlice({
  name: "rideDetails",
  initialState,
  reducers: {
    selectRide(state, action) {
      state.selectedRide = action.payload;
    },
  },
  extraReducers: {
    [fetchRideDetails.pending]: (state) => {
      state.status = "loading";
    },
    [fetchRideDetails.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.rideDetails = action.payload;
    },
    [fetchRideDetails.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { selectRide } = actions;

export const selectRideDetails = (state) => state.rideDetails;

export { reducer as rideDetailsReducer };
