import { Roboto_Mono, Special_Elite } from "next/font/google";

export const roboto = Roboto_Mono({
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  weight: ["100", "400", "500", "600"],
  variable: "--font-roboto",
});

export const specialElite = Special_Elite({
  display: "swap",
  style: ["normal"],
  subsets: ["latin"],
  weight: "400",
  variable: "--font-specialElite",
});

export const brandFont = "specialElite";
export const defaultFont = "roboto";
