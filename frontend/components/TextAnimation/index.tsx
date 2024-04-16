"use client";

import useTheme from "@utils/useThemeContext";

import { StyledTextAnimation, StyledTextAnimationElement } from "./styles";
import { useEffect, useState } from "react";

interface ITextAnimationProps {
  text: string[];
}

const TextAnimation = ({ text }: ITextAnimationProps) => {
  const { theme } = useTheme();

  const [randomNumber, setRandomNumber] = useState(1);

  useEffect(() => {
    // create interval
    const interval = setInterval(
      // set number every 5s
      () => setRandomNumber(Math.floor(Math.random() * text.length)),
      2000
    );

    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledTextAnimation theme={theme}>
      {text.map((text, index) => {
        return (
          <StyledTextAnimationElement
            key={`text-${index}`}
            isActive={randomNumber === index}
          >
            {text}
          </StyledTextAnimationElement>
        );
      })}
    </StyledTextAnimation>
  );
};

export default TextAnimation;
