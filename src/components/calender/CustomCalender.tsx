import React, { FC } from "react";
import "./node_modules/react-calendar/dist/Calendar.css";
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
    <Calender
      onClickDay={(val: any) => {
        handleModalOpen(val);
      }}
      value={selectedDay}
    />
  );
};

export default CustomCalender;
