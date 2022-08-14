import React, { FC } from "react";
import {
  TimeSelectContainer,
  StyledSelect,
  DropdownContainer,
} from "./TimeSelect.styles";
import { getMorningPeriod } from "../../utils/getMorningPeriod";

type TimeSelect = {
  label: string;
  onSelect: (time: React.SyntheticEvent) => void;
  selectedTime: string;
  selectOptions: string[];
};

const TimeSelect: FC<TimeSelect> = ({
  label,
  onSelect,
  selectedTime,
  selectOptions,
}) => {
  const labelName = label.toLowerCase();
  return (
    <TimeSelectContainer>
      <p>Select {label} Time</p>

      <DropdownContainer>
        <StyledSelect name={labelName} value={selectedTime} onChange={onSelect}>
          {selectOptions.map((hour, index) => {
            return (
              <option value={hour} key={index}>
                {hour}
              </option>
            );
          })}
        </StyledSelect>
        <div>{getMorningPeriod(selectedTime) ? "AM" : "PM"}</div>
      </DropdownContainer>
    </TimeSelectContainer>
  );
};

export default TimeSelect;
