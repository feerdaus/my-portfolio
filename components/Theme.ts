import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    blue: {
      blue_100: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    blue?: {
      blue_100?: string;
    };
  }
}

const theme = createTheme({
  blue: {
    blue_100: "#0D86F8",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 960,
      lg: 1264,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#931f1d",
      light: "#cda2ab",
    },
    secondary: {
      main: "#083d77",
      light: "#ffefda",
    },
    text: {
      primary: "#1E152A",
      secondary: "#344055",
    },
  },
  typography: {
    fontFamily: "'Libre Franklin', sans-serif;",
    h2: {
      fontSize: "28px",
      lineHeight: "42px",
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "32px",
    },
    h4: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      fontSize: "14px",
      lineHeight: "16px",
    },
    body2: {
      fontSize: "12px",
      lineHeight: "16px",
    },
    button: {
      fontSize: "16px",
      lineHeight: "19px",
      textTransform: "none",
    },
  },
});

export default theme;

// #9c5765
// #f5c687
