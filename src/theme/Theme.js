import { grey, common } from "@mui/material/colors";

const palette = {
  light: {
    primary: {
      main: "#0846FF",
      light: "#08c1FF",
      dark: "#4608FF",
    },
    secondary: {
      main: "#ffc108",
    },
    background: {
      main: "#fefefe",
    },
  },

  dark: {
    primary: {
      main: "#4608FF",
      light: "#08c1FF",
      dark: "##0000f0",
    },
    secondary: {
      main: "#ffc108",
    },
    background: {
      main: "#201C17",
    },
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          divider: grey,
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          divider: common.white,
          background: {
            default: palette.dark.background.main,
            paper: palette.dark.background.main,
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    body1: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  },
});

export const getThemedComponents = (mode) => ({
  components: {
    ...(mode === "light"
      ? {
          MuiButton: {
            styleOverrides: {
              root: {
                color: common.white,
                background: palette.light.secondary.main,
                fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
              },
            },
            variants: [
              {
                props: { variant: "nav" },
                style: {
                  color: common.white,
                  background: "transparent",
                  fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
                },
              },
              {
                props: { variant: "contained" },
                style: {
                  fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
                },
              },
              {
                props: { variant: "outlined" },
                style: {
                  color: palette.light.primary.main,
                },
              },
              {
                props: { variant: "primary", color: "primary" },
                style: {
                  // border: "4px dashed blue",
                },
              },
            ],
          },
          MuiList: {
            styleOverrides: {
              root: {},
            },
          },
          MuiAccordion: {
            styleOverrides: {
              root: {
                color: common.white,
                fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
              },
            },
          },
        }
      : {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: palette.light.primary.dark,
              },
            },
          },
        }),
  },
});
