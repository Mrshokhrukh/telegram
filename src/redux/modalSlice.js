import { createSlice } from "@reduxjs/toolkit";
const modalSlice = createSlice({
  name: "sidebarModal",
  initialState: { isOpen: false },
  reducers: {
    openMod: (state) => {
      state.isOpen = true;
    },
    closeMod: (state) => {
      state.isOpen = false;
    },
  },
});
export const { openMod, closeMod } = modalSlice.actions;
export default modalSlice.reducer;
