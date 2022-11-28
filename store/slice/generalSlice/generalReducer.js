import { createSlice } from "@reduxjs/toolkit";
import * as action from "@store/slice/generalSlice/generalAction";
import * as thunk from "@store/slice/generalSlice/generalThunk";

const initialState = {
  loading: false,
  isModalOpen: false,
  isLocationSearchOpen: false,
  countryList: [],
  countryListStatus: "idle",
};

export const generalReducer = createSlice({
  name: "general",
  initialState,
  reducers: {
    startLoading: action.startLoading,
    stopLoading: action.stopLoading,

    openModal: action.openModal,
    closeModal: action.closeModal,

    openLocationSearch: action.openLocationSearch,
    closeLocationSearch: action.closeLocationSearch,
  },
  extraReducers(builder) {
    builder.addCase(thunk.getCountryList.pending, (state) => {
      state.countryListStatus = "loading";
    });

    builder.addCase(thunk.getCountryList.fulfilled, (state, action) => {
      state.countryList = action.payload;
      state.countryListStatus = "succeeded";
    });

    builder.addCase(thunk.getCountryList.rejected, (state) => {
      state.countryListStatus = "failed";
    });
  },
});

export const generalActions = generalReducer.actions;
export default generalReducer.reducer;
