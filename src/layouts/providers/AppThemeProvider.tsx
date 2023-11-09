import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';

import { ComponentsOverrides, palette, typography, shadows } from '../../themes';

type Context = {
  themeMode: 'light' | 'dark';
  setThemeMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

const AppThemeContext = createContext<Context | null>(null);

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }
}

export default function AppThemeProvider({ children }: { children: ReactNode }) {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const themeOptions = useMemo(
    () => ({
      palette: themeMode === 'light' ? palette.light : palette.dark,
      typography,
      breakpoints: { values: { xs: 480, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1600, xxxl: 1800 } },
      shadows: themeMode === 'light' ? shadows.light : shadows.dark,
    }),
    [themeMode]
  );

  const values = useMemo(() => ({ themeMode, setThemeMode }), [themeMode, setThemeMode]);

  const theme = createTheme(themeOptions as ThemeOptions);
  theme.components = ComponentsOverrides(theme);

  return (
    <AppThemeContext.Provider value={values}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}

export function useAppTheme(): Context {
  const context = useContext(AppThemeContext);

  if (context === null) {
    throw new Error('useAppTheme must be used within an AppThemeProvider');
  }

  return context;
}
