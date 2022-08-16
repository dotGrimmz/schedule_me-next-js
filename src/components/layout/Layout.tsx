import React, { FC } from "react";
import {
  LayoutContainer,
  LogOutButton,
  OptionsContainer,
} from "./Layout.styles";
import Login from "../../views/login/Login";
import Profile from "../../components/profile/Profile";
import Schedule from "../../views/schedule/Schedule";
import { useLayout } from "./useLayout";
import AvailabilityPanel from "../availabilityPanel/AvailabilityPanel";
import CustomTitle from "../title/CustomTitle";

export const Layout: FC = () => {
  const {
    loggedIn,
    auth,
    toggleAvailabilityDisplay,
    showUserAvailability,
    userAvailabilityPeriods,
    logAvailabilityPeriods,
    logOutUser,
  } = useLayout();

  if (!loggedIn) {
    return (
      <LayoutContainer>
        <Login />
      </LayoutContainer>
    );
  }

  return (
    <LayoutContainer>
      <OptionsContainer>
        <Profile
          credentials={auth}
          toggleAvailability={toggleAvailabilityDisplay}
        />
        <LogOutButton onClick={logOutUser}>Log Out </LogOutButton>
      </OptionsContainer>

      {showUserAvailability && userAvailabilityPeriods && (
        <AvailabilityPanel
          periods={userAvailabilityPeriods?.availablePeriods}
          printToConsole={logAvailabilityPeriods}
        />
      )}
      <CustomTitle />
      <Schedule />
    </LayoutContainer>
  );
};
