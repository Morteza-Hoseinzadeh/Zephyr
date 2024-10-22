import { createTheme } from "@mui/material/styles";
import "../../styles/globals.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#9c4dcc",
      light: "#d05ce3",
      dark: "#6a0080",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      light: "#e0e0e0",
      dark: "#b3b3b3",
      contrastText: "#9c4dcc",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#d05ce3",
    },
    Typography: {
      fontFamily: ["Yekan Bakh"],
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  },
});

export default darkTheme;
