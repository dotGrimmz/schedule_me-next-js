import styled from "styled-components";
import { StyledButton } from "../../../styles/global.styles";

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: radial-gradient(ellipse at top, teal, transparent),
    radial-gradient(ellipse at center, green, transparent);
  align-items: center;
`;

export const LogOutButton = styled(StyledButton)`
  align-self: center;
  height: fit-content;
  margin-right: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
