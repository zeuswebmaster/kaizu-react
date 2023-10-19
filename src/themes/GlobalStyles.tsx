import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export default function GlobalStyles() {
  return (
    <MUIGlobalStyles
      styles={{
        ':root': {
          backgroundColor: '#242424',
          colorSchema: 'light dark',
        },
        a: {
          fontWeight: 500,
          color: '#646cff',
          textDecoration: 'inherit',
        },
        'a:hover': {
          color: '#535bf2',
        },
        body: {
          margin: 0,
          minWidth: '1024px',
          height: '100%',
          backgroundColor: '#242424',
        },
        '#root': {
          width: '100%',
          height: '100vh',
        },
      }}
    />
  );
}
