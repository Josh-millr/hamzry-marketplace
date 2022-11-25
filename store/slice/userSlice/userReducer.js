import { createSlice } from "@reduxjs/toolkit";
import * as action from "@store/slice/userSlice/userAction";

const initialState = {
  userLocation: {},
  userEmail: "someoneemail@gmailcom"
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Handles storing of users location
    setCountry: action.setCountry,
    setEmail: action.setEmail
  },
});

export const actions = userReducer.actions;
export default userReducer.reducer;
