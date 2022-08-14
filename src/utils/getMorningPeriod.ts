import { getMockHours } from "./getMockHours";

const mockHours = getMockHours();
export const getMorningPeriod = (selectedTime: string) => {
  const morningHours = mockHours.slice(0, 3);
  if (morningHours.includes(selectedTime)) {
    return true;
  }
  return false;
};
