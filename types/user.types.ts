import { AvailabilityPeriod, AvailablePeriod } from "./availability.types";

export type User = {
  id: string;
  userName: string;
  password: string;
};

export type CreateUser = Omit<User, "id">;

export type UserAvailablePeriods = {
  id: User["id"];
  availablePeriods: AvailablePeriod[];
};
