import React, { FC } from "react";
import Fade from "@mui/material/Fade";
import TimeSelect from "../timeSelect/TimeSelect";
import {
  ModalContentContainer,
  StyledModal,
  TimeSelectContainer,
} from "./CustomModal.styles";
import { Availability } from "../../../types/availability.types";
import { StyledButton } from "../../../styles/global.styles";
import { useModal } from "./hooks/useModal";

type CustomModal = {
  open: boolean;
  handleModalClose: () => void;
  continueStep?: boolean;
  handleNextStep: () => void;
  handleBackStep: () => void;
  selectedDay: Date;
  captureAvailablePeriod: (val: Availability) => void;
};

const CustomModal: FC<CustomModal> = ({
  open,
  handleModalClose,
  continueStep,
  handleNextStep,
  handleBackStep,
  captureAvailablePeriod,
  selectedDay,
}) => {
  const {
    endHours,
    // onSubmit,
    mockHours,
    availability,
    handleSelectedTime,
    isRangeError,
  } = useModal(selectedDay);

  const onSubmit = (e: React.SyntheticEvent) => {
    handleSelectedTime(e);
    if (!isRangeError()) {
      captureAvailablePeriod(availability);
      handleModalClose();
    }
  };
  return (
    <StyledModal open={open} onClose={handleModalClose}>
      <Fade in={open}>
        <ModalContentContainer>
          {!continueStep && (
            <Fade in={!continueStep}>
              <TimeSelectContainer gap>
                <TimeSelect
                  label="Start"
                  onSelect={handleSelectedTime}
                  selectedTime={availability.start}
                  selectOptions={mockHours}
                />
                <StyledButton onClick={handleNextStep}>Continue</StyledButton>
              </TimeSelectContainer>
            </Fade>
          )}
          {continueStep && (
            <Fade in={continueStep}>
              <TimeSelectContainer gap>
                <TimeSelect
                  label="End"
                  onSelect={handleSelectedTime}
                  selectedTime={availability.end}
                  selectOptions={endHours}
                />
                <StyledButton onClick={onSubmit}>Confirm</StyledButton>
                <StyledButton onClick={handleBackStep}>Back</StyledButton>
              </TimeSelectContainer>
            </Fade>
          )}
        </ModalContentContainer>
      </Fade>
    </StyledModal>
  );
};

export default CustomModal;
