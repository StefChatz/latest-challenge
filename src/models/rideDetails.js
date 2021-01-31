import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { uniqBy } from 'lodash-es';
import { rideDetailsUrl, commentSubmissionUrl, client } from '../api';

const initialState = {
  rideDetailsList: [],
  rating: {},
  status: 'idle',
  error: null,
};

export const fetchRideDetails = createAsyncThunk(
  'rideDetails/fetchRideDetails',
  async ({ id }) => await client.get(rideDetailsUrl(id)),
);

export const postComment = createAsyncThunk(
  'rideDetails/postComment',
  async ({ rating, comment }) => await client.post(commentSubmissionUrl, { rating, comment }),
);

const { reducer, actions } = createSlice({
  name: 'rideDetails',
  initialState,
  reducers: {
    resetRating(state) {
      state.rating = {};
    },
  },
  extraReducers: {
    [fetchRideDetails.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchRideDetails.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.rideDetailsList = uniqBy(
        [action.payload, ...state.rideDetailsList],
        'id',
      );
    },
    [fetchRideDetails.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [postComment.pending]: (state) => {
      state.status = 'loading';
    },
    [postComment.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.rating = action.payload;
    },
    [postComment.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { resetRating } = actions;
export const selectRideDetails = (state) => state.details;

export { reducer as rideDetailsReducer };
