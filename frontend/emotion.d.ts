import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      defaultText: string;
      defaultLink: string;
      defaultIcon: string;
      defaultButton: string;
    };

    backgroundColors: {
      button: string;
      secondaryButton: string;
      disabledButton: string;

      main: string;
      header: string;
      footer: string;
      cookieConsent: string;
    };

    borders: {
      button: string;
      secondaryButton: string;
    };
  }
}
