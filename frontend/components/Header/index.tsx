"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import nav from "@config/nav";
import pagesPath from "@config/pagesPath";

import { PageName } from "@utils/enum";
import useTheme from "@utils/useThemeContext";
import useActivePath from "@utils/useActivePath";

import ToggleTheme from "@components/ToggleTheme";
import LanguageSwitcher from "@components/LanguageSwitcher";

import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderContentNav,
  StyledHeaderContentNavLink,
} from "./styles";
import ToggleNav from "@components/ToggleNav";

interface IHeaderProps {
  isFixed?: boolean;
  externalLinksFromApi?: { [key in PageName]: string };
}

const Header = ({ isFixed = false, externalLinksFromApi }: IHeaderProps) => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");

  const [isNavOpen, setNavOpen] = useState(false);

  const checkActivePath = useActivePath();

  return (
    <StyledHeader theme={theme}>
      <StyledHeaderContent theme={theme} isFixed={isFixed}>
        Latte Macchiat.io
        <StyledHeaderContentNav isNavOpen={isNavOpen}>
          {nav.map(({ name }, index) => {
            const path =
              (externalLinksFromApi && externalLinksFromApi[name]) ||
              pagesPath[name];
            const isLinkExterne = !path.startsWith("/");

            return (
              <StyledHeaderContentNavLink
                key={`navItem-${index}`}
                isActive={checkActivePath(path)}
              >
                <Link href={path} target={isLinkExterne ? "_blank" : "_self"}>
                  {t(`nav.${name}`)}
                </Link>
              </StyledHeaderContentNavLink>
            );
          })}
          <LanguageSwitcher />
        </StyledHeaderContentNav>
        <ToggleTheme />
        <ToggleNav
          isNavOpen={isNavOpen}
          onToggleNav={() => setNavOpen(!isNavOpen)}
        />
      </StyledHeaderContent>
    </StyledHeader>
  );
};

export default Header;
