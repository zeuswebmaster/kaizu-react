import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  Drawer,
} from '@mui/material';

import ContrastIcon from '@mui/icons-material/Contrast';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { DrawerItem, ThemeItem } from '../../components';

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
  const router = useNavigate();

  const [menuNotice, setMenuNotice] = useState<HTMLElement | null>(null);
  const [menuUser, setMenuUser] = useState<HTMLElement | null>(null);
  const [menuTheme, setMenuTheme] = useState<HTMLElement | null>(null);
  const [selectTheme, setSelectTheme] = useState<string>('light');
  const [selectFontSize, setSelectFontSize] = useState<string>('12');
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const StyledLogoWrapper = styled('div')(() => ({
    cursor: 'pointer',
    '& img': {
      width: '100%',
      height: '100%',
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
      right: '3px',
    },
  }));

  const StyleMenu = styled(Menu)<MenuProps>(() => ({
    '& .MuiPaper-root': {
      backgroundColor: 'transparent',
      minWidth: '200px',
      borderRadius: '8px',
      '& ul': {
        backgroundColor: '#1f3845',
        marginTop: '10px',
      },
    },
  }));

  const handleOpenNotificaitonsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuNotice(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuUser(event.currentTarget);
  };

  const handleOpenThemeMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuTheme(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setMenuUser(null);
  };

  const handleCloseNotificationsMenu = () => {
    setMenuNotice(null);
  };

  const handleCloseThemeMenu = () => {
    setMenuTheme(null);
  };

  const handleClickHome = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('menuPath', '/');
    }

    router('/');
  };

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          minHeight: '42px !important',
          padding: '10px 35px !important',
          backgroundColor: '#101D24',
          borderBottom: '1px solid #707070',
        }}
      >
        <StyledLogoWrapper onClick={handleClickHome}>
          <img src="/images/logo.png" alt="KAIZU Logo" loading="lazy" />
        </StyledLogoWrapper>
        <Box sx={{ flexGrow: 1 }} />{' '}
        <Stack direction="row" spacing={3} alignItems="center">
          <Stack>
            <IconButton size="small" color="inherit" sx={{ padding: 0 }} onClick={handleOpenNotificaitonsMenu}>
              <StyledBadge badgeContent={4} overlap="rectangular" color="error">
                <NotificationsNoneIcon sx={{ width: 20, height: 20, color: '#81b9ae' }} />
              </StyledBadge>
            </IconButton>
            <StyleMenu
              sx={{
                mt: '26px',
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
              <Box
                sx={{
                  position: 'relative',
                  mt: '10px',
                  '&::before': {
                    backgroundColor: '#1f3845',
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    width: 8,
                    height: 8,
                    top: '-22px',
                    transform: 'rotate(45deg)',
                    left: '4%',
                  },
                }}
              />
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
                      opacity: 10,
                      backgroundColor: '#2d414c',
                    },
                  }}
                >
                  <Typography fontSize={12}>View All Notifications</Typography>
                </Button>
              </Stack>
            </StyleMenu>
          </Stack>
          <Stack>
            <IconButton size="small" color="inherit" sx={{ padding: 0 }} onClick={handleOpenThemeMenu}>
              <ContrastIcon sx={{ width: 20, height: 20, color: '#81b9ae' }} />
            </IconButton>
            <StyleMenu
              sx={{
                mt: '26px',
              }}
              anchorEl={menuTheme}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(menuTheme)}
              onClose={handleCloseThemeMenu}
            >
              <Box
                sx={{
                  position: 'relative',
                  mt: '10px',
                  '&::before': {
                    backgroundColor: '#1f3845',
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    width: 8,
                    height: 8,
                    top: '-22px',
                    transform: 'rotate(45deg)',
                    left: '3%',
                  },
                }}
              />
              <ThemeItem
                selectTheme={selectTheme}
                setSelectTheme={setSelectTheme}
                selectFontSize={selectFontSize}
                setSelectFontSize={setSelectFontSize}
                setMenuTheme={setMenuTheme}
              />
            </StyleMenu>
          </Stack>
          <Stack>
            <IconButton size="small" color="inherit" sx={{ padding: 0 }} onClick={handleOpenUserMenu}>
              <AccountCircleIcon sx={{ width: 20, height: 20, color: '#81b9ae' }} />
            </IconButton>
            <StyleMenu
              sx={{
                mt: '26px',
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
              <Box
                sx={{
                  position: 'relative',
                  mt: '10px',
                  '&::before': {
                    backgroundColor: '#1f3845',
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    width: 8,
                    height: 8,
                    top: '-22px',
                    transform: 'rotate(45deg)',
                    left: '4%',
                  },
                }}
              />
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
            </StyleMenu>
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
            <IconButton size="small" color="inherit" sx={{ padding: 0 }} onClick={() => setOpenDrawer(true)}>
              <Avatar src="/images/Clip.png" alt="" sx={{ width: 22, height: 22 }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              sx={{
                [`& .MuiDrawer-paper`]: {
                  boxSizing: 'border-box',
                  top: '50px',
                  maxHeight: 'calc(100% - 110px)',
                  height: 'auto',
                  overflowY: 'auto',
                  boxShadow:
                    '0px 0px 17px 9px rgba(0, 0, 0, 0.2), 0px 16px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
                },
              }}
            >
              <DrawerItem />
            </Drawer>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
