import React from "react";
import { useSchedule } from "./hooks/useSchedule";
import CustomCalender from "../../components/calendar/CustomCalender";
import { ScheduleContainer } from "./Schedule.styles";
import CustomModal from "../../components/modal/CustomModal";

const Schedule = () => {
  const {
    selectedDay,
    selectedTime,
    handleModalOpen,
    handleSelectedTime,
    openModal,
    handleModalClose,
  } = useSchedule();
  return (
    <ScheduleContainer>
      <CustomCalender
        handleModalOpen={handleModalOpen}
        selectedDay={selectedDay}
      />
      <CustomModal
        open={openModal}
        handleModalClose={handleModalClose}
        selectedTime={selectedTime}
        handleSelectedTime={handleSelectedTime}
      />
    </ScheduleContainer>
  );
};

export default Schedule;
