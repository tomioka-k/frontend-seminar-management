import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { isConstructorDeclaration } from "typescript";
import { RootState } from "../../app/store";
import { LOGIN_USER, CREDENTIAL, JWT_TOKEN, AUTH_STATE } from "../typs";

export const fetchAsyncLogin = createAsyncThunk(
  "auth/login",
  async (auth: CREDENTIAL) => {
    const res = await axios.post<JWT_TOKEN>(
      `http://localhost:8000/authen/jwt/create`,
      auth,
      {
        headers: {
          "Content-Type": "Application/json",
        },
      }
    );
    console.log(res.data);
    return res.data;
  }
);

const initialState: AUTH_STATE = {
  isLogin: false,
  loginUser: {
    email: "",
    first_name: "",
    last_name: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin(state) {
      state.isLogin = true;
    },
    resetLogin(state) {
      state.isLogin = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAsyncLogin.fulfilled,
      (state, action: PayloadAction<JWT_TOKEN>) => {
        localStorage.setItem("localJWT", action.payload.access);
        action.payload.access && (window.location.href = "/seminar");
      }
    );
  },
});

export const { setLogin, resetLogin } = authSlice.actions;

export const selectIsLogin = (state: RootState) => state.auth.isLogin;
export const selectLoginUser = (state: RootState) => state.auth.loginUser;

export default authSlice.reducer;
