import styled from "@emotion/styled";

import { mq } from "@assets/styles/mediaqueries";
import { brandColorDark, brandColorXXDark } from "@assets/styles/colors";

interface IStyledToggleNav {
  isNavOpen: boolean;
}

export const StyledToggleNav = styled.button<IStyledToggleNav>(
  ({ isNavOpen }) => ({
    border: 0,
    width: 30,
    height: 20,
    zIndex: 60,
    cursor: "pointer",
    marginLeft: "auto",
    position: "relative",

    [mq[1]]: {
      display: "none",
    },

    span: {
      height: 4,
      borderRadius: 3,
      marginBottom: 5,
      display: "block",
      position: "relative",
      width: isNavOpen ? 34 : 30,
      transformOrigin: "2px 0px",
      background: isNavOpen ? brandColorXXDark : brandColorDark,
      transition:
        "transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s ease-in-out, opacity 0.55s ease",

      "&:nth-of-type(1)": {
        transformOrigin: isNavOpen ? "2px 0px" : "0% 0%",
        transform: isNavOpen ? "rotate(45deg) translate(2px, -5px)" : "none",
      },

      "&:nth-of-type(2)": {
        opacity: isNavOpen ? 0 : 1,
        transform: isNavOpen ? "rotate(0deg) scale(0.2, 0.2)" : "none",
      },

      "&:nth-of-type(3)": {
        transformOrigin: "0% 100%",
        transform: isNavOpen ? "rotate(-45deg) translate(3px, 5px)" : "none",
      },
    },
  })
);
