import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "@store/slice/generalSlice/generalReducer";

const store = configureStore({
  reducer: {
    general: generalReducer,
  },
});

export default store;
