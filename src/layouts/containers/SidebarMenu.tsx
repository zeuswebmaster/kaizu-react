import { useLayoutEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Stack, Typography, useTheme } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem as Items } from '../../types/global';
import useWidth from '../../hooks/useWidth';
import { CalendarComponent, MenuNormal, MenuSmall, SmallContent, Sources, Trending } from '../../components';

export default function SidebarMenu() {
  const router = useNavigate();
  const { pathname } = useLocation();
  const theme = useTheme();
  const windowWidth = useWidth();

  const [currentKey, setCurrentKey] = useState<string>('');
  const [expandStudio, setExpandStudio] = useState<boolean>(false);
  const [expandCalendar, setExpandCalendar] = useState<boolean>(false);
  const [selectedNewsMenu, setSelectedNewsMenu] = useState<string>('');

  const MENUS: Items[] = [
    {
      label: (
        <Typography
          fontSize={14}
          fontWeight={500}
          color={currentKey === '/' ? theme.palette.warning.main : theme.palette.common.white}
          sx={{ paddingLeft: '10px' }}
        >
          Home
        </Typography>
      ),
      value: 'Home',
      key: '/',
      icon: <HomeIcon sx={{ color: `${currentKey === '/' ? theme.palette.warning.main : theme.palette.info.main}` }} />,
    },
    {
      label: (
        <Typography
          fontSize={14}
          fontWeight={500}
          color={currentKey.search('/studio') !== -1 ? theme.palette.warning.main : theme.palette.common.white}
          sx={{ paddingLeft: '10px' }}
        >
          Studio
        </Typography>
      ),
      value: 'Studio',
      key: 'studio',
      icon: (
        <DashboardIcon
          sx={{
            color: `${currentKey.search('/studio') !== -1 ? theme.palette.warning.main : theme.palette.info.main}`,
          }}
        />
      ),
      children: [
        {
          label: (
            <Typography
              fontSize={12}
              fontWeight={500}
              color={
                currentKey.search('/studio/dashboard') !== -1 ? theme.palette.warning.main : theme.palette.common.white
              }
            >
              Dashboards
            </Typography>
          ),
          key: '/studio/dashboard',
          icon: (
            <MenuIcon
              sx={{
                color: `${
                  currentKey.search('/studio/dashboard') !== -1 ? theme.palette.warning.main : theme.palette.info.main
                }`,
                width: '18px',
                height: '22px',
              }}
            />
          ),
        },
        {
          label: (
            <Typography
              fontSize={12}
              fontWeight={500}
              color={
                currentKey.search('/studio/rankings') !== -1 ? theme.palette.warning.main : theme.palette.common.white
              }
            >
              Rankings
            </Typography>
          ),
          key: '/studio/rankings',
          icon: (
            <MenuIcon
              sx={{
                color: `${
                  currentKey.search('/studio/rankings') !== -1 ? theme.palette.warning.main : theme.palette.info.main
                }`,
                width: '18px',
                height: '22px',
              }}
            />
          ),
        },
        {
          label: (
            <Typography
              fontSize={12}
              fontWeight={500}
              color={
                currentKey.search('/studio/watchlists') !== -1 ? theme.palette.warning.main : theme.palette.common.white
              }
            >
              Watchlists
            </Typography>
          ),
          key: '/studio/watchlists',
          icon: (
            <MenuIcon
              sx={{
                color: `${
                  currentKey.search('/studio/watchlists') !== -1 ? theme.palette.warning.main : theme.palette.info.main
                }`,
                width: '18px',
                height: '22px',
              }}
            />
          ),
        },
      ],
    },
    {
      label: (
        <Typography
          fontSize={14}
          fontWeight={500}
          color={currentKey.search('/portfolio') !== -1 ? theme.palette.warning.main : theme.palette.common.white}
          sx={{ paddingLeft: '10px' }}
        >
          Portfolio
        </Typography>
      ),
      value: 'Portfolio',
      key: '/portfolio',
      icon: (
        <BarChartIcon
          sx={{
            color: `${currentKey.search('/portfolio') !== -1 ? theme.palette.warning.main : theme.palette.info.main}`,
          }}
        />
      ),
    },
    {
      label: (
        <Typography
          fontSize={14}
          fontWeight={500}
          color={currentKey.search('/news') !== -1 ? theme.palette.warning.main : theme.palette.common.white}
          sx={{ paddingLeft: '10px' }}
        >
          News
        </Typography>
      ),
      value: 'News',
      key: '/news',
      icon: (
        <BackupTableIcon
          sx={{ color: `${currentKey.search('/news') !== -1 ? theme.palette.warning.main : theme.palette.info.main}` }}
        />
      ),
    },
    {
      label: (
        <Typography
          fontSize={14}
          fontWeight={500}
          color={currentKey.search('/calendar') !== -1 ? theme.palette.warning.main : theme.palette.common.white}
          sx={{ paddingLeft: '10px' }}
        >
          Calendar
        </Typography>
      ),
      value: 'Calendar',
      key: 'calendar',
      icon: (
        <CalendarMonthIcon
          sx={{
            color: `${currentKey.search('/calendar') !== -1 ? theme.palette.warning.main : theme.palette.info.main}`,
          }}
        />
      ),
      children: [
        {
          label: (
            <Typography
              fontSize={12}
              fontWeight={500}
              color={
                currentKey.search('/calendar/my_calendar') !== -1
                  ? theme.palette.warning.main
                  : theme.palette.common.white
              }
            >
              Macro Calendar
            </Typography>
          ),
          key: '/calendar/my_calendar',
          icon: (
            <MenuIcon
              sx={{
                color: `${
                  currentKey.search('/calendar/my_calendar') !== -1
                    ? theme.palette.warning.main
                    : theme.palette.info.main
                }`,
                width: '18px',
                height: '22px',
              }}
            />
          ),
        },
        {
          label: (
            <Typography
              fontSize={12}
              fontWeight={500}
              color={
                currentKey.search('/calendar/stocks') !== -1 ? theme.palette.warning.main : theme.palette.common.white
              }
            >
              Asian Tech stocks
            </Typography>
          ),
          key: '/calendar/stocks',
          icon: (
            <MenuIcon
              sx={{
                color: `${
                  currentKey.search('/calendar/stocks') !== -1 ? theme.palette.warning.main : theme.palette.info.main
                }`,
                width: '18px',
                height: '22px',
              }}
            />
          ),
        },
        {
          label: (
            <Typography
              fontSize={12}
              fontWeight={500}
              color={
                currentKey.search('/calendar/see_all') !== -1 ? theme.palette.warning.main : theme.palette.common.white
              }
            >
              See All
            </Typography>
          ),
          key: '/calendar/see_all',
          icon: (
            <MenuIcon
              sx={{
                color: `${
                  currentKey.search('/calendar/see_all') !== -1 ? theme.palette.warning.main : theme.palette.info.main
                }`,
                width: '18px',
                height: '22px',
              }}
            />
          ),
        },
      ],
    },
    {
      label: (
        <Typography
          fontSize={14}
          fontWeight={500}
          color={currentKey.search('/settings') !== -1 ? theme.palette.warning.main : theme.palette.common.white}
          sx={{ paddingLeft: '10px' }}
        >
          Settings
        </Typography>
      ),
      key: '/settings',
      value: 'Settings',
      icon: (
        <SettingsIcon
          sx={{
            color: `${currentKey.search('/settings') !== -1 ? theme.palette.warning.main : theme.palette.info.main}`,
          }}
        />
      ),
    },
  ];

  useLayoutEffect(() => {
    setCurrentKey(pathname);

    if (pathname?.search('/studio') !== -1) {
      setExpandStudio(true);
    } else {
      setExpandStudio(false);
    }

    if (pathname?.search('/calendar') !== -1) {
      setExpandCalendar(true);
    } else {
      setExpandCalendar(false);
    }

    setSelectedNewsMenu('');
  }, [router, pathname]);

  const handleExpandMenu = (index: string) => {
    if (index === 'studio') {
      setExpandStudio(!expandStudio);
      setExpandCalendar(false);
      return;
    }

    if (index === 'calendar') {
      setExpandCalendar(!expandCalendar);
      setExpandStudio(false);
      return;
    }

    router(index);
  };

  return (
    <>
      <Stack
        direction="column"
        spacing={2.5}
        position="fixed"
        sx={{
          height: '100%',
          overflowY: 'auto',
          padding: '93px 30px 100px 30px',
          top: 0,
        }}
      >
        <Stack>
          {windowWidth >= 1200 && (
            <MenuNormal
              expandStudio={expandStudio}
              expandCalendar={expandCalendar}
              onExpandMenu={handleExpandMenu}
              MENUS={MENUS}
            />
          )}

          {windowWidth < 1200 && <MenuSmall MENUS={MENUS} onExpandMenu={handleExpandMenu} />}
        </Stack>

        {windowWidth >= 1200 && pathname?.search('/news') !== -1 && (
          <>
            <Stack>
              <Trending />
            </Stack>
            <Stack>
              <Sources />
            </Stack>
          </>
        )}

        {windowWidth < 1200 && pathname?.search('/news') !== -1 && (
          <SmallContent selected={selectedNewsMenu} setSelected={setSelectedNewsMenu} view="news" />
        )}

        {windowWidth >= 1200 && pathname?.search('/calendar') !== -1 && pathname !== '/calendar/my_calendar' && (
          <CalendarComponent />
        )}

        {windowWidth < 1200 && pathname?.search('/calendar') !== -1 && pathname !== '/calendar/my_calendar' && (
          <SmallContent selected={selectedNewsMenu} setSelected={setSelectedNewsMenu} view="calendar" />
        )}
      </Stack>
    </>
  );
}
