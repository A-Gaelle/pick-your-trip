import {
  brandColor,
  brandColorBlack,
  brandColorDark,
  brandColorLight,
  brandColorXDark,
  brandColorXLight,
  brandColorXXLight,
} from "@assets/styles/colors";
import styled from "@emotion/styled";

interface IStyledFormRange {}

export const StyledFormRange = styled.div<IStyledFormRange>(() => ({
  display: "block !important",
  position: "relative",
  width: "600px !important",
  textAlign: "center",
  marginBottom: 50,

  "::focus": {
    oultine: "none",
  },

  input: {
    height: "0.4rem",
    cursor: "pointer",
    position: "absolute",
    accentColor: brandColorXDark,
    WebkitAppearance: "none",
    MozAppearance: "none",
    outline: "none !important",
    background: "transparent",
    "--minRangePercent": "0%",
    "--maxRangePercent": "0%",

    "&:nth-child(2)": {
      backgroundImage: `linear-gradient(to right, ${brandColor} 0%, ${brandColor} var(--maxRangePercent), ${brandColorLight} var(--maxRangePercent), ${brandColorLight} 100%)`,

      "&::-moz-range-progress": {
        background: brandColor,
        borderRadius: 4,
      },
    },

    "&:nth-child(1)": {
      zIndex: 5,
      backgroundImage: `linear-gradient(to right, ${brandColorLight} 0%, ${brandColorLight} var(--minRangePercent), ${brandColor} var(--minRangePercent), ${brandColor} 100%)`,
      "&::-moz-range-progress": {
        height: "0.6em",
        background: brandColorLight,
        borderRadius: 4,
      },
    },

    "&::focus": {
      outline: "none",
    },
  },

  "input::-webkit-slider-runnable-track, input::-moz-range-track, input::-ms-track":
    {
      boxSizing: "border-box",
      border: "none",
      borderRadius: 8,
      height: 10,
      backgroundColor: "transparent",
      backgroundImage: `linear-gradient(${brandColor}, ${brandColor}),linear-gradient(${brandColor}, ${brandColor})`,
      backgroundSize: "var(--sx) 10px, calc(100% - var(--sx)) 4px",
      backgroundPosition: "left center, right center",
      backgroundRepeat: "no-repeat",
    },

  "input[type='range']::-webkit-slider-thumb, input[type='range']::-moz-range-thumb":
    {
      WebkitAppearance: "none" /* Override default look */,
      MozAppearance: "none",
      appearance: "none",
      width: 20 /* Set a specific slider handle width */,
      height: 20 /* Slider handle height */,
      background: brandColor /* Green background */,
      cursor: "pointer" /* Cursor on hover */,
      border: "none",
      color: `1px solid ${brandColor}`,
      borderRadius: "50%",
      /* box-shadow: -205px 0 0 200px hsl(100, 100%, 40%); */
    },

  "input::-webkit-slider-runnable-track": {
    cursor: "pointer",
  },
}));

export const StyledFormRangeOptions = styled.div<IStyledFormRange>(() => ({
  gap: 5,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
}));
