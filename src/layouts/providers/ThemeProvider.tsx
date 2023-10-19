import { createContext, ReactNode } from 'react';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '../../themes';

type Context = {};

const ThemeContext = createContext<Context | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = createTheme({ direction: 'ltr' });

  return (
    <ThemeContext.Provider value={{}}>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          {children}
        </MUIThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
}
