import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { rideDetailsUrl, commentSubmissionUrl, client } from "../api";

const initialState = {
  rideDetails: {},
  status: "idle",
  error: null,
};

export const fetchRideDetails = createAsyncThunk(
  "rideDetails/fetchRideDetails",
  async (id) => await client.get(rideDetailsUrl(id))
);

export const postComment = createAsyncThunk(
  "rideDetails/postComment",
  async ({ rating, comment }) =>
    await client.post(commentSubmissionUrl, { rating, comment })
);

const { reducer } = createSlice({
  name: "rideDetails",
  initialState,
  reducers: {},
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

export const selectRideDetails = (state) => state.details;

export { reducer as rideDetailsReducer };
