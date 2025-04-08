import { createTheme, ThemeProvider } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

interface ThemeProps {
  children: any;
}

const Theme = ({ children }: ThemeProps) => {
  const dark = createTheme({
    palette: {
      primary: {
        main: "#F5F7FA",
        dark: "#1F2933",
        light: "#323F4B",
        contrastText: "#F5F7FA",
      },
      secondary: {
        main: "#3E4C59",
        dark: "#1b2126",
        light: "#F5F7FA",
        contrastText: "#1b2126",
      },
      background: {
        paper: "#353535",
        default: "#1F2933",
      },
    },

    breakpoints: {
      values: {
        mobile: 0,
        tablet: 600,
        laptop: 1200,
        desktop: 1680,
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: "#F5F7FA",
            borderColor: "#F5F7FA",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fill: "#F5F7FA",
          },
        },
      },

      MuiTab: {
        styleOverrides: {
          root: {
            color: "#F5F7FA",
          },
        },
      },

      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#F5F7FA",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            color: "#F5F7FA",
          },
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: {
            color: "#F5F7FA",
            backgroundColor: "#F5F7FA",
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: "#1b2126",
          },
        },
      },
    },
  });

  return <ThemeProvider theme={dark}>{children}</ThemeProvider>;
};
export default Theme;
