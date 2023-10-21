import { Theme } from '@mui/material/styles';

import CssBaseline from './CssBaseline';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(CssBaseline(theme));
}
