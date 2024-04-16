import { brandColor } from "@assets/styles/colors";
import styled from "@emotion/styled";

interface IStyledFormRow {
  isRadio: boolean;
}

const StyledFormRow = styled.div<IStyledFormRow>(({ isRadio }) => ({
  gap: 15,
  width: 600,
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  position: "relative",

  "& + &": {
    marginTop: 15,
  },

  label: {
    display: "flex",
    flexWrap: "wrap",
  },

  select: {
    width: "100%",
  },
}));

export default StyledFormRow;
