import styled from "@emotion/styled";

import { brandColor, brandColorXDark } from "@assets/styles/colors";

interface IStyledFormRadio {}

export const StyledFormRadio = styled.div<IStyledFormRadio>(() => ({
  width: "100%",
}));

export const StyledFormRadioLabel = styled.span<IStyledFormRadio>(() => ({}));

export const StyledFormRadioOptions = styled.div<IStyledFormRadio>(() => ({
  gap: 10,
  display: "flex",
  flexWrap: "nowrap",
  flexDirection: "row",
  justifyContent: "space-between",
}));

export const StyledFormRadioOptionsInput = styled.input<IStyledFormRadio>(
  () => ({
    height: 0,
    opacity: 0,

    "&:checked + span": {
      backgroundColor: brandColorXDark,
    },
  })
);

export const StyledFormRadioOptionsLabel = styled.label<IStyledFormRadio>(
  () => ({
    span: {
      width: "100%",
      padding: 15,
      minHeight: 100,
      borderRadius: 5,
      display: "flex",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: brandColor,
      transition: "all 0.3s ease",

      "&:hover": {
        backgroundColor: brandColorXDark,
      },
    },
  })
);
