import styled from "styled-components";
import Modal from "@mui/material/Modal";

export const ModalContentContainer = styled.div`
  min-width: 300px;
  background-color: white;
  display: flex;
  margin-bottom: 100px;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.44);
  border: 2px solid green;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimeSelectContainer = styled.div<{ gap?: boolean }>`
  display: inline-flex;
  align-items: center;
  ${({ gap }) => gap && { gap: "6px" }};
`;
