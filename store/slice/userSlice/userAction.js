
// Handles storing of users location
export const setCountry = (state, action) => {
  state.userLocation = action.payload;
};
