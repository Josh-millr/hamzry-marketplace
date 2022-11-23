import { createSlice } from "@reduxjs/toolkit";

import * as action from "@store/slice/generalSlice/generalAction";
import * as thunk from "@store/slice/generalSlice/generalThunk";

const initialState = {
  loading: false,
  isModalOpen: false,
  isLocationSearchOpen: false,
  countryList: [],
  countryListStatus: "idle", // Supported -  'idle' | 'loading' | 'succeeded' | 'failed'
};

export const generalReducer = createSlice({
  name: "general",
  initialState,
  reducers: {
    // Handle loading state
    startLoading: action.startLoading,
    stopLoading: action.stopLoading,

    // Handle openModal State
    openModal: action.openModal,
    closeModal: action.closeModal,

    // Handle openLocationSearch State
    openLocationSearch: action.openLocationSearch,
    closeLocationSearch: action.closeLocationSearch,
  },

  // For handling all Thunk Dispatch
  // The builder object provides methods that let us define additional case
  // reducers that will run in response to actions defined outside of the slice.
  extraReducers(builder) {
    builder.addCase(thunk.getCountryList.pending, (state) => {
      state.countryListStatus = "loading";
    });

    builder.addCase(thunk.getCountryList.fulfilled, (state, action) => {
      state.countryList = action.payload;
      console.log("Successfully fetched and stored country lists...")
      state.countryListStatus = "succeeded";
    });

    builder.addCase(thunk.getCountryList.rejected, (state) => {
      state.countryListStatus = "failed";
    });
  },
});

export const actions = generalReducer.actions;
export default generalReducer.reducer;
