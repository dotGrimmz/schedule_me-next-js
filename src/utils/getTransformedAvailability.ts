import {
  Availability,
  AvailabilityPeriod,
} from "../../types/availability.types";
import format from "date-fns/format";

export const getTransformedAvailability = ({
  selectedDay,
  availability,
}: {
  selectedDay: Date;
  availability: Availability;
}): AvailabilityPeriod => {
  const day = format(selectedDay, "iiii");
  const formattedDate = format(selectedDay, "MM/dd/yyyy");

  const availablePeriod = {
    day: day,
    date: formattedDate,
    start: availability.start,
    end: availability.end,
  };

  return availablePeriod;
};
