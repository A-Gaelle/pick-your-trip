"use client";

import useTheme from "@utils/useThemeContext";

import { StyledButton, StyledLink } from "./styles";

interface IButtonProps {
  href?: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isSecondary?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  onClick,
  children,
  type = "button",
  href = undefined,
  isDisabled = false,
  isSecondary = false,
}: IButtonProps) => {
  const { theme } = useTheme();

  if (href) {
    return (
      <StyledLink
        href={href}
        theme={theme}
        isDisabled={isDisabled}
        isSecondary={isSecondary}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton
      type={type}
      theme={theme}
      onClick={onClick}
      isDisabled={isDisabled}
      isSecondary={isSecondary}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
