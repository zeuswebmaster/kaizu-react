import { Stack, Typography, MenuProps, Box, useTheme, MenuItem } from '@mui/material';
import { StyledComponent } from '@emotion/styled';

import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

interface MoreSettingMenuProps {
  StyleMenu: StyledComponent<MenuProps>;
  menuKind: HTMLElement;
  onClose: (index: string) => void;
}

export default function MoreSettingMenu({ menuKind, onClose, StyleMenu }: MoreSettingMenuProps) {
  const theme = useTheme();

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
      onClose={() => onClose('moreSetting')}
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
      <MenuItem onClick={() => onClose('moreSetting')}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
          >
            <CompareArrowsIcon sx={{ width: 18, height: 18, color: theme.palette.common.white }} />
          </Stack>
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Compare
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={() => onClose('moreSetting')}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
          >
            <NotificationsNoneIcon sx={{ width: 18, height: 18, color: theme.palette.common.white }} />
          </Stack>
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Create Alert
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={() => onClose('moreSetting')}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
          >
            <Stack sx={{ width: 14, height: 14 }}>
              <img src="/images/share.png" alt="" />
            </Stack>
          </Stack>
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Share
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={() => onClose('moreSetting')}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
          >
            <CameraAltOutlinedIcon sx={{ width: 18, height: 18, color: theme.palette.common.white }} />
          </Stack>
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Screenshot
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={() => onClose('moreSetting')}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
          >
            <OpenWithOutlinedIcon sx={{ width: 18, height: 18, color: theme.palette.common.white }} />
          </Stack>
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Move
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={() => onClose('moreSetting')}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
          >
            <VisibilityOffOutlinedIcon sx={{ width: 18, height: 18, color: theme.palette.common.white }} />
          </Stack>
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Hide
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem onClick={() => onClose('moreSetting')}>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ width: 22, height: 22, borderRadius: '4px', backgroundColor: '#4a5f6b' }}
          >
            <DeleteOutlinedIcon sx={{ width: 18, height: 18, color: theme.palette.common.white }} />
          </Stack>
          <Typography variant="subtitle2" color={theme.palette.common.white}>
            Delete
          </Typography>
        </Stack>
      </MenuItem>
    </StyleMenu>
  );
}
