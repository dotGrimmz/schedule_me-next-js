import React, { FC } from "react";
import { LayoutContainer } from "./Layout.styles";
import Login from "../../views/login/Login";
import Profile from "../../components/profile/Profile";
import { useAuthContext } from "../../context/useAuthContext";
import Schedule from "../../views/schedule/Schedule";

export const Layout: FC = () => {
  const { loggedIn, auth } = useAuthContext();

  if (!loggedIn) {
    return (
      <LayoutContainer>
        <Login />
      </LayoutContainer>
    );
  }

  return (
    <LayoutContainer>
      <Profile credentials={auth} />
      <Schedule />
    </LayoutContainer>
  );
};
