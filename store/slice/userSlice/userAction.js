export const setCountry = (state, action) => {
  state.userLocation = action.payload;
};

export const setEmail = (state, action) => {
  state.userEmail = action.payload
}