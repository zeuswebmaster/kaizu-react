import { Stack, Typography, MenuProps, Box, useTheme, Button, styled, Switch } from '@mui/material';
import { StyledComponent } from '@emotion/styled';

interface ControllerMenuProps {
  StyleMenu: StyledComponent<MenuProps>;
  menuKind: HTMLElement;
  onClose: (index: string) => void;
}

export default function ControllerMenu({ menuKind, onClose, StyleMenu }: ControllerMenuProps) {
  const themeGlobal = useTheme();

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 38,
    height: 21,
    borderRadius: 12,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: '2px 3px 2px 5px',
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 17,
      height: 17,
      borderRadius: 12,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  return (
    <StyleMenu
      sx={{ marginTop: '26px' }}
      anchorEl={menuKind}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={Boolean(menuKind)}
      onClose={() => onClose('controller')}
    >
      <Box
        sx={{
          position: 'relative',
          '&::before': {
            backgroundColor: '#223946',
            content: '""',
            display: 'block',
            position: 'absolute',
            width: 8,
            height: 8,
            top: '-12px',
            transform: 'rotate(45deg)',
            left: 'calc((100% / 2) - 5px)',
          },
        }}
      />
      <Stack direction="column" spacing={2.5} sx={{ padding: '5px 17px' }}>
        <Stack direction="row" alignItems="center" spacing={10} justifyContent="space-between">
          <Typography variant="subtitle1" color={themeGlobal.palette.common.white}>
            Chart Type
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button
              variant="contained"
              sx={{
                borderRadius: '15px',
                backgroundColor: themeGlobal.palette.primary.main,
                padding: '1px 13px',
                minWidth: 0,
                '&:hover': {
                  backgroundColor: '#2d4551',
                },
              }}
            >
              <Typography variant="subtitle2">Line</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: '15px',
                backgroundColor: 'transparent',
                padding: '1px 13px',
                minWidth: 0,
                '&:hover': {
                  backgroundColor: '#2d4551',
                },
              }}
            >
              <Typography variant="body2" sx={{ opacity: '0.6' }}>
                Area
              </Typography>
            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={10} justifyContent="space-between">
          <Typography variant="subtitle1" color={themeGlobal.palette.common.white}>
            Grid Lines
          </Typography>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={10} justifyContent="space-between">
          <Typography variant="subtitle1" color={themeGlobal.palette.common.white}>
            Widget Size
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button
              variant="contained"
              sx={{
                borderRadius: '15px',
                backgroundColor: themeGlobal.palette.primary.main,
                padding: '1px 13px',
                minWidth: 0,
                '&:hover': {
                  backgroundColor: '#2d4551',
                },
              }}
            >
              <Typography variant="subtitle2">Half</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: '15px',
                backgroundColor: 'transparent',
                padding: '1px 13px',
                minWidth: 0,
                '&:hover': {
                  backgroundColor: '#2d4551',
                },
              }}
            >
              <Typography variant="body2" sx={{ opacity: '0.6' }}>
                Full
              </Typography>
            </Button>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={10} justifyContent="space-between">
          <Typography variant="subtitle1" color={themeGlobal.palette.common.white}>
            Colors
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Stack
              sx={{
                width: 24,
                height: 24,
                borderRadius: 20,
                backgroundColor: '#b3c0dd',
                cursor: 'pointer',
                border: `3px solid ${themeGlobal.palette.primary.main}`,
              }}
            ></Stack>
            <Stack
              sx={{ width: 20, height: 20, borderRadius: 20, backgroundColor: '#f6ca76', cursor: 'pointer' }}
            ></Stack>
          </Stack>
        </Stack>
      </Stack>
    </StyleMenu>
  );
}
