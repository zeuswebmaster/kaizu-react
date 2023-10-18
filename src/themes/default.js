import { createTheme } from '@mui/material/styles';

// KAIZU App theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#11c593',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
          margin: 0,
          backgroundImage: 'url(/img/kaizu-bg-default.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
        '#root': {
          height: '100%',
          overflow: 'scroll',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(12 58 49 / 80%)',
          padding: '25px',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(12 58 49 / 80%)',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(12 58 49 / 35%)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgb(12 58 49 / 50%)',
          },
          '&:active': {
            backgroundColor: 'rgb(12 58 49 / 65%)',
          },
          '&:disabled': {
            backgroundColor: 'rgb(12 58 49 / 20%)',
            color: 'rgba(255, 255, 255, 0.5)',
          },
        },
      },
    },
    MuiLink: {
      root: {
        color: '#ffffff',
      },
    },
  },
  typography: {
    h1: {
      color: '#f5f5f5',
    },
    h2: {
      color: '#f5f5f5',
    },
    h3: {
      color: '#f5f5f5',
    },
    h4: {
      color: '#f5f5f5',
    },
    h5: {
      color: '#f5f5f5',
    },
    h6: {
      color: '#f5f5f5',
    },
    body1: {
      color: '#f5f5f5', // for paragraph text (p)
    },
    body2: {
      color: '#f5f5f5', // another style for paragraph text
    },
  },
});

export default theme;
