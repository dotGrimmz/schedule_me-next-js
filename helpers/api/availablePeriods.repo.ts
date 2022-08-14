import { User, UserAvailablePeriods } from "../../types/user.types";
import userAvailablePeriods from "../../data/availablePeriod.json";
import { AvailabilityPeriod } from "../../types/availability.types";
import fs from "fs";
import { Maybe } from "../../types/utility.types";

const AVAILABLE_PERIODS_PATH = "data/availablePeriod.json";
export const availablePeriodsRepo = {
  findById: (id: User["id"]) =>
    userAvailablePeriods.find((period) => period.id === id),
  createPeriod,
  getAllPeriods: () => userAvailablePeriods,
};

function createPeriod(
  id: User["id"],
  period: AvailabilityPeriod
): Maybe<UserAvailablePeriods> {
  const userPeriods = availablePeriodsRepo.findById(id);
  //TODO: use date fns function to check if ranges overlap for error handling;
  if (!userPeriods) {
    return initializePeriod(id, period);
  }
  saveAvailablePeriods();
  return availablePeriodsRepo.findById(id);
}

function saveAvailablePeriods() {
  fs.writeFileSync(
    AVAILABLE_PERIODS_PATH,
    JSON.stringify(userAvailablePeriods, null, 4)
  );
}

function initializePeriod(
  id: User["id"],
  period: AvailabilityPeriod
): UserAvailablePeriods {
  const initialPeriod = { id, availablePeriods: [period] };
  userAvailablePeriods.push(initialPeriod);
  saveAvailablePeriods();
  return initialPeriod;
}
