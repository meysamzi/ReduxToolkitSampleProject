import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodoDataThunk, changeTitleThunk } from "./Thunk";

const initialState = {
  isGetDataLoading: true,
  todoData: [],
  isUpdateDataLoading: true,
  dataUpdateRes: {},
};

export const getTodoData = createAsyncThunk(
  "todo/getTodoData",
  getTodoDataThunk
);

export const changeTitle = createAsyncThunk(
  "todo/changeTitle",
  changeTitleThunk
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: {
    [getTodoData.pending]: (state) => {
      state.isGetDataLoading = true;
    },
    [getTodoData.fulfilled]: (state, { payload }) => {
      state.isGetDataLoading = false;
      state.todoData = payload;
    },
    [getTodoData.rejected]: (state) => {
      state.isGetDataLoading = false;
    },
    // Update A Resource
    [changeTitle.pending]: (state) => {
      state.isUpdateDataLoading = true;
    },
    [changeTitle.fulfilled]: (state, { payload }) => {
      state.isUpdateDataLoading = false;
      state.dataUpdateRes = payload;
    },
    [changeTitle.rejected]: (state) => {
      state.isUpdateDataLoading = false;
    },
  },
});

export default todoSlice.reducer;
