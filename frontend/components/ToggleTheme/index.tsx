"use client";

import { useState } from "react";

import useTheme from "@utils/useThemeContext";

import { themes } from "@contexts/themeContext";

import {
  StyledToggleTheme,
  StyledToggleThemeInput,
  StyledToggleThemeSlider,
} from "./styles";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isToggled, toggle] = useState(theme === themes.dark ? true : false);

  const toggleTheme = () =>
    setTheme(theme === themes.dark ? themes.light : themes.dark);

  const onClick = () => {
    toggleTheme();
    toggle(!isToggled);
  };

  return (
    <StyledToggleTheme>
      <StyledToggleThemeInput
        type="checkbox"
        onClick={onClick}
        defaultChecked={isToggled}
      />
      <StyledToggleThemeSlider />
    </StyledToggleTheme>
  );
};

export default ToggleTheme;
