import { Theme } from '@mui/material/styles';

import CssBaseline from './CssBaseline';
import Button from './Button';
import Input from './Input';
import Tooltip from './Tooltip';
import Menu from './Menu';

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(CssBaseline(theme), Button(), Input(theme), Tooltip(), Menu(theme));
}
