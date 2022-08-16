import { useState, useEffect } from "react";
import { getMockHours } from "../../../utils/getMockHours";
import { getEndTimeOptions } from "../../../utils/getEndTimeOptions";
import {
  Availability,
  AvailablePeriod,
} from "../../../../types/availability.types";
import { useSnackbar } from "notistack";
import { useAvailabilityContext } from "../../../context/useAvailabilityContext";
import { getFormattedHour } from "../../../utils/getFormattedHour";
import { format, areIntervalsOverlapping, isSameDay, parseISO } from "date-fns";

export const useModal = (selectedDay: Date) => {
  const { enqueueSnackbar } = useSnackbar();
  const { userAvailabilityPeriods } = useAvailabilityContext();
  const mockHours = getMockHours();
  const [endHours, setEndHours] = useState([""]);

  const [availability, setAvailability] = useState<Availability>({
    start: "9",
    end: "",
  });

  useEffect(() => {
    const endOpts = getEndTimeOptions(mockHours, availability.start);
    setEndHours(endOpts);
    setAvailability({ ...availability, end: endOpts[0] });
  }, [availability.start]);

  // onSubmit lets get the current selected day in state -this is a date obj from useSchedule - CHECK
  // do this for both start and end time - check
  // filter all available periods with the same day and put them into an array
  // transform them into date objects [{each obj provides two dates}]
  // call array.every on the filtered list with the are intervals overlapping method from date fns

  const handleSelectedTime = (e: React.SyntheticEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    if (name === "start" && value === "5") {
      return enqueueSnackbar("Start time must be 4pm or earlier", {
        variant: "warning",
      });
    }
    setAvailability({ ...availability, [name]: value });
  };

  const isRangeError = () => {
    let isError = false;
    if (!userAvailabilityPeriods) return;
    const existingPeriods = userAvailabilityPeriods.availablePeriods.filter(
      (period) => {
        return isSameDay(selectedDay, new Date(period.date));
      }
    );

    const availabilityDurations = [] as AvailablePeriod["duration"][];

    existingPeriods.map((period) => {
      availabilityDurations.push(period.duration);
    });

    const currentDuration = getDuration();
    const startHour = currentDuration[0];
    const endHour = currentDuration[currentDuration.length - 1];

    availabilityDurations.some((durationPeriod) => {
      if (
        durationPeriod
          .slice(0, durationPeriod.length - 1)
          .includes(String(startHour))
      ) {
        isError = true;
        return enqueueSnackbar(
          "Overlapping start times, Please Check your already available time slots",
          { variant: "error" }
        );
      }

      if (
        durationPeriod
          .slice(0, durationPeriod.length - 1)
          .includes(String(endHour))
      ) {
        isError = true;

        return enqueueSnackbar(
          "Overlapping start times, Please Check your already available time slots",
          { variant: "error" }
        );
      }
    });
    return isError;
  };

  const getDuration = () => {
    const duration = [];

    const militaryStart = getFormattedHour(availability.start);
    const militaryEnd = getFormattedHour(availability.end);

    for (let i = militaryStart; i <= militaryEnd; i++) {
      duration.push(i);
    }
    return duration;
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    handleSelectedTime(e);
    isRangeError();
  };
  return {
    endHours,
    mockHours,
    availability,
    handleSelectedTime,
    onSubmit,
    isRangeError,
  };
};
