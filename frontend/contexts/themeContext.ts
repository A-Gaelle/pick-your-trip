import { createContext } from "react";
import { Theme } from "@emotion/react";

import darkTheme from "@assets/themes/darkTheme";
import lightTheme from "@assets/themes/lightTheme";

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

type ContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ContextType>({
  theme: themes.light,
  setTheme: () => themes.light,
});
