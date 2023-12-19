import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./redux/modalSlice";
import chatSlice from "./redux/chatSlice";
import userSlice from "./redux/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    sidebarModal: modalSlice,
    chat: chatSlice,
  },
});
