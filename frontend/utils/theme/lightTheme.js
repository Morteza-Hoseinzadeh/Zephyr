import { createTheme } from "@mui/material/styles";
import "../../styles/globals.css";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6a1b9a",
      light: "#9c4dcc",
      dark: "#38006b",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      light: "#f8f8f8",
      dark: "#cccccc",
      contrastText: "#6a1b9a",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#6a1b9a",
      secondary: "#38006b",
    },
    typography: {
      fontFamily: ["Yekan Bakh, Arial"],
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

export default lightTheme;
