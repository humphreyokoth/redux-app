import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  isAuthenticated: !!user,
  user: user ? user : null,
  isLoading: false,
  errorMessage: "",
};

const authLogin = async (userData) => {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const resData = await res.json();
  if (!resData.access_token) {
    throw new Error(resData.message);
  }
  localStorage.setItem("user", JSON.stringify(resData.user));
  localStorage.setItem("access_token", resData.access_token);
  localStorage.setItem("refresh_token", resData.refresh_token);
  return resData;
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = true;
      state.isAuthenticated=true;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state,action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    });
  },
});

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await authLogin(userData);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const {reset} = authSlice.actions;
export const authSelector =(state) =>state.auth;

export default authSlice.reducer;