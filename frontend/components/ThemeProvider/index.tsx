"use client";

import { useState } from "react";
import { Theme } from "@emotion/react";

import { ThemeContext, themes } from "@contexts/themeContext";

interface IThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
