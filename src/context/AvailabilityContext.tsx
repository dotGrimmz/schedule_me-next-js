import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { periodService } from "../../service/period.service";
import { UserAvailablePeriods } from "../../types/user.types";
import { Maybe, SetState } from "../../types/utility.types";

export const AvailabilityContext = createContext<
  AvailabilityContext | undefined
>(undefined);

type AvailabilityContext = {
  userAvailabilityPeriods: UserPeriods;
  setUserAvailabilityPeriods: SetState<UserPeriods>;
};

type UserPeriods = Maybe<UserAvailablePeriods>;
export const AvailabilityContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { auth } = useAuthContext();

  const [userAvailabilityPeriods, setUserAvailabilityPeriods] = useState<
    Maybe<UserAvailablePeriods>
  >(undefined);

  useEffect(() => {
    const getUserAvailability = async () => {
      if (!auth?.id) {
        return;
      }
      await periodService
        .getUserAvailability(auth.id)
        .then(setUserAvailabilityPeriods);
    };
    getUserAvailability();
  }, [auth]);

  const context = useMemo(
    () => ({
      userAvailabilityPeriods,
      setUserAvailabilityPeriods,
    }),
    [userAvailabilityPeriods]
  );

  return (
    <AvailabilityContext.Provider value={context}>
      {children}
    </AvailabilityContext.Provider>
  );
};
