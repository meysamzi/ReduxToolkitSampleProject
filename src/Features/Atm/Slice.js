import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodoDataThunk } from "./Thunk";

const initialState = {
  isGetDataLoading: true,
  todoData: [],
};

export const getTodoData = createAsyncThunk(
  "todo/getTodoData",
  getTodoDataThunk
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
  },
});

export default todoSlice.reducer;
