"use client";

import { Align } from "@utils/enum";

import StyledSection from "./styles";

interface IMainProps {
  align?: Align;
  children: React.ReactNode;
}

const Section = ({ align = Align.Left, children }: IMainProps) => {
  return <StyledSection align={align}>{children}</StyledSection>;
};

export default Section;
