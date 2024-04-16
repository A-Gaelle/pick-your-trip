import styled from "@emotion/styled";

import {
  brandColor,
  brandColorWhite,
  brandColorXDark,
} from "@assets/styles/colors";

export const StyledToggleTheme = styled.label(({}) => ({
  width: 40,
  height: 20,
  position: "relative",
}));

export const StyledToggleThemeInput = styled.input(() => ({
  width: 0,
  height: 0,
  opacity: 0,

  "&:checked + span": {
    backgroundColor: brandColorXDark,
  },

  "&:checked + span:before": {
    transform: "translateX(19px)",
  },
}));

interface IStyledToggleThemeSlider {}

export const StyledToggleThemeSlider = styled.span<IStyledToggleThemeSlider>(
  ({}) => ({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    cursor: "pointer",
    transition: "0.3s",
    position: "absolute",
    backgroundColor: brandColor,

    "&:before": {
      left: 3,
      width: 15,
      height: 15,
      bottom: 2.5,
      content: '""',
      transition: "0.3s",
      borderRadius: "50%",
      position: "absolute",
      backgroundColor: brandColorWhite,
    },
  })
);
