import React, { FC, useId } from "react";
import { AvailablePeriod } from "../../../types/availability.types";
import {
  UserAvailabilityContainer,
  PeriodContainer,
  LabelContainer,
  PaginationContainer,
  SymantecDiv,
} from "./AvailabilityPanel.styles";
import { getMorningPeriod } from "../../utils/getMorningPeriod";
import { StyledButton } from "../../../styles/global.styles";
import { usePagination } from "../../views/schedule/hooks/usePagination";
import { CircularProgress } from "@mui/material";

const AvailabilityPanel: FC<{
  periods: AvailablePeriod[];
  printToConsole: () => void;
}> = ({ periods, printToConsole }) => {
  const {
    paginatedPeriods,
    hideDecrement,
    hideIncrement,
    decrementPageNumber,
    incrementPageNumber,
  } = usePagination(periods);
  const id = useId();
  if (!periods) {
    return <CircularProgress />;
  }

  return (
    <UserAvailabilityContainer>
      <SymantecDiv>
        {paginatedPeriods.map((period) => {
          return (
            <PeriodContainer key={id}>
              <LabelContainer>
                <SymantecDiv>{period.formattedDateStr}</SymantecDiv>
                <SymantecDiv>{period.day}</SymantecDiv>
              </LabelContainer>
              <LabelContainer>
                <SymantecDiv>
                  Start: {period.start}{" "}
                  {getMorningPeriod(period.start) ? "AM" : "PM"}
                </SymantecDiv>
                <SymantecDiv>
                  End: {period.end} {getMorningPeriod(period.end) ? "AM" : "PM"}{" "}
                </SymantecDiv>
              </LabelContainer>
            </PeriodContainer>
          );
        })}
      </SymantecDiv>
      <PaginationContainer>
        <StyledButton onClick={decrementPageNumber} hide={hideDecrement}>
          Back
        </StyledButton>
        <StyledButton onClick={incrementPageNumber} hide={hideIncrement}>
          Next
        </StyledButton>
      </PaginationContainer>
      <StyledButton onClick={printToConsole}>Print to Console</StyledButton>
    </UserAvailabilityContainer>
  );
};

export default AvailabilityPanel;
