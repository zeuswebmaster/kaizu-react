import { Theme } from '@mui/material/styles';

export default function Input(theme: Theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: 1,
            borderColor: theme.palette.primary.main,
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 2,
              borderColor: theme.palette.primary.main,
            },
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
          },
        },
      },
    },
  };
}
