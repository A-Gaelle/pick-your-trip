import styled from "@emotion/styled";

import { Theme } from "@emotion/react";

interface IStyledMain {
  theme: Theme;
}

const StyledMain = styled.main<IStyledMain>(
  ({ theme: { backgroundColors } }) => ({
    display: "flex",
    flex: "1 1 auto",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: backgroundColors.main,
  })
);

export default StyledMain;
