import styled, { css, keyframes } from "styled-components";

export const TitleText = styled.h2`
  font-size: 33px;
  margin: 0;
  padding: 0;
  color: red;
`;

const fadeIn = keyframes`
100%{
opacity: 1;
filter: blur(0)
}
`;

export const LetterItem = styled.div<{
  count: string;
  delay?: number | string;
  login?: boolean;
}>`
  font-size: 40px;
  margin: 0;
  padding: 0;
  ${({ login }) => (login ? { color: "teal" } : { color: "bisque" })}
  display: flex;
  font-family: Comic Sans MS, Comic Sans, cursive;
  filter: blur(4px);
  ${({ count }) =>
    count &&
    css`
      animation: ${fadeIn} 0.8s ${count} forwards cubic-bezier(0.11, 0, 0.5, 0);
    `}

  ${({ delay }) =>
    delay &&
    css`
      animation-delay: ${delay}s;
    `}
`;

export const iterateLetterAnimation = (
  index: number,
  startIndex = 1
): string => {
  return `0.${index + startIndex}s`;
};

export const Spacer = styled.div`
  width: 6px;
`;

export const TitleContainer = styled.div`
  display: flex;
`;
