import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ridesHistoryUrl, client } from "../api";

const initialState = {
  historyList: [],
  page: 1,
  status: "idle",
  error: null,
};

export const fetchHistoryList = createAsyncThunk(
  "historyList/fetchHistoryList",
  async ({ pageNumber, pageItemsLimit }) =>
    await client.get(ridesHistoryUrl(pageNumber, pageItemsLimit))
);

const { reducer } = createSlice({
  name: "historyList",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchHistoryList.pending]: (state) => {
      state.status = "loading";
    },
    [fetchHistoryList.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.historyList = state.historyList.concat(action.payload);
      state.page += 1;
    },
    [fetchHistoryList.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const selectHistory = (state) => state.history;

export { reducer as historyListReducer };
