import React, { FC } from "react";
import Modal from "@mui/material/Modal";

type CustomModal = {
  open: boolean;
  handleModalClose: () => void;
  selectedTime: string;
  handleSelectedTime: (time: string) => void;
};

const CustomModal: FC<CustomModal> = ({
  open,
  handleModalClose,
  selectedTime,
  handleSelectedTime,
}) => {
  return (
    <Modal open={open} onClose={handleModalClose}>
      <>Select Your Time</>
    </Modal>
  );
};

export default CustomModal;
