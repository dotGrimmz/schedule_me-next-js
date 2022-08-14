import { useAuthContext } from "../../context/useAuthContext";
import { useState } from "react";
import { useAvailabilityContext } from "../../context/useAvailabilityContext";

export const useLayout = () => {
  const { loggedIn, auth } = useAuthContext();
  const { userAvailabilityPeriods } = useAvailabilityContext();

  const [showUserAvailability, setShowUserAvailability] = useState(false);
  const toggleAvailabilityDisplay = () => {
    setShowUserAvailability((prev) => !prev);
  };

  const logAvailabilityPeriods = () =>
    console.log(JSON.stringify(userAvailabilityPeriods));

  return {
    loggedIn,
    auth,
    toggleAvailabilityDisplay,
    userAvailabilityPeriods,
    showUserAvailability,
    logAvailabilityPeriods,
  };
};
