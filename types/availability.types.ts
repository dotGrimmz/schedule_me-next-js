import { User } from "./user.types";
import { Maybe } from "./utility.types";

export type Availability = {
  start: string;
  end: string;
};

export type AvailabilityPeriod = Availability & {
  date: string;
  day: string;
};

export type CreateAvailabilityPeriod = {
  id: Maybe<User["id"]>;
  availablePeriod: AvailabilityPeriod;
};
