import { User } from "./user.types";
import { Maybe } from "./utility.types";

export type Availability = {
  start: string;
  end: string;
};

export type AvailabilityPeriod = Availability & {
  date: string | Date;
  day: string;
};

export type AvailablePeriod = AvailabilityPeriod & {
  duration: string[];
  formattedDateStr: string;
};

export type CreateAvailabilityPeriod = {
  id: Maybe<User["id"]>;
  availablePeriod: AvailablePeriod;
};
