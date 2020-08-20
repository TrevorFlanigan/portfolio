import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const palette = {
  primary: { main: "#000000", contrastText: "#ffffff", light: "#ff3333" },
  secondary: { main: "#ffffff", contrastText: "#ffffff" },
  dark: "#ff3333",
};

const typography = {
  fontFamily: [
    "Spartan",
    "Open Sans",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 1050,
    lg: 1280,
    xl: 1920,
  },
};

const themeName = "Charm Wild Blue Yonder Giraffe";
let DarkTheme = createMuiTheme({
  palette,
  themeName,
  typography,
  breakpoints,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "transparent",
      },
      paperAnchorRight: {
        backgroundColor: "transparent",
      },
    },
    MuiListSubheader: {
      root: {
        color: palette.primary.main,
      },
    },
    MuiList: {
      root: {
        transition: "visibility 10s",
      },
    },
    MuiListItem: {
      root: {
        transition: "visiblility 10s",
      },
    },
    MuiCollapse: {
      container: {
        transition: "all 10s",
      },
    },
  },
});
DarkTheme = responsiveFontSizes(DarkTheme);

DarkTheme.typography.h1 = {
  fontSize: "6rem",
  "@media (min-width:600px)": {
    fontSize: "2.1rem",
  },
  [DarkTheme.breakpoints.up("md")]: {
    fontSize: "6rem",
  },
};

export default DarkTheme;
