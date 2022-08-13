import React from "react";
import {
  LoginContainer,
  CredentialsContainer,
  CustomLoginBtn,
  ScheduleImgContainer,
  ScheduleImageComponent,
} from "./Login.styles";
import ScheduleImage from "../../assets/schedule.jpg";
import { useLogin } from "./hooks/useLogin";
import LoginPanel from "./loginPanel/LoginPanel";

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
      Schedule Me
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
            <CustomLoginBtn onClick={onLoginClick}>Login</CustomLoginBtn>
            <CustomLoginBtn onClick={onSignUpClick}>Sign Up</CustomLoginBtn>
          </>
        )}
        {showSignUp && (
          <>
            <CustomLoginBtn onClick={onReturn}>Return</CustomLoginBtn>
            <CustomLoginBtn onClick={submitRegistration}>
              Register
            </CustomLoginBtn>
          </>
        )}
        {showLogin && (
          <>
            <CustomLoginBtn onClick={onReturn}>Return</CustomLoginBtn>
            <CustomLoginBtn onClick={handleAuthenticate}>Login</CustomLoginBtn>
          </>
        )}
      </CredentialsContainer>
    </LoginContainer>
  );
};

export default Login;
