import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#101010",
    },
    secondary: {
      main: "#3E3E3E",
    },
    error: {
      main: "#ff1744",
    },
    background: {
      default: "#fff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 24px",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },

  typography: {
    body1: {
      color: "#0B1134CC",
    },
  },
});
