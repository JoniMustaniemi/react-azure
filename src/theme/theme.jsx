import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#005d8b6f",
    },
    secondary: {
      main: "#0687a1",
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h1: {
      fontWeight: 600,
    },
  },
});

export default theme;
