"use client";

import { Global } from "@emotion/react";

import { mq } from "./mediaqueries";
import { blinker } from "./keyframes";
import { brandFont, defaultFont } from "./fonts";

import useTheme from "@utils/useThemeContext";

const GlobalStyles = () => {
  const {
    theme: { colors },
  } = useTheme();

  return (
    <Global
      styles={{
        ":root": {
          "--max-width": "1100px",
        },

        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },

        "html, body": {
          margin: 0,
          padding: 0,
          maxWidth: "100vw",
          overflowX: "hidden",
        },

        html: {
          scrollBehavior: "smooth",
          height: "calc(100vh - calc(100vh - 100%))",
          minHeight: "calc(100% + env(safe-area-inset-top))",
        },

        body: {
          fontSize: 14,
          display: "flex",
          fontWeight: 400,
          minHeight: "100%",
          lineHeight: "1.6em",
          flexDirection: "column",
          color: colors.defaultText,
          fontFamily: `var(--font-${defaultFont})`,

          [mq[2]]: {
            fontSize: 15,
          },
        },

        h1: {
          fontSize: 30,
          fontWeight: 600,
          paddingBottom: 20,
          lineHeight: "1.5em",
          color: colors.defaultText,
          fontFamily: `var(--font-${brandFont})`,

          span: {
            animation: `${blinker} 2s linear infinite`,
          },

          [mq[1]]: {
            fontSize: 40,
          },

          [mq[2]]: {
            fontSize: 60,
          },

          [mq[3]]: {
            fontSize: 70,
          },
        },

        h2: {
          fontSize: 20,
          fontWeight: 400,
          paddingBottom: 20,
          lineHeight: "1.3em",
          fontFamily: `var(--font-${defaultFont})`,

          [mq[1]]: {
            fontSize: 25,
          },

          [mq[2]]: {
            fontSize: 30,
          },

          [mq[3]]: {
            fontSize: 35,
          },
        },

        p: {
          fontWeight: 400,
          paddingBottom: 15,
          color: colors.defaultText,
        },

        img: {
          maxWidth: "100%",
          objectFit: "cover",
        },

        a: {
          color: colors.defaultLink,
        },

        button: {
          fontSize: "inherit",
          fontWeight: "inherit",
          fontFamily: "inherit",
          lineHeight: "inherit",
          backgroundColor: "transparent",
        },
      }}
    />
  );
};

export default GlobalStyles;
