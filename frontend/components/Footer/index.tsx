"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

import navLegal from "@config/navLegal";
import pagesPath from "@config/pagesPath";
import navSocials from "@config/navSocials";

import { Social } from "@utils/types";
import useTheme from "@utils/useThemeContext";

import Icon from "@components/Icon";

import {
  StyledFooter,
  StyledFooterNav,
  StyledFooterNavLink,
  StyledFooterNavSocial,
  StyledFooterNavSocialLink,
} from "./styles";

interface IFooterProps {
  socialLinksFromApi: { [key in Social]: string };
}

const Footer = ({ socialLinksFromApi }: IFooterProps) => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");

  return (
    <StyledFooter theme={theme}>
      <div>
        Footer&nbsp;&nbsp;
        <Icon icon="arrowForward" size={12} />
      </div>
      <StyledFooterNav>
        {navLegal.map(({ name }, index) => (
          <StyledFooterNavLink key={`navItem-${index}`}>
            <Link href={pagesPath[name]}>{t(`navLegal.${name}`)}</Link>
          </StyledFooterNavLink>
        ))}
      </StyledFooterNav>

      <StyledFooterNavSocial>
        {navSocials.map((navSocialItem, index) => (
          <StyledFooterNavSocialLink key={`navSocialItem-${index}`}>
            <Link href={socialLinksFromApi[navSocialItem]} target="_blank">
              <Icon
                icon={`social${
                  navSocialItem[0].toUpperCase() + navSocialItem.slice(1)
                }`}
              />
            </Link>
          </StyledFooterNavSocialLink>
        ))}
      </StyledFooterNavSocial>
    </StyledFooter>
  );
};

export default Footer;
