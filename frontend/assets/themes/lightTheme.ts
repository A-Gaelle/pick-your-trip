import {
  brandColor,
  brandColorBlack,
  brandColorDark,
  brandColorWhite,
  brandColorXLight,
} from "@assets/styles/colors";

const lightTheme = {
  colors: {
    defaultText: brandColorDark,
    defaultLink: brandColorBlack,
    defaultIcon: brandColorBlack,
    defaultButton: brandColorDark,
  },

  backgroundColors: {
    button: brandColor,
    secondaryButton: brandColorWhite,
    disabledButton: brandColor,

    main: brandColorXLight,
    header: brandColorXLight,
    footer: brandColor,
    cookieConsent: brandColorWhite,
  },

  borders: {
    button: brandColor,
    secondaryButton: brandColor,
  },
};

export default lightTheme;
