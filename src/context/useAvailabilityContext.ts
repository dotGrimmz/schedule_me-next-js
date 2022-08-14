import { useContext } from "react";

import { AvailabilityContext } from "./AvailabilityContext";

export const useAvailabilityContext = () => {
  const context = useContext(AvailabilityContext);
  if (context === undefined) {
    throw new Error("Must be used within a AvailabilityContextProvider");
  }

  return context;
};
