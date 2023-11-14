import { Stack, Typography, MenuProps, Box, useTheme, MenuItem } from '@mui/material';
import { StyledComponent } from '@emotion/styled';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HomeIcon from '@mui/icons-material/Home';
import useResponsive from '../../hooks/useResponsive';

interface DashboardKindMenuProps {
  StyleMenu: StyledComponent<MenuProps>;
  menuKind: HTMLElement;
  onClose: (index: string) => void;
  view: string;
}

export default function DashboardKindMenu({ menuKind, onClose, StyleMenu, view }: DashboardKindMenuProps) {
  const theme = useTheme();
  const isSmDown = useResponsive('down', 'sm');

  return (
    <StyleMenu
      disableScrollLock
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
      onClose={() => onClose('kind')}
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
      <Stack
        position="absolute"
        sx={{
          minWidth: '288px',
          height: isSmDown ? 150 : 110,
          top: 0,
          backgroundImage: 'linear-gradient(to left, rgba(29, 51, 63, 1), rgba(41, 65, 79, 1))',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      ></Stack>
      <Stack
        position="absolute"
        sx={{
          minWidth: '288px',
          height: isSmDown ? 153 : 110,
          top: isSmDown ? 150 : 110,
          backgroundColor: '#293f4c',
        }}
      ></Stack>
      <MenuItem onClick={() => onClose('kind')}>
        <Typography variant="subtitle2" color={theme.palette.common.white}>
          {view === 'macro_dashboard' ? 'Macro Dashboard' : 'My Custom Calendar'}
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => onClose('kind')}>
        <Typography variant="subtitle2" color={theme.palette.common.white}>
          {view === 'macro_dashboard' ? 'Asia Tech Stocks' : 'Bitcoin Calendar'}
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => onClose('kind')}>
        <Typography variant="subtitle2" color={theme.palette.common.white}>
          {view === 'macro_dashboard' ? 'Inflation Watch' : 'U.S. Tech Stocks'}
        </Typography>
      </MenuItem>
      <MenuItem onClick={() => onClose('kind')}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
          >
            <HomeIcon sx={{ width: 18, height: 18, color: theme.palette.common.white }} />
          </Stack>
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Set As Default
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={() => onClose('kind')}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
          >
            <Stack sx={{ width: 14, height: 14 }}>
              <img src="/images/edit.png" alt="" />
            </Stack>
          </Stack>
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Rename
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={() => onClose('kind')}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
          >
            <MoreHorizIcon sx={{ width: 18, height: 18, color: theme.palette.common.white }} />
          </Stack>
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Manage
          </Typography>
        </Stack>
      </MenuItem>
    </StyleMenu>
  );
}
