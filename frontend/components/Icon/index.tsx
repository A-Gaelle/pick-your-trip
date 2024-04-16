import useTheme from "@utils/useThemeContext";

import iconPath from "@assets/icons/icons";

import { StyledIcon, StyledIconPath } from "./styles";

interface IIconProps {
  icon: string;
  size?: number;
  color?: string;
  viewBox?: string;
}

const Icon = ({
  icon,
  size = 24,
  color = undefined,
  viewBox = "0 0 24 24",
}: IIconProps) => {
  const { theme } = useTheme();

  return (
    <StyledIcon viewBox={viewBox} width={`${size}px`} height={`${size}px`}>
      <StyledIconPath
        d={iconPath[icon as keyof typeof iconPath]}
        fill={color ? color : theme.colors.defaultIcon}
      />
    </StyledIcon>
  );
};

export default Icon;
