import { useState } from "react";
import { Availability } from "../../../../types/availability.types";

export const useSchedule = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [continueStep, setContinueStep] = useState(false);
  const [availability, setAvailability] = useState<Availability>({
    start: "9",
    end: "",
  });

  const handleModalClose = () => setOpenModal(false);

  const handleModalOpen = (day: Date) => {
    if (isValidDay(day)) {
      setOpenModal(true);
      setSelectedDay(day);
    }
  };

  // This was my original DRY solution..
  // const handleSelectedTime = (e: React.SyntheticEvent) => {
  //   const target = e.target as HTMLInputElement;
  //   const time = target.value;
  //   setAvailability({ ...availability, [target.name]: time });
  // };

  const handleStartTime = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const time = target.value;
    setAvailability({ ...availability, start: time });
  };

  const handleEndTime = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const time = target.value;
    setAvailability({ ...availability, end: time });
  };
  const isValidDay = (day: Date) => {
    const selectedDay = day?.getDay();
    if (selectedDay === 0 || selectedDay === 6) {
      return false;
    }
    return true;
  };

  const handleNextStep = () => setContinueStep(true);
  const handleBackStep = () => setContinueStep(false);

  return {
    selectedDay,
    setAvailability,
    handleModalOpen,
    handleEndTime,
    openModal,
    handleModalClose,
    availability,
    handleStartTime,
    continueStep,
    handleNextStep,
    handleBackStep,
  };
};
