export const startLoading = (state) => {
  state.loading = true;
};

export const stopLoading = (state) => {
  state.loading = false;
};

export const openModal = (state) => {
  state.isModalOpen = true;
};

export const closeModal = (state) => {
  state.isModalOpen = false;
};

export const openLocationSearch = (state) => {
  state.isLocationSearchOpen = true;
};

export const closeLocationSearch = (state) => {
  state.isLocationSearchOpen = false;
};
