import { Theme } from '@mui/material/styles';

export default function CssBaseline(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          minHeight: '100vh',
        },
        '#root': {
          width: '100%',
          height: '100vh',
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        '*::-webkit-scrollbar': {
          width: 0,
          height: 0,
        },
        '*::-webkit-scrollbar-track': {
          background: 'none',
        },
        '*::-webkit-scrollbar-thumb': {
          background: theme.palette.grey[700],
          borderRadius: 0,
        },
      },
    },
  };
}
