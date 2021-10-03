import React, { useState } from "react";
import {
  selectIsLogin,
  selectLoginUser,
  setLogin,
  fetchAsyncLogin,
} from "./authSlice";
import Button from "@mui/material/Button";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { AppDispatch } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { CREDENTIAL } from "../typs";

const Auth: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);
  const loginUser = useSelector(selectLoginUser);
  const [isLoding, setIsLoding] = useState(false);
  const [credential, setCredential] = useState<CREDENTIAL>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setCredential({ ...credential, [name]: value });
  };

  const login = async () => {
    setIsLoding(true);
    await dispatch(fetchAsyncLogin(credential));
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Typography variant="h2">Login</Typography>
        {isLoding ? <CircularProgress /> : null}

        <TextField
          type="email"
          name="email"
          label="email"
          variant="standard"
          value={credential.email}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <TextField
          type="password"
          name="password"
          label="password"
          variant="standard"
          value={credential.password}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Button variant="contained" onClick={login}>
          Login
        </Button>
      </Container>
    </div>
  );
};

export default Auth;
