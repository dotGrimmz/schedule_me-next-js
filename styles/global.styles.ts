import styled from "styled-components";
export const StyledButton = styled.button<{ hide?: boolean }>`
  ${({ hide }) => hide && { display: "nones" }}
  border-radius: 15px;
  color: teal;
  cursor: pointer;
`;
