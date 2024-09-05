import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#005d8b6f",
    },
    secondary: {
      main: "#0288d1",
    },
  },
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
});

export default theme;
