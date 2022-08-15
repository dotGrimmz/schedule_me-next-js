import React from "react";
import {
  LoginContainer,
  CredentialsContainer,
  ScheduleImgContainer,
  ScheduleImageComponent,
} from "./Login.styles";
import ScheduleImage from "../../assets/schedule.jpg";
import { useLogin } from "./hooks/useLogin";
import LoginPanel from "./loginPanel/LoginPanel";
import { StyledButton } from "../../../styles/global.styles";
import CustomTitle from "../../components/title/CustomTitle";

const Login = () => {
  const {
    credentials,
    handleCredentialValueChange,
    onLoginClick,
    onSignUpClick,
    showDefault,
    showLogin,
    showSignUp,
    submitRegistration,
    handleAuthenticate,
    onReturn,
  } = useLogin();
  return (
    <LoginContainer>
      <CustomTitle login />
      {showDefault && (
        <ScheduleImgContainer>
          <ScheduleImageComponent
            src={ScheduleImage}
            height={300}
            width={300}
            alt="image of random schedule"
          />
        </ScheduleImgContainer>
      )}
      {(showLogin || showSignUp) && (
        <LoginPanel
          userName={credentials.userName}
          password={credentials.password}
          handleCredentialValueChange={handleCredentialValueChange}
        />
      )}
      <CredentialsContainer>
        {showDefault && (
          <>
            <StyledButton onClick={onLoginClick}>Login</StyledButton>
            <StyledButton onClick={onSignUpClick}>Sign Up</StyledButton>
          </>
        )}
        {showSignUp && (
          <>
            <StyledButton onClick={onReturn}>Return</StyledButton>
            <StyledButton onClick={submitRegistration}>Register</StyledButton>
          </>
        )}
        {showLogin && (
          <>
            <StyledButton onClick={onReturn}>Return</StyledButton>
            <StyledButton onClick={handleAuthenticate}>Login</StyledButton>
          </>
        )}
      </CredentialsContainer>
    </LoginContainer>
  );
};

export default Login;
