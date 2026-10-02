"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#044947",
      dark: "#033B39",
      contrastText: "#FFFFFF",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          fontFamily: "var(--font-outfit), sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          textTransform: "none",
          borderRadius: "8px",
          minHeight: "40px",
          padding: "8px 16px",
        },
      },
    },
  },
});