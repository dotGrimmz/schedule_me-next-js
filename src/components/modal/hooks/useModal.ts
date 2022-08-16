import { useState, useEffect } from "react";
import { getMockHours } from "../../../utils/getMockHours";
import { getEndTimeOptions } from "../../../utils/getEndTimeOptions";
import {
  Availability,
  AvailabilityPeriod,
} from "../../../../types/availability.types";
import { useSnackbar } from "notistack";
import { useAvailabilityContext } from "../../../context/useAvailabilityContext";
import { getFormattedHour } from "../../../utils/getFormattedHour";
import { format, areIntervalsOverlapping } from "date-fns";

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

  //TODO: update Create Avail type to new props from notes
  // on Create => compute duration with mapped start times
  const isRangeError = () => {
    // return if user has no periods - continue to create new period
    if (!userAvailabilityPeriods) return;
    //get all existing periods on the same day
    const existingPeriods = userAvailabilityPeriods.availablePeriods.filter(
      (period) => period.date === format(selectedDay, "MM/dd/yyyy")
    );

    // extract all existing duration slots into an array
    // example: [11,12, 13,14]
    const mockDuration = [
      [8, 9, 10],
      [13, 14],
    ];

    // logic:
    // 1) the start hour cannot exist in any of the exiting duration slots except the end hour,
    // 2) the end hour cannot be the same as any other end hour or larger
    const duration = getDuration();
    const startHour = duration[0];
    const endHour = duration[duration.length - 1];
    if (
      mockDuration[0].slice(0, mockDuration[0].length - 1).includes(startHour)
    ) {
      enqueueSnackbar(
        "Overlapping start times, Please Check your already available time slots",
        { variant: "error" }
      );
    }
    //an example of the last item in the first mockDuration array
    // mockDuration[0][mockDuration.length- 1]
    if (mockDuration[0][mockDuration.length - 1] >= endHour) {
      enqueueSnackbar(
        "Overlapping end times, Please Check your already available time slots",
        { variant: "error" }
      );
    }
    console.log(mockDuration[0][mockDuration.length - 1]);

    console.log({ startHour, existingPeriods, endHour });
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
  return { endHours, mockHours, availability, handleSelectedTime, onSubmit };
};
