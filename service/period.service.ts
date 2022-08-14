import { CreateAvailabilityPeriod } from "../types/availability.types";
import { User, UserAvailablePeriods } from "../types/user.types";
import { handleResponse } from "../helpers/utils/handleResponse";

const requestOpts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export const periodService = {
  create: async (
    period: CreateAvailabilityPeriod
  ): Promise<UserAvailablePeriods> => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(period),
    };
    return await fetch(
      "http://localhost:3000/api/availablePeriods/createAvailablePeriod",
      opts
    ).then(handleResponse);
  },

  getUserAvailability: async (id: User["id"]) => {
    const getOpts = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    return await fetch(
      `http://localhost:3000/api/availablePeriods/getAvailablePeriods?id=${id}`,
      getOpts
    ).then(handleResponse);
  },
};
