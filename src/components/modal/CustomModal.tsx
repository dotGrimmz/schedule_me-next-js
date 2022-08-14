import React, { FC, useEffect, useState } from "react";
import Fade from "@mui/material/Fade";
import TimeSelect from "../timeSelect/TimeSelect";
import {
  ModalContentContainer,
  StyledModal,
  TimeSelectContainer,
} from "./CustomModal.styles";
import { Availability } from "../../../types/availability.types";
import { getMockHours } from "../../utils/getMockHours";
import { StyledButton } from "../../../styles/global.styles";
import { getEndTimeOptions } from "../../utils/getEndTimeOptions";

type CustomModal = {
  open: boolean;
  handleModalClose: () => void;
  availability: Availability;
  handleStartTime: (e: React.SyntheticEvent) => void;
  handleEndTime: (e: React.SyntheticEvent) => void;
  continueStep?: boolean;
  handleNextStep: () => void;
  handleBackStep: () => void;
};

const CustomModal: FC<CustomModal> = ({
  open,
  handleModalClose,
  availability,
  handleStartTime,
  continueStep,
  handleEndTime,
  handleNextStep,
  handleBackStep,
}) => {
  const mockHours = getMockHours();
  const [endHours, setEndHours] = useState([""]);

  useEffect(() => {
    const endOpts = getEndTimeOptions(mockHours, availability.start);
    setEndHours(endOpts);
  }, [availability]);
  return (
    <StyledModal open={open} onClose={handleModalClose}>
      <Fade in={open}>
        <ModalContentContainer>
          {!continueStep && (
            <Fade in={!continueStep}>
              <TimeSelectContainer gap>
                <TimeSelect
                  label="Start"
                  onSelect={handleStartTime}
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
                  onSelect={handleEndTime}
                  selectedTime={availability.end}
                  selectOptions={endHours}
                />
                <StyledButton onClick={() => console.log("almost done")}>
                  Confirm
                </StyledButton>
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
