import { User, UserAvailablePeriods } from "../../types/user.types";
import userAvailablePeriods from "../../data/availablePeriod.json";
import {
  AvailabilityPeriod,
  AvailablePeriod,
} from "../../types/availability.types";
import fs from "fs";
import { Maybe } from "../../types/utility.types";

const AVAILABLE_PERIODS_PATH = "data/availablePeriod.json";
export const availablePeriodsRepo = {
  findById: (id: User["id"]) =>
    userAvailablePeriods.find((period) => period.id === id),
  createPeriod,
  getAllAvailability: () => userAvailablePeriods,
};

function createPeriod(
  id: User["id"],
  period: AvailablePeriod
): Maybe<UserAvailablePeriods> {
  const userPeriods = availablePeriodsRepo.findById(id);

  if (!userPeriods) {
    return initializePeriod(id, period);
  }
  userPeriods.availablePeriods.push(period);
  saveAvailablePeriods();
  return availablePeriodsRepo.findById(id);
}

function saveAvailablePeriods(
  data: UserAvailablePeriods[] = userAvailablePeriods
) {
  fs.writeFileSync(AVAILABLE_PERIODS_PATH, JSON.stringify(data, null, 4));
}

function initializePeriod(
  id: User["id"],
  period: AvailablePeriod
): UserAvailablePeriods {
  const initialPeriod = { id, availablePeriods: [period] };
  userAvailablePeriods.push(initialPeriod);
  saveAvailablePeriods();
  return initialPeriod;
}
