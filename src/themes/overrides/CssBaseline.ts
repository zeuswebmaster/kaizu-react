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
          minWidth: '768px',
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
          width: '6px',
          height: '6px',
        },
        '*::-webkit-scrollbar-track': {
          background: 'none',
        },
        '*::-webkit-scrollbar-thumb': {
          background: theme.palette.grey[700],
          borderRadius: '10px',
        },
      },
    },
  };
}
