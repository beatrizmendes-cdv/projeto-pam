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

          // Área dos campos do formulário.
          "& .modal-form-body": {
            padding: "28px 36px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          },

          // Duas colunas em telas maiores.
          "& .modal-form-grid": {
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "24px",
          },

          // Labels externos dos campos.
          "& .modal-field-label": {
            display: "block",
            marginBottom: "12px",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontWeight: 600,
            fontSize: "14px",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color: "#245C60",
          },

          // Campos outlined dentro do modal.
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            backgroundColor: "#FFFFFF",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "16px",

            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CDDEE0",
            },

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#8BACB0",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#20B8AE",
            },

            "&.Mui-error .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D32F2F",
            },
          },

          "& .MuiOutlinedInput-input": {
            padding: "18px 20px",
            color: "#24464C",

            "&::placeholder": {
              color: "#8BA4AC",
              opacity: 1,
            },
          },

          // Rodapé do formulário.
          "& .modal-form-footer": {
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px 36px",
            borderTop: "1px solid #E1ECEE",
          },

          // Apenas o botão de envio do rodapé.
          "& .modal-form-footer .MuiButton-root[type='submit']": {
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "10px",
            minWidth: "140px",
            minHeight: "52px",

            "&:not(.Mui-disabled)": {
              backgroundColor: "#32C3B7",
              color: "#FFFFFF",

              "&:hover": {
                backgroundColor: "#25AFA4",
              },
            },
          },

          "& .MuiRadio-root": {
            color: "#A8C6CA",

            "&.Mui-checked": {
              color: "#20B8AE",
            },

            "&.Mui-disabled": {
              color: "#CBD5E1",
            },
          },

          "@media (max-width: 600px)": {
            "& .modal-form-body": {
              padding: "24px 20px",
            },

            "& .modal-form-grid": {
              gridTemplateColumns: "minmax(0, 1fr)",
            },

            "& .modal-form-footer": {
              padding: "20px",
            },
          },
        },
      },
    },

MuiDialogTitle: {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      padding: "24px 32px",
      borderBottom: "1px solid #E1ECEE",
      color: "#044947",
      fontFamily: "var(--font-outfit), sans-serif",
      fontWeight: 700,
      fontSize: "28px",

      "& .MuiIconButton-root": {
            color: "#94A3B8",
          },

      "@media (max-width: 600px)": {
        padding: "20px 16px",
        fontSize: "22px",
      },
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