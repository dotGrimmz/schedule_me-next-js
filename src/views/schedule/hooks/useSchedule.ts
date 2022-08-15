import { useState } from "react";
import { Availability } from "../../../../types/availability.types";
import { useAuthContext } from "../../../context/useAuthContext";
import { getTransformedAvailability } from "../../../utils/getTransformedAvailability";
import { periodService } from "../../../../service/period.service";
import { useAvailabilityContext } from "../../../context/useAvailabilityContext";
import { useSnackbar } from "notistack";

export const useSchedule = () => {
  const { auth } = useAuthContext();
  const { setUserAvailabilityPeriods } = useAvailabilityContext();
  const { enqueueSnackbar } = useSnackbar();
  const [openModal, setOpenModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [continueStep, setContinueStep] = useState(false);

  const handleModalClose = () => setOpenModal(false);

  const handleModalOpen = (day: Date) => {
    if (isValidDay(day)) {
      setOpenModal(true);
      setSelectedDay(day);
    } else {
      enqueueSnackbar("Please Select a Week Day", { variant: "error" });
    }
  };

  const isValidDay = (day: Date) => {
    const selectedDay = day?.getDay();
    return !(selectedDay === 0 || selectedDay === 6);
  };

  const handleNextStep = () => setContinueStep(true);
  const handleBackStep = () => setContinueStep(false);

  const captureAvailablePeriod = async (availability: Availability) => {
    const availabilityPeriod = getTransformedAvailability({
      selectedDay,
      availability,
    });

    const data = {
      id: auth?.id,
      availablePeriod: availabilityPeriod,
    };

    await periodService
      .create(data)
      .then(setUserAvailabilityPeriods)
      .then(() =>
        enqueueSnackbar("Available Hours Added", { variant: "success" })
      )
      .catch((e) => {
        enqueueSnackbar(e, { variant: "error" });
      });
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
