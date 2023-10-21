import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Badge,
  styled,
  BadgeProps,
  Stack,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  MenuProps,
  Button,
} from '@mui/material';

import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const notifications: {
  id: number;
  primaryText: string;
  secondaryText: string;
  icon: React.ReactNode;
}[] = [
  {
    id: 1,
    primaryText: 'Bitcoin price up 5% in the past 24 hours',
    secondaryText: '6 mins ago',
    icon: <CurrencyBitcoinIcon sx={{ color: '#fff' }} />,
  },
  {
    id: 2,
    primaryText: 'Bitcoin price up 5% in the past 24 hours',
    secondaryText: '6 mins ago',
    icon: <CurrencyBitcoinIcon sx={{ color: '#fff' }} />,
  },
  {
    id: 3,
    primaryText: 'Bitcoin price up 5% in the past 24 hours',
    secondaryText: '6 mins ago',
    icon: <CurrencyBitcoinIcon sx={{ color: '#fff' }} />,
  },
];

const users = [
  {
    id: 1,
    title: 'Profile',
    icon: <PersonIcon sx={{ color: '#3aad9b' }} />,
  },
  {
    id: 2,
    title: 'Settings',
    icon: <SettingsIcon sx={{ color: '#3aad9b' }} />,
  },
  {
    id: 3,
    title: 'Sign out',
    icon: <ExitToAppIcon sx={{ color: '#3aad9b' }} />,
  },
];

export default function Header() {
  const [menuNotice, setMenuNotice] = useState<HTMLElement | null>(null);
  const [menuUser, setMenuUser] = useState<HTMLElement | null>(null);

  const StyledLogWrapper = styled('div')(() => ({
    '& img': {
      width: '100%',
      height: '100%',
    },
  }));

  const StyleIconWrapper = styled('div')(() => ({
    '& img': {
      width: '18px',
      height: '18px',
    },
  }));

  const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    '& .MuiBadge-badge': {
      borderRadius: '3px',
      minWidth: '13px',
      height: '14px',
      padding: '0',
      backgroundColor: '#BE3856',
      top: '5px',
    },
  }));

  const StyleNotificationMenu = styled(Menu)<MenuProps>(() => ({
    '& .MuiPaper-root': {
      backgroundColor: '#1f3845',
      minWidth: '200px',
    },
  }));

  const StyleUserMenu = styled(Menu)<MenuProps>(() => ({
    '& .MuiPaper-root': {
      backgroundColor: '#1f3845',
      minWidth: '200px',
    },
  }));

  const handleOpenNotificaitonsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuNotice(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setMenuUser(null);
  };

  const handleCloseNotificationsMenu = () => {
    setMenuNotice(null);
  };

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          minHeight: '42px !important',
          padding: '10px 35px !important',
          backgroundColor: '#101D24',
          borderBottom: '1px solid #707070',
        }}
      >
        <NavLink to="/">
          <StyledLogWrapper>
            <img src="/images/logo.png" alt="KAIZU Logo" loading="lazy" />
          </StyledLogWrapper>
        </NavLink>
        <Box sx={{ flexGrow: 1 }} />{' '}
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack>
            <IconButton size="small" color="inherit" sx={{ padding: 0 }} onClick={handleOpenNotificaitonsMenu}>
              <StyledBadge badgeContent={4} overlap="rectangular" color="error">
                <StyleIconWrapper>
                  <img src="/icons/bell.svg" alt="" />
                </StyleIconWrapper>
              </StyledBadge>
            </IconButton>
            <StyleNotificationMenu
              sx={{
                mt: '35px',
              }}
              anchorEl={menuNotice}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(menuNotice)}
              onClose={handleCloseNotificationsMenu}
            >
              {notifications.map((item) => (
                <MenuItem key={item.id} onClick={handleCloseNotificationsMenu}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Stack>{item.icon}</Stack>
                    <Stack>
                      <Typography fontSize={14} fontWeight={500} color="#fff">
                        {item.primaryText}
                      </Typography>
                      <Typography fontSize={12} color="#9cafb8">
                        {item.secondaryText}
                      </Typography>
                    </Stack>
                  </Stack>
                </MenuItem>
              ))}
              <Stack sx={{ padding: '5px 17px' }}>
                <Button
                  variant="contained"
                  sx={{
                    width: '100%',
                    backgroundColor: '#111f27',
                    '&:hover': {
                      opacity: 25,
                      backgroundColor: '#2d414c',
                    },
                  }}
                >
                  View All Notifications
                </Button>
              </Stack>
            </StyleNotificationMenu>
          </Stack>
          <IconButton size="small" color="inherit" sx={{ padding: 0 }}>
            <StyleIconWrapper>
              <img src="/icons/menu-theme.svg" alt="" />
            </StyleIconWrapper>
          </IconButton>
          <Stack>
            <IconButton size="small" color="inherit" sx={{ padding: 0 }} onClick={handleOpenUserMenu}>
              <StyleIconWrapper>
                <img src="/icons/user.svg" alt="" />
              </StyleIconWrapper>
            </IconButton>
            <StyleUserMenu
              sx={{
                mt: '35px',
              }}
              anchorEl={menuUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(menuUser)}
              onClose={handleCloseUserMenu}
            >
              {users.map((item) => (
                <MenuItem key={item.id} onClick={handleCloseUserMenu}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Stack>{item.icon}</Stack>
                    <Stack>
                      <Typography fontSize={14} fontWeight={500} color="#fff">
                        {item.title}
                      </Typography>
                    </Stack>
                  </Stack>
                </MenuItem>
              ))}
            </StyleUserMenu>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography fontSize={13} color="#43BAA3" fontWeight={500}>
              Sun Aug 13
            </Typography>
            <Typography fontSize={13} color="#fff" fontWeight={500}>
              04:36
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: 25,
              height: 25,
              backgroundColor: '#182C37',
              borderRadius: '100%',
            }}
          >
            <IconButton size="small" color="inherit" sx={{ padding: 0 }}>
              <Avatar src="/images/Clip.png" alt="" sx={{ width: 22, height: 22 }} />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
