import styled from "@emotion/styled";

import { Align } from "@utils/enum";

interface IStyledSection {
  align: Align;
}

const StyledSection = styled.section<IStyledSection>(({ align }) => ({
  padding: 15,
  maxWidth: "var(--max-width)",
  textAlign: align === Align.Center ? "center" : "left",
}));

export default StyledSection;
