"use client";

import { StyledToggleNav } from "./styles";

interface IToggleNav {
  isNavOpen: boolean;
  onToggleNav: () => void;
}

const ToggleNav = ({ isNavOpen = false, onToggleNav }: IToggleNav) => {
  return (
    <StyledToggleNav isNavOpen={isNavOpen} onClick={onToggleNav}>
      <span />
      <span />
      <span />
    </StyledToggleNav>
  );
};

export default ToggleNav;
