import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export const StyledCookieConsent = styled.div(() => ({
  top: 0,
  left: 0,
  right: 0,
  zIndex: 5,
  bottom: 0,
  position: "fixed",
  backdropFilter: "blur(2px)",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
}));

interface IStyledCookieConsentContent {
  theme: Theme;
}

export const StyledCookieConsentContent =
  styled.div<IStyledCookieConsentContent>(
    ({ theme: { backgroundColors } }) => ({
      zIndex: 5,
      right: 15,
      width: 500,
      bottom: 15,
      padding: 20,
      display: "flex",
      position: "absolute",
      flexDirection: "column",
      backgroundColor: backgroundColors.cookieConsent,
    })
  );

export const StyledCookieConsentActions = styled.div(() => ({
  gap: 20,
  display: "flex",
  flexDirection: "row",
}));
