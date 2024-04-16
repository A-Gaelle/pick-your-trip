import styled from "@emotion/styled";

interface IStyledTextAnimation {}

export const StyledTextAnimation = styled.div<IStyledTextAnimation>(() => ({}));

interface IStyledTextAnimationElement {
  isActive: boolean;
}

export const StyledTextAnimationElement =
  styled.span<IStyledTextAnimationElement>(({ isActive }) => ({
    display: isActive ? "inline-block" : "none",
  }));
