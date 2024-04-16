import styled from "@emotion/styled";
import { Theme } from "@emotion/react";
import { CSSProperties } from "react";

interface IStyledButton {
  theme: Theme;
  isDisabled: boolean;
  isSecondary: boolean;
}

export const commonStyles = (
  isDisabled: boolean,
  isSecondary: boolean,
  theme: Theme
): CSSProperties => ({
  marginTop: 15,
  fontSize: "0.9em",
  cursor: "pointer",
  fontWeight: 600,
  letterSpacing: 0.5,
  padding: "8px 20px",
  textDecoration: "none",
  display: "inline-block",
  textTransform: "uppercase",
  opacity: isDisabled ? 0.7 : 1,
  color: theme.colors.defaultButton,
  pointerEvents: isDisabled ? "none" : "auto",
  backgroundColor: isDisabled
    ? theme.backgroundColors.disabledButton
    : isSecondary
    ? theme.backgroundColors.secondaryButton
    : theme.backgroundColors.button,
  border: isSecondary
    ? `2px solid ${theme.borders.secondaryButton}`
    : `2px solid ${theme.borders.button}`,
});

export const StyledButton = styled.button<IStyledButton>(
  ({ isDisabled, isSecondary, theme }) => ({
    ...commonStyles(isDisabled, isSecondary, theme),
  })
);

export const StyledLink = styled.a<IStyledButton>(
  ({ isDisabled, isSecondary, theme }) => ({
    ...commonStyles(isDisabled, isSecondary, theme),
  })
);
