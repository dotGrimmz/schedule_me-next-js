import React from "react";
import { useSchedule } from "./hooks/useSchedule";
import CustomCalender from "../../components/calendar/CustomCalender";
import { ScheduleContainer } from "./Schedule.styles";
import CustomModal from "../../components/modal/CustomModal";

const Schedule = () => {
  const {
    selectedDay,
    handleModalOpen,
    openModal,
    handleModalClose,
    continueStep,
    handleNextStep,
    handleBackStep,
    captureAvailablePeriod,
  } = useSchedule();
  return (
    <ScheduleContainer>
      <CustomCalender
        handleModalOpen={handleModalOpen}
        selectedDay={selectedDay}
      />
      <CustomModal
        selectedDay={selectedDay}
        open={openModal}
        handleModalClose={handleModalClose}
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
        continueStep={continueStep}
        captureAvailablePeriod={captureAvailablePeriod}
      />
    </ScheduleContainer>
  );
};

export default Schedule;
