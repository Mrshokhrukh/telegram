import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = `https://chat-app-api.devmasters.uz/api/`;

const initialState = {
  users: [],
  status: "idle",
  error: null,
  isLoading: false,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const resp = await axios.get(`${apiUrl}user/`);
    return resp.data;
  } catch (err) {
    throw err;
  }
});
export const fetchuserData = createAsyncThunk(
  "user/fetchuserData",
  async ({ token }) => {
    try {
      const resp = await axios.get(`${apiUrl}user/about/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return resp.data;
    } catch (err) {
      throw err;
    }
  }
);
export const activateEmail = createAsyncThunk(
  "user/activateEmail",
  async ({ email }) => {
    try {
      const resp = await axios.post(`${apiUrl}user/activate/send-link`, email);
      return resp.data;
    } catch (err) {
      throw err;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
  },
});
// export const {} = userSlice.actions;
export default userSlice.reducer;
