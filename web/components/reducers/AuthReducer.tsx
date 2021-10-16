import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  token: string | null;
  email: string | null;
  name: string | null;
};

const initialState: AuthState = {
  token: null,
  email: "",
  name: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => ({
      ...state,
      token: action.payload.token,
      email: action.payload.email,
      name: action.payload.name,
    }),
  },
});

export default authSlice.reducer;
export const { setAuth } = authSlice.actions;
