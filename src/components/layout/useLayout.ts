import { useAuthContext } from "../../context/useAuthContext";
import { useState } from "react";
import { useAvailabilityContext } from "../../context/useAvailabilityContext";
import { useSnackbar } from "notistack";
import _ from "lodash";

export const useLayout = () => {
  const { loggedIn, auth, logOutUser } = useAuthContext();
  const { userAvailabilityPeriods } = useAvailabilityContext();
  const { enqueueSnackbar } = useSnackbar();

  const [showUserAvailability, setShowUserAvailability] = useState(false);
  const toggleAvailabilityDisplay = () => {
    if (_.isEmpty(userAvailabilityPeriods)) {
      return enqueueSnackbar("You have no available slots. Schedule one now.", {
        variant: "warning",
      });
    }
    setShowUserAvailability((prev) => !prev);
  };

  const logAvailabilityPeriods = () => {
    console.log(JSON.stringify(userAvailabilityPeriods));
    enqueueSnackbar("Successfully Printed to Console", { variant: "success" });
  };

  return {
    loggedIn,
    auth,
    toggleAvailabilityDisplay,
    userAvailabilityPeriods,
    showUserAvailability,
    logAvailabilityPeriods,
    logOutUser,
  };
};
