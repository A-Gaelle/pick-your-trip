import styled from "@emotion/styled";

import { mq } from "@assets/styles/mediaqueries";
import { brandColorXDark } from "@assets/styles/colors";

export const headerHeight = 50;

export const StyledHeader = styled.header(({}) => ({
  zIndex: 20,
  width: "100%",
  height: headerHeight,
  position: "relative",
}));

interface IStyledHeaderContent {
  isFixed: boolean;
}

export const StyledHeaderContent = styled.div<IStyledHeaderContent>(
  ({ theme: { colors, backgroundColors }, isFixed }) => ({
    gap: 15,
    padding: 15,
    width: "100%",
    display: "flex",
    alignItems: "center",
    color: colors.defaultText,
    justifyContent: "space-between",
    backgroundColor: backgroundColors.header,
    position: isFixed ? "fixed" : "relative",
  })
);

interface IStyledHeaderContentNav {
  isNavOpen: boolean;
}

export const StyledHeaderContentNav = styled.nav<IStyledHeaderContentNav>(
  ({ isNavOpen }) => ({
    top: 0,
    left: 0,
    zIndex: 50,
    padding: 50,
    width: "100vw",
    height: "100vh",
    paddingTop: 125,
    display: "flex",
    fontSize: "1.75em",
    textAlign: "center",
    position: "absolute",
    flexDirection: "column",
    transformOrigin: "0% 0%",
    backgroundColor: brandColorXDark,
    transform: isNavOpen ? "none" : "translate(0, -100%)",
    transition: "transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)",

    [mq[1]]: {
      padding: 0,
      width: "auto",
      height: "100%",
      transform: "none",
      fontSize: "inherit",
      position: "relative",
      flexDirection: "row",
      backgroundColor: "transparent",
    },
  })
);

interface IStyledHeaderContentNavLink {
  isActive: boolean;
}

export const StyledHeaderContentNavLink =
  styled.div<IStyledHeaderContentNavLink>(({ isActive }) => ({
    display: "inline-block",

    a: {
      padding: 5,
      cursor: isActive ? "default" : "pointer",
      textDecoration: isActive ? "none" : "underline",
    },
  }));
