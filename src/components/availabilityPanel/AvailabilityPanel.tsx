import React, { FC } from "react";
import { AvailabilityPeriod } from "../../../types/availability.types";
import {
  UserAvailabilityContainer,
  PeriodContainer,
  LabelContainer,
} from "./AvailabilityPanel.styles";
import { getMorningPeriod } from "../../utils/getMorningPeriod";
import { StyledButton } from "../../../styles/global.styles";

const AvailabilityPanel: FC<{
  periods: AvailabilityPeriod[];
  printToConsole: () => void;
}> = ({ periods, printToConsole }) => {
  return (
    <UserAvailabilityContainer>
      <div>
        {periods?.map((period) => {
          return (
            <PeriodContainer>
              <LabelContainer>
                <div>{period.date}</div>
                <div>{period.day}</div>
              </LabelContainer>
              <LabelContainer>
                <div>
                  Start: {period.start}{" "}
                  {getMorningPeriod(period.start) ? "AM" : "PM"}
                </div>
                <div>
                  End: {period.end} {getMorningPeriod(period.end) ? "AM" : "PM"}{" "}
                </div>
              </LabelContainer>
            </PeriodContainer>
          );
        })}
      </div>
      <StyledButton onClick={printToConsole}>Print to Console</StyledButton>
    </UserAvailabilityContainer>
  );
};

export default AvailabilityPanel;
