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

    MuiDialog: {
    defaultProps: {
        maxWidth: "sm",
        fullWidth: true,
    },

  
      styleOverrides: {
        paper: {
          borderRadius: "18px",
          border: "1px solid #CDDEE0",
          backgroundColor: "#FFFFFF",
            "& .modal-form-body": {
    padding: "20px 24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
},

"& .modal-form-grid": {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "16px",
},

"& .modal-field-label": {
    display: "block",
    marginBottom: "6px",
    fontFamily: "var(--font-jetbrains-mono), monospace",
    fontWeight: 600,
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    color: "#245C60",
},

"& .MuiOutlinedInput-input": {
    padding: "11px 14px",
    color: "#24464C",
    "&::placeholder": { color: "#8BA4AC", opacity: 1 },
},

"& .modal-form-footer": {
    display: "flex",
    justifyContent: "flex-end",
    flexShrink: 0,
    padding: "12px 24px",
    borderTop: "1px solid #E1ECEE",
},

"& .modal-form-footer .MuiButton-root[type='submit']": {
    fontFamily: "var(--font-jetbrains-mono), monospace",
    fontSize: "14px",
    fontWeight: 600,
    borderRadius: "8px",
    minWidth: "112px",
    minHeight: "40px",
    "&:not(.Mui-disabled)": {
        backgroundColor: "#32C3B7",
        color: "#FFFFFF",
        "&:hover": { backgroundColor: "#25AFA4" },
    },
},

"& .turbine-dialog-content": {
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    overflow: "hidden",
},

"& .turbine-form": {
    display: "flex",
    flexDirection: "column",
    height: "min(580px, calc(100dvh - 160px))",
    minHeight: 0,
},

"& .turbine-form > .modal-form-body": {
    flex: "1 1 auto",
    minHeight: 0,
    overflow: "hidden",
},

"& .turbine-form > .modal-form-body > :not(.model-selection)": {
    flexShrink: 0,
},

"& .model-selection": {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    minHeight: 0,
},

"& .model-list": {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    flex: "1 1 auto",
    minHeight: 0,
    overflowY: "auto",
    overflowX: "hidden",
},

"& .model-list > label": {
    flexShrink: 0,
    width: "100%",
},

"@media (max-height: 600px)": {
    "& .turbine-dialog-content": { overflowY: "auto" },
    "& .turbine-form": { height: "auto", flexShrink: 0 },
    "& .turbine-form > .modal-form-body": { overflow: "visible" },
    "& .model-list": { flex: "none", maxHeight: "180px" },
},

"@media (max-width: 600px)": {
    "& .modal-form-body": { padding: "16px", gap: "12px" },
    "& .modal-form-grid": { gridTemplateColumns: "minmax(0, 1fr)", gap: "12px" },
    "& .modal-form-footer": { padding: "12px 16px" },
},},
      },
    },
MuiDialogTitle: {
    styleOverrides: {
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            gap: "12px",
            padding: "16px 24px",
            borderBottom: "1px solid #E1ECEE",
            color: "#044947",
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 700,
            fontSize: "22px",
            "& .MuiIconButton-root": { color: "#94A3B8" },
            "@media (max-width: 600px)": { padding: "12px 16px", fontSize: "20px" },
        },
    },
},
MuiDialogContent: {
  styleOverrides: {
    root: {
      padding: 0,
    },
  },
},

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