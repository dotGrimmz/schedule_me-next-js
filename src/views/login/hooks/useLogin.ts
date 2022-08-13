import { useState } from "react";

import { userService } from "../../../../service/user.service";
import { useAuthContext } from "../../../context/useAuthContext";

type LoginDisplay = "Login" | "Sign up" | "default";

export const useLogin = () => {
  const { login, auth } = useAuthContext();
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

  const submitRegistration = () => {
    userService.register(credentials);
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
