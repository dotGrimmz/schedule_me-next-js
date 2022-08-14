import { CreateAvailabilityPeriod } from "../types/availability.types";
import { UserAvailablePeriods } from "../types/user.types";
import { handleResponse } from "../helpers/utils/handleResponse";

const requestOpts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export const periodService = {
  create: (period: CreateAvailabilityPeriod): Promise<UserAvailablePeriods> => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(period),
    };
    const res = fetch(
      "http://localhost:3000/api/availablePeriods/createAvailablePeriod",
      opts
    ).then(handleResponse);
    return res;
  },
};
