import React, { FC } from "react";
import { CalenderContainer } from "./CustomCalender.styles";
import Calender from "react-calendar";
type CustomCalender = {
  handleModalOpen: (val: Date) => void;
  selectedDay: Date;
};

const CustomCalender: FC<CustomCalender> = ({
  handleModalOpen,
  selectedDay,
}) => {
  return (
    <CalenderContainer>
      <Calender
        className="react-calender"
        onClickDay={(val: any) => {
          handleModalOpen(val);
        }}
        value={selectedDay}
      />
    </CalenderContainer>
  );
};

export default CustomCalender;
