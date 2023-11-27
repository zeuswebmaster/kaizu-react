import { Theme } from '@mui/material/styles';
import useResponsive from '../../hooks/useResponsive';

export default function Menu(theme: Theme) {
  const isLgDown = useResponsive('down', 'lg');

  return {
    MuiMenu: {
      defaultProps: {
        elevation: 2,
      },
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backgroundColor: 'transparent',
            minWidth: '288px',
            borderRadius: '8px',
            boxShadow: 'none',
            '& ul': {
              backgroundColor: theme.palette.secondary.main,
              marginTop: isLgDown ? 0 : '10px',
              borderTopLeftRadius: '4px',
              borderTopRightRadius: '4px',
            },
          },
        },
      },
    },
  };
}
