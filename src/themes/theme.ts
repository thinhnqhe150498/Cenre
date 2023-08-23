import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import type {} from '@mui/lab/themeAugmentation';

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
    bgCard: {
      bg: React.CSSProperties["color"];
    };
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
    bgCard: {
      bg: React.CSSProperties["color"];
    };
    
  }
}


export const LightTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Inter', sans-serif;`,
      textTransform: "none",
      fontSize: 15,
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
  status: {
    danger: "#fff",
  },
  bgCard: {
    bg: '#fff'
  },
  palette: {
    mode: "light" as PaletteMode,
    primary: {
      main: "#003B72",
    },
    secondary: {
      main: "#003B72",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px",
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    }
  },
});

export const darkTheme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `'Inter', sans-serif;`,
      textTransform: "none",
      fontSize: 15,
      fontWeight: 700,
      lineHeight: 1.2,
    },
  },
  status: {
    danger: "rgba(255, 255, 255, 0.20)",
  },
  bgCard: {
    bg: 'rgba(255, 255, 255, 0.80)'
  },
  palette: {
    mode: "dark" as PaletteMode,
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#003B72",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px",
        },
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
  },
});
