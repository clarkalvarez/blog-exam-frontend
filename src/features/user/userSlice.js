import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersAPI } from "./userAPI";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getUsersAPI();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.status = "idle";
      })
      .addMatcher(
        (action) =>
          action.type.endsWith("/pending") || action.type.endsWith("/rejected"),
        (state, action) => {
          state.status = "loading";
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.status = "idle";
        }
      );
  },
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
