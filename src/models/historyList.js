import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash-es";
import { ridesHistoryUrl, client } from "../api";

const initialState = {
  historyList: [],
  page: 1,
  status: "idle",
  error: null,
  hasMoreItems: true,
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
      state.hasMoreItems = !isEmpty(action.payload);
    },
    [fetchHistoryList.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const selectHistory = (state) => state.history;

export { reducer as historyListReducer };
