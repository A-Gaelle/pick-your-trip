"use client";

import useTheme from "@utils/useThemeContext";

import StyledMain from "./styles";

interface IMainProps {
  children: React.ReactNode;
}

const Main = ({ children }: IMainProps) => {
  const { theme } = useTheme();

  return <StyledMain theme={theme}>{children}</StyledMain>;
};

export default Main;
