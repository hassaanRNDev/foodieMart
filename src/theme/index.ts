import { AppFontSizes } from "./../constants/AppFontSizes";
import { DefaultTheme } from "@react-navigation/native";
import { createTheme } from "@shopify/restyle";
import { scale } from "react-native-size-matters";
import { AppFonts } from "../constants/fonts"

export const GRADIENT_COLORS = ["#83D2E6", "#67ACDD", "#64A8DC"];

export const palette = {
  primary: "#FFB727",
  secondary: "#11112D", //"#F15B25",
  backgroundLight: "#FFFFFF",
  backgroundDark: "#FFFFFF",
  gradientPrimaryOne: "#FF9405",
  gradientPrimaryTwo: "#FF9137",
  gradientPrimaryThree: "#F1C860",
  gradientPrimaryFour: "#EED348",
  textColor: "#11112D",
  bodyTextColor: "#8C8C8C",
  borderColor: "#CCCCCC",
  transparent: "transparent",
  negative: "#E4002B",
  lightGrey: "#F2F2F2",
  grey2: "#F5F5F5",
  black: "#000000",
  background: "#F8F8F8",
  yellow: "#FEDC00",
  green: "#199F03",
  lightGreen: "#1ED300",
  red: "#EF2929",
  positiveGreen: "#DCFFD7",
  negativeRed: "#FF2E00",
  sharpOrange: "#F15B25",
  greenSolid: "#1ED300",
  greyLight: "rgb(248,248,248)",
  lightBlue: "#95D4FF",
  blue: "#65A9DD",
  gradient3: "#83D2E6",
};

export const theme = createTheme({
  navigation: {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: palette.primary,
    },
  },
  colors: {
    primary: palette.primary,
    background: palette.background,
    secondary: palette.secondary,
    textColor: palette.textColor,
    bodyTextColor: palette.borderColor,
    borderColor: palette.borderColor,
    error: palette.negative,
    transparent: "transparent",
    timerBackground: palette.lightGrey,
    black: palette.black,
    backgroundLight: palette.backgroundLight,
    yellow: palette.yellow,
    green: palette.green,
    lightGreen: palette.lightGreen,
    red: palette.red,
    positiveGreen: palette.positiveGreen,
    negativeRed: palette.negativeRed,
    orange: palette.gradientPrimaryOne,
    sharpOrange: palette.sharpOrange,
    greenSolid: palette?.greenSolid,
    greyLight: palette?.greyLight,
    lightBlue: palette?.lightBlue,
    blue: palette?.blue,
    gradient3: palette?.gradient3,
  },
  spacing: {
    tiny: scale(2),
    xSmall: scale(4),
    small: scale(8),
    medium: scale(12),
    large: scale(16),
    xLarge: scale(20),
    "2xl": scale(24),
    "3xl": scale(28),
    "4xl": scale(32),
  },

  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    // common
    primaryText: {
      color: "background",
      fontSize: AppFontSizes[14],
      fontFamily: AppFonts.APP_FONT_EXTRA_BOLD,
    },
    disableText: {
      color: "background",
      fontSize: AppFontSizes[20],
      fontFamily: AppFonts.APP_FONT_EXTRA_BOLD,
    },
    smallText: {
      color: "background",
      fontSize: AppFontSizes[14],
      fontFamily: AppFonts.APP_FONT_EXTRA_BOLD,
    },
    secondaryText: {
      color: "background",
      fontSize: AppFontSizes[12],
      fontFamily: AppFonts.APP_FONT_EXTRA_BOLD,
    },
    textText: {
      color: "secondary",
      fontSize: AppFontSizes[14],
      fontFamily: AppFonts.APP_FONT_EXTRA_BOLD,
    },
    outlineText: {
      color: "secondary",
      fontSize: AppFontSizes[14],
      fontFamily: AppFonts.APP_FONT_EXTRA_BOLD,
    },
    lightText: {
      color: "secondary",
      fontSize: AppFontSizes[14],
      fontFamily: AppFonts.APP_FONT_EXTRA_BOLD,
    },
    "heading-h1": {
      color: "textColor",
      fontSize: scale(30),
      fontFamily: AppFonts.APP_FONT_EXTRA_BOLD,
    },
    "heading-h2": {
      color: "textColor",
      fontSize: scale(24),
    },
    "heading-h3": {
      color: "textColor",
      fontSize: scale(18),
      fontFamily: AppFonts.APP_FONT_BOLD,
    },
    "heading-h4": {
      color: "textColor",
      fontSize: scale(18),
      fontFamily: AppFonts.APP_FONT_BOLD,
    },
    "heading-h5": {
      color: "textColor",
      fontSize: scale(14),
      fontFamily: AppFonts.APP_FONT_MEDIUM,
    },
    "body-text": {
      color: "bodyTextColor",
      fontSize: scale(12),
      fontFamily: AppFonts.APP_FONT_MEDIUM,
    },
    "button-text": {
      color: "bodyTextColor",
      fontSize: scale(14),
      fontFamily: AppFonts.APP_FONT_EXTRA_BOLD,
    },
    header: {
      color: "textColor",
      fontSize: scale(18),
      fontFamily: AppFonts.APP_FONT_BOLD,
    },
    "drawer-text": {
      color: "textColor",
      fontSize: scale(15),
      fontFamily: AppFonts.APP_FONT_SEMI_BOLD,
    },
    error: {
      color: "error",
      fontSize: scale(12),
      fontFamily: AppFonts.APP_FONT_REGULAR,
    },
    "200": {
      fontFamily: AppFonts.APP_FONT_EXTRA_LIGHT,
    },
    "300": {
      fontFamily: AppFonts.APP_FONT_LIGHT,
    },
    "400": {
      fontFamily: AppFonts.APP_FONT_REGULAR,
    },
    "500": {
      fontFamily: AppFonts.APP_FONT_MEDIUM,
    },
    "600": {
      fontFamily: AppFonts.APP_FONT_SEMI_BOLD,
    },
    "700": {
      fontFamily: AppFonts.APP_FONT_BOLD,
    },
    "800": {
      fontFamily: AppFonts.APP_FONT_EXTRA_BOLD,
    },
  },
  buttonVariants: {
    defaults: {},
    primary: {
      borderRadius: scale(10),
      height: scale(54),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "secondary",
    },
    disable: {
      borderRadius: scale(10),
      height: scale(54),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "bodyTextColor",
    },
    small: {
      borderRadius: scale(4),
      height: scale(44),
      width: scale(150),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "secondary",
    },
    outline: {
      borderRadius: scale(4),
      height: scale(44),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: "secondary",
    },
    text: {
      height: scale(20),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent",
    },
    secondary: {
      borderRadius: scale(8),
      height: scale(38),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "secondary",
    },
    light: {
      borderRadius: scale(4),
      height: scale(44),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "backgroundLight",
    },
  },

  inputVariants: {
    default: {
      borderRadius: "tiny",
      backgroundColor: "white",
      borderColor: "borderColor",
      borderWidth: 1,
    },
    underline: {
      borderBottomWidth: 2,
      borderBottomColor: "border",
    },
    none: {
      borderBottomWidth: 0,
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    primary: palette.primary,
    background: palette.background,
    secondary: palette.secondary,
    textColor: palette.textColor,
    bodyTextColor: palette.borderColor,
    borderColor: palette.borderColor,
    error: palette.negative,
    transparent: "transparent",
    timerBackground: palette.lightGrey,
    black: palette.black,
    backgroundLight: palette.backgroundLight,
    yellow: palette.yellow,
    green: palette.green,
    lightGreen: palette.lightGreen,
    red: palette.red,
    positiveGreen: palette.positiveGreen,
    negativeRed: palette.negativeRed,
    orange: palette.gradientPrimaryOne,
    sharpOrange: palette.sharpOrange,
    greenSolid: palette?.greenSolid,
    greyLight: palette?.greyLight,
    lightBlue: palette?.lightBlue,
    blue: palette?.blue,
    gradient3: palette?.gradient3,
  },
};
