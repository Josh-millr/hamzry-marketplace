import { createSlice } from "@reduxjs/toolkit";
import * as action from "@store/slice/userSlice/userAction";

const initialState = {
  userLocation: {},
  userEmail: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCountry: action.setCountry,
    setEmail: action.setEmail,
  },
});

export const userActions = userReducer.actions;
export default userReducer.reducer;
