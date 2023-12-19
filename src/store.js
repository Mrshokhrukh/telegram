import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./redux/modalSlice";
import chatSlice from "./redux/chatSlice";

export const store = configureStore({
  reducer: {
    sidebarModal: modalSlice,
    chat: chatSlice,
  },
});
