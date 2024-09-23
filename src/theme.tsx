import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9d96d4",
    },
    secondary: {
      main: "#4532d4",
      dark: "#32268c"
    },
    text: {
      primary: "#f1f0f4",
      secondary: "#d9d7f5",
    },
    background: {
      default: "#0a0910",
      paper: "#0a0910"
    }
  }
});

export default theme;