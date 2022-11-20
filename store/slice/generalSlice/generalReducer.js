import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const generalReducer = createSlice({
  name: "general",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoading, stopLoading } = generalReducer.actions;
export default generalReducer.reducer;
