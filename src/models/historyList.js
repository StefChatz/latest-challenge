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

export const selectHistoryList = (state) => state.historyList;
export const selectPage = (state) => state.page;
export const selectHistoryListCallStatus = (state) => state.status;

export { reducer as historyListReducer };
