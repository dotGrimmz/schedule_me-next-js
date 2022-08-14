import { CreateAvailabilityPeriod } from "../types/availability.types";

const requestOpts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
};

export const periodService = {
  handleResponse: (res: any) => {
    return res.text().then((text: string) => {
      console.log({ text });
      const data = JSON.parse(text);
      return data;
    });
  },

  create: (period: CreateAvailabilityPeriod) => {
    const opts = {
      ...requestOpts,
      body: JSON.stringify(period),
    };
    const res = fetch(
      "http://localhost:3000/api/availablePeriods/createAvailablePeriod",
      opts
    ).then(periodService.handleResponse);
    return res;
  },
};
