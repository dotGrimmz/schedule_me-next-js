import styled, { keyframes } from "styled-components";

const growDown = keyframes`
  0% {
    transform: scaleY(0)
  }
  80% {
    transform: scaleY(1.1)
  }
  100% {
    transform: scaleY(1)
  }`;

export const UserAvailabilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  outline: 1.5px solid black;
  width: 200px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.19);
  background-color: white;
  align-self: flex-start;
  margin-top: 10px;
  margin-left: 20px;
  border-radius: 5px;
  padding: 10px;
  gap: 6px;
  position: absolute;
  top: 100px;
  animation: ${growDown} 300ms ease-in-out forwards;
  transform-origin: top center;
`;

export const PeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1.5px solid black;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.19);
  margin-top: 2px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 4px;
`;
