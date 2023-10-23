import { Theme } from '@mui/material/styles';

import CssBaseline from './CssBaseline';
import Button from './Button';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(CssBaseline(theme), Button());
}
