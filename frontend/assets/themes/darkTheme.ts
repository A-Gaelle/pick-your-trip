import {
  brandColorDark,
  brandColorBlack,
  brandColorXDark,
  brandColorXXDark,
} from "@assets/styles/colors";

const darkTheme = {
  colors: {
    defaultText: brandColorXDark,
    defaultLink: brandColorBlack,
    defaultIcon: brandColorBlack,
    defaultButton: brandColorXXDark,
  },

  backgroundColors: {
    button: brandColorXDark,
    secondaryButton: brandColorXDark,
    disabledButton: brandColorDark,

    main: brandColorXXDark,
    header: brandColorXXDark,
    footer: brandColorXDark,
    cookieConsent: brandColorXDark,
  },

  borders: {
    button: brandColorXDark,
    secondaryButton: brandColorDark,
  },
};

export default darkTheme;
