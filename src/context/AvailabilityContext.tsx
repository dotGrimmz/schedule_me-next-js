import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { periodService } from "../../service/period.service";
import { UserAvailablePeriods } from "../../types/user.types";
import { Maybe, SetState } from "../../types/utility.types";
import { AvailablePeriod } from "../../types/availability.types";

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
      await periodService.getUserAvailability(auth.id).then((res) => {
        setUserAvailabilityPeriods(sortByDay(res));
      });
    };
    getUserAvailability();
  }, [auth]);

  const sortByDay = (res: UserPeriods): UserPeriods => {
    if (!res) return;
    res?.availablePeriods.sort(
      (a: AvailablePeriod, b: AvailablePeriod) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return res;
  };

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
