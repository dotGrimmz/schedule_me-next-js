import React, { useState } from "react";

import { userService } from "../../../../service/user.service";
import { useAuthContext } from "../../../context/useAuthContext";
import { useSnackbar } from "notistack";

type LoginDisplay = "Login" | "Sign up" | "default";

export const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { login, auth, loggedIn } = useAuthContext();
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const [display, setDisplay] = useState<LoginDisplay>("default");

  const onLoginClick = () => setDisplay("Login");
  const onSignUpClick = () => setDisplay("Sign up");
  const onReturn = () => setDisplay("default");

  const handleCredentialValueChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setCredentials({ ...credentials, [target.name]: target.value });
  };

  const showDefault = display === "default";
  const showLogin = display === "Login";
  const showSignUp = display === "Sign up";

  const submitRegistration = async () => {
    await userService
      .register(credentials)
      .then((res) => {
        login(res.userName, res.password);
        enqueueSnackbar("User Registered", { variant: "success" });
      })
      .catch((e) => {
        enqueueSnackbar(e, { variant: "error" });
      });
  };

  const handleAuthenticate = () => {
    login(credentials.userName, credentials.password);
  };
  return {
    onLoginClick,
    onSignUpClick,
    credentials,
    handleCredentialValueChange,
    display,
    setDisplay,
    showDefault,
    showLogin,
    submitRegistration,
    showSignUp,
    handleAuthenticate,
    onReturn,
  };
};
