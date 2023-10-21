import { alpha } from '@mui/material/styles';

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

interface GradientsPaletteOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

interface ChartPaletteOptions {
  blue: string;
  grey: string;
  light: string;
  dark: string;
}

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
}

declare module '@mui/material' {
  interface Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

// SETUP COLORS
const PRIMARY = {
  lighter: '#327EBB',
  light: '#196EB2',
  main: '#005EAA',
  dark: '#004176',
  darker: '#002544',
};
const SECONDARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#00855B',
  dark: '#007B55',
  darker: '#005249',
};
const INFO = {
  lighter: '#327EBB',
  light: '#196EB2',
  main: '#005EAA',
  dark: '#004176',
  darker: '#002544',
};

const SUCCESS = {
  lighter: '#A5D6A7',
  light: '#81C784',
  main: '#43A047',
  dark: '#388E3C',
  darker: '#1B5E20',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#CC6F3D',
  main: '#DB6A00',
  dark: '#B76F0F',
  darker: '#7A4F01',
};

const ERROR = {
  lighter: '#FFE7D9',
  light: '#CC5056',
  main: '#DB1F22',
  dark: '#B72136',
  darker: '#7A0C2E',
};

const GREY = {
  grey: '#0D1117',
  0: '#FFFFFF',
  30: '#EEEEEE',
  100: '#EDF0F3',
  200: '#D0D2D3',
  300: '#DFE3E8',
  400: '#A2A4A7',
  500: '#8B8D91',
  600: '#73777C',
  700: '#5C6066',
  800: '#454950',
  900: '#1C2024',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  blue: PRIMARY.main,
  grey: GREY[900],
  dark: PRIMARY.darker,
  light: PRIMARY.lighter,
};

const COMMON = {
  common: {
    black: '#000',
    white: '#FFF',
    red: '#FC636B',
    pink: '#E91E63',
    green: '#3BE8B0',
  },
  primary: { ...PRIMARY, contrastText: '#FFF' },
  secondary: { ...SECONDARY, contrastText: '#FFF' },
  info: { ...INFO, contrastText: '#FFF' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: '#FFF' },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#FFF', default: GREY[30] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: GREY[30], secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[900], default: GREY[900] },
    action: { active: GREY[500], ...COMMON.action },
  },
} as const;

export default palette;
