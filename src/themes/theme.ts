import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: `'Lato', sans-serif;`,
        textTransform: 'none',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 'normal',
      },
    },
    palette: {
      mode: 'light' as PaletteMode,
      primary: {
        main: '#003B72',
      },
      secondary: {
        main: '#000'
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root:{
            padding: '10px'
          }
        }
      }
    }
  });

  export const darkTheme = createTheme({
    typography: {
      allVariants: {
        fontFamily: `'Lato', sans-serif;`,
        textTransform: 'none',
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 'normal',
      },
    },
    palette: {
      mode: 'dark' as PaletteMode,
      primary: {
        main: '#fff',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root:{
            padding: '10px'
          }
        }
      }
    }
  });