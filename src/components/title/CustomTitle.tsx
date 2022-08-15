import React, { FC } from "react";
import {
  LetterItem,
  TitleContainer,
  iterateLetterAnimation,
  Spacer,
} from "./CustomTitle.styles";

const CustomTitle: FC<{ login?: boolean }> = ({ login }) => {
  return (
    <TitleContainer>
      {"Schedule".split("").map((letter, i) => (
        <LetterItem
          delay={i > 0 ? `0.${i}` : 0.05}
          key={i}
          count={iterateLetterAnimation(i)}
          login={login}
        >
          {letter}
        </LetterItem>
      ))}
      <Spacer />
      {"Me".split("").map((letter, i) => (
        <LetterItem
          delay={i > 0 ? `0.${i}` : 0.05}
          key={i}
          count={iterateLetterAnimation(i)}
          login={login}
        >
          {letter}
        </LetterItem>
      ))}
    </TitleContainer>
  );
};

export default CustomTitle;
