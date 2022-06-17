import { grey, common } from "@mui/material/colors";

const palette = {
  light: {
    primary: {
      main: "#0846FF",
      light: "#08c1FF",
      dark: "#4608FF",
    },
    secondary: {
      light: "#FFEEBA",
      main: "#ffc108",
      dark: "#ff8f00",
    },
    background: {
      main: "#FEFEFE",
    },
  },

  dark: {
    primary: {
      main: "#4608FF",
      light: "#08c1FF",
      dark: "#0000f0",
    },
    secondary: {
      light: "#FFEEBA",
      main: "#ffc108",
      dark: "#ff8f00",
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
          background: {
            default: palette.light.background.main,
            paper: palette.light.background.main,
          },
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
                paddingLeft: 20,
                paddingRight: 20,
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
                props: { variant: "media" },
                style: {
                  color: grey[800],
                  paddingLeft: 20,
                  paddingRight: 20,
                  background: palette.light.secondary.main,
                  fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
                  "&:hover": {
                    backgroundColor: palette.light.secondary.dark,
                    // Reset on touch devices, it doesn't add specificity
                    "@media (hover: none)": {
                      backgroundColor: palette.light.secondary.dark,
                    },
                  },
                },
              },
            ],
          },
          MuiChip: {
            styleOverrides: {
              root: {
                backgroundColor: palette.light.primary.main,
                marginRight: 10,
              },
            },
            variants: [
              {
                props: { variant: "trailer" },
                style: {
                  backgroundColor: palette.light.primary.dark,
                  marginRight: 10,

                  "&:hover": {
                    backgroundColor: palette.light.primary.dark,
                    opacity: 0.8,
                    cursor: "pointer",
                  },
                },
              },
            ],
          },
        }
      : {
          MuiButton: {
            styleOverrides: {
              root: {
                color: grey[800],
                paddingLeft: 20,
                paddingRight: 20,
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
                props: { variant: "media" },
                style: {
                  color: grey[800],
                  paddingLeft: 20,
                  paddingRight: 20,
                  background: palette.light.secondary.main,
                  fontFamily: "Roboto, 'Helvetica Neue', Arial, sans-serif",
                  "&:hover": {
                    backgroundColor: palette.light.secondary.dark,
                    // Reset on touch devices, it doesn't add specificity
                    "@media (hover: none)": {
                      backgroundColor: palette.light.secondary.dark,
                    },
                  },
                },
              },
            ],
          },
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: palette.light.primary.dark,
              },
            },
          },
        }),

    MuiCard: {
      styleOverrides: {
        root: {
          "&.MuiMovieSliderCard": {
            margin: "0 auto",
            padding: "40px",
            background: "transparent",
            boxShadow: "none",

            "& .MuiCardMedia-root": {
              display: "block",
              width: "100%",
              height: "100%",
              //margin: "0 5%",
              "&:hover": {
                opacity: 0.8,
                cursor: "pointer",
              },
            },

            "& .MuiCardContent-root": {
              textAlign: "left",
              padding: 0,
              paddingTop: "16px",
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: palette.dark.primary.main,
          marginRight: 10,
        },
      },
      variants: [
        {
          props: { variant: "trailer" },
          style: {
            backgroundColor: palette.dark.primary.dark,
            marginRight: 10,

            "&:hover": {
              backgroundColor: palette.dark.primary.dark,
              opacity: 0.8,
              cursor: "pointer",
            },
          },
        },
      ],
    },
  },
});
