import { useState, useEffect } from "react";
import { getMockHours } from "../../../utils/getMockHours";
import { getEndTimeOptions } from "../../../utils/getEndTimeOptions";
import { Availability } from "../../../../types/availability.types";
import { useSnackbar } from "notistack";

export const useModal = () => {
  const { enqueueSnackbar } = useSnackbar();
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

  const handleSelectedTime = (e: React.SyntheticEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    if (name === "start" && value === "5") {
      return enqueueSnackbar("Start time must be 4pm or earlier", {
        variant: "warning",
      });
    }
    setAvailability({ ...availability, [name]: value });
  };
  return { endHours, mockHours, availability, handleSelectedTime };
};
