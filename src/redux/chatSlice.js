import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
  name: "userChat",
  initialState: { chatId: null },
  reducers: {
    change: (state, action) => {
      state.chatId = action.payload;
    },
  },
});
export const { change } = chatSlice.actions;
export default chatSlice.reducer;
