import styled from "@emotion/styled";

export const StyledIcon = styled.svg({
  margin: "0 auto",
  display: "inline-block",
  verticalAlign: "middle",
});

interface IStyledIconPath {
  fill: string;
}

export const StyledIconPath = styled.path<IStyledIconPath>(({ fill }) => ({
  fill,
  transition: "color .5s ease",
}));
