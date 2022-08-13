import { useState } from "react";

import { userService } from "../../../../service/user.service";
import { CreateUser } from "../../../../types/user.types";

type LoginDisplay = "Login" | "Sign up" | "default";

export const useLogin = () => {
  const [credentials, setCredentials] = useState({
    userName: "",
    password: "",
  });
  const [display, setDisplay] = useState<LoginDisplay>("default");

  const onLoginClick = () => setDisplay("Login");
  const onSignUpClick = () => setDisplay("Sign up");
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
  };
};
