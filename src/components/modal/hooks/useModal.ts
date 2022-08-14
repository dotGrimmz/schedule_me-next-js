import { useState, useEffect } from "react";
import { getMockHours } from "../../../utils/getMockHours";
import { getEndTimeOptions } from "../../../utils/getEndTimeOptions";
import { Availability } from "../../../../types/availability.types";

export const useModal = () => {
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
    const target = e.target as HTMLInputElement;
    const time = target.value;
    if (!time) return;
    setAvailability({ ...availability, [target.name]: time });
  };
  return { endHours, mockHours, availability, handleSelectedTime };
};
