import { useState } from "react";

export const useSchedule = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("09:00");

  const handleModalClose = () => setOpenModal(false);

  const handleModalOpen = (day: Date) => {
    console.log(isValidDay(day));
    if (isValidDay(day)) {
      setOpenModal(true);

      setSelectedDay(day);
    }
  };

  const handleSelectedTime = (time: string) => {
    console.log({ time });
    if (isValidTime(time)) {
      setSelectedTime(time);
    }
  };

  const isValidDay = (day: Date) => {
    const selectedDay = day?.getDay();
    if (selectedDay === 0 || selectedDay === 6) {
      return false;
    }
    return true;
  };

  const isValidTime = (time: any) => {
    if (time) {
      return true;
    }
    return true;
  };

  return {
    selectedDay,
    selectedTime,
    handleModalOpen,
    handleSelectedTime,
    openModal,
    handleModalClose,
  };
};
