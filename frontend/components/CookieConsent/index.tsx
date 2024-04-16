"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import pagesPath from "@config/pagesPath";

import { PageName } from "@utils/enum";
import useTheme from "@utils/useThemeContext";
import { getCookie, setCookie } from "@utils/cookie";

import Button from "@components/Button";

import {
  StyledCookieConsent,
  StyledCookieConsentContent,
  StyledCookieConsentActions,
} from "./styles";

const CookiesBanner = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const [showConsent, setShowConsent] = useState(false);

  const cookieName = "consent";

  const acceptConsent = () => {
    setShowConsent(false);
    setCookie(cookieName, "true", 5);
  };

  const declineConsent = () => {
    setShowConsent(true);
    setCookie(cookieName, "true", -1);
  };

  useEffect(() => {
    if (getCookie(cookieName) !== "true") setShowConsent(true);
  }, []);

  if (!showConsent) return null;

  return (
    <StyledCookieConsent>
      <StyledCookieConsentContent theme={theme}>
        <p
          dangerouslySetInnerHTML={{
            __html: t(`cookieConsent.text`, {
              link: pagesPath[PageName.PrivacyPolicy],
            }),
          }}
        />
        <StyledCookieConsentActions>
          <Button onClick={acceptConsent}>
            {t(`cookieConsent.actions.accept.label`)}
          </Button>
          <Button isSecondary onClick={declineConsent}>
            {t(`cookieConsent.actions.decline.label`)}
          </Button>
        </StyledCookieConsentActions>
      </StyledCookieConsentContent>
    </StyledCookieConsent>
  );
};

export default CookiesBanner;
