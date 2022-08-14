import { User } from "../../types/user.types";
import userAvailablePeriods from "../../data/availablePeriod.json";
import { AvailabilityPeriod } from "../../types/availability.types";
import fs from "fs";

const AVAILABLE_PERIODS_PATH = "data/availablePeriod.json";
export const availablePeriodsRepo = {
  findById: (id: User["id"]) =>
    userAvailablePeriods.find((period) => period.id === id),
  createPeriod,
};

// to create a period we must make sure a user with a valid ID
//is creating a new period
function createPeriod(id: User["id"], period: AvailabilityPeriod) {
  const userPeriods = availablePeriodsRepo.findById(id);
  //TODO: use date fns function to check if ranges overlap for error handling;
  userPeriods?.availablePeriods.push(period);

  saveAvailablePeriods();
  const data = availablePeriodsRepo.findById(id);

  return data;
}

function saveAvailablePeriods() {
  fs.writeFileSync(
    AVAILABLE_PERIODS_PATH,
    JSON.stringify(userAvailablePeriods, null, 4)
  );
}
