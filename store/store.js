import { configureStore } from "@reduxjs/toolkit";

// Reducer Slices
import generalReducer from "@store/slice/generalSlice/generalReducer";
import userReducer from "@store/slice/userSlice/userReducer";

const store = configureStore({
  reducer: {
    general: generalReducer,
    user: userReducer,
  },
});

export default store;
