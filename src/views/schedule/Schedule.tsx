import React from "react";
import { useSchedule } from "./hooks/useSchedule";
import CustomCalender from "../../components/calendar/CustomCalender";
import { ScheduleContainer } from "./Schedule.styles";
import CustomModal from "../../components/modal/CustomModal";

const Schedule = () => {
  const {
    selectedDay,
    setAvailability,
    availability,
    handleModalOpen,
    handleEndTime,
    openModal,
    handleModalClose,
    handleStartTime,
    continueStep,
    handleNextStep,
    handleBackStep,
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
        availability={availability}
        handleStartTime={handleStartTime}
        handleEndTime={handleEndTime}
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
        continueStep={continueStep}
      />
    </ScheduleContainer>
  );
};

export default Schedule;
