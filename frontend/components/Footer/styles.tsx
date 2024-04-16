import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

interface IStyledFooter {
  theme: Theme;
}

export const StyledFooter = styled.footer<IStyledFooter>(
  ({ theme: { colors, backgroundColors } }) => ({
    gap: 15,
    padding: 15,
    display: "flex",
    color: colors.defaultText,
    justifyContent: "space-between",
    backgroundColor: backgroundColors.footer,
  })
);

export const StyledFooterNav = styled.nav(() => ({
  marginLeft: 30,
  marginRight: "auto",
}));

export const StyledFooterNavLink = styled.div(() => ({
  display: "inline-block",

  a: {
    padding: 5,
  },
}));

export const StyledFooterNavSocial = styled.div(() => ({
  marginLeft: 30,
  marginRight: 0,
}));

export const StyledFooterNavSocialLink = styled.div(() => ({
  display: "inline-block",

  a: {
    padding: 5,
  },
}));
