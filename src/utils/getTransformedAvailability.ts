import { Availability, AvailablePeriod } from "../../types/availability.types";
import format from "date-fns/format";
import { getFormattedHour } from "./getFormattedHour";

export const getTransformedAvailability = ({
  selectedDay,
  availability,
}: {
  selectedDay: Date;
  availability: Availability;
}): AvailablePeriod => {
  const day = format(selectedDay, "iiii");
  const formattedDate = format(selectedDay, "MM/dd/yyyy");

  const availablePeriod = {
    day: day,
    date: selectedDay,
    start: availability.start,
    end: availability.end,
    formattedDateStr: formattedDate,
    duration: getDuration(availability.start, availability.end),
  };

  return availablePeriod;
};

const getDuration = (start: string, end: string) => {
  const duration = [];

  const militaryStart = getFormattedHour(start);
  const militaryEnd = getFormattedHour(end);

  for (let i = militaryStart; i <= militaryEnd; i++) {
    duration.push(String(i));
  }
  return duration;
};
