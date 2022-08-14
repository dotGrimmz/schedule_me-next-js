import { useState } from "react";
import { Availability } from "../../../../types/availability.types";
import { useAuthContext } from "../../../context/useAuthContext";
import { getTransformedAvailability } from "../../../utils/getTransformedAvailability";

export const useSchedule = () => {
  const { auth } = useAuthContext();

  const [openModal, setOpenModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [continueStep, setContinueStep] = useState(false);

  const handleModalClose = () => setOpenModal(false);

  const handleModalOpen = (day: Date) => {
    if (isValidDay(day)) {
      setOpenModal(true);
      setSelectedDay(day);
    }
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

  //TODO:: Collect User data, Selected day and Hours or selected Day

  const captureAvailablePeriod = (availability: Availability) => {
    const availabilityPeriod = getTransformedAvailability({
      selectedDay,
      availability,
    });
    const data = {
      auth,
    };
  };

  return {
    selectedDay,
    handleModalOpen,

    openModal,
    handleModalClose,
    continueStep,
    handleNextStep,
    handleBackStep,
    captureAvailablePeriod,
  };
};
