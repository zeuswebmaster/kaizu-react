import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Collapse, List, Stack, Typography, styled } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem } from '../../types/global';

export default function SidebarMenu() {
  const router = useNavigate();

  const [currentKey, setCurrentKey] = useState<string>('');
  const [expandStudio, setExpandStudio] = useState<boolean>(false);
  const [expandCalendar, setExpandCalendar] = useState<boolean>(false);

  const MENUS: MenuItem[] = [
    {
      label: (
        <Typography
          fontSize={14}
          fontWeight={500}
          color={currentKey === '/' ? '#eecc81' : '#fff'}
          sx={{ paddingLeft: '10px' }}
        >
          Home
        </Typography>
      ),
      key: '/',
      icon: <HomeIcon sx={{ color: `${currentKey === '/' ? '#eecc81' : '#6bb8a4'}` }} />,
    },
    {
      label: (
        <Typography
          fontSize={14}
          fontWeight={500}
          color={currentKey === 'studio' ? '#eecc81' : '#fff'}
          sx={{ paddingLeft: '10px' }}
        >
          Studio
        </Typography>
      ),
      key: 'studio',
      icon: <DashboardIcon sx={{ color: `${currentKey === 'studio' ? '#eecc81' : '#6bb8a4'}` }} />,
      children: [
        {
          label: (
            <Typography fontSize={12} fontWeight={500} color={currentKey === '/studio/dashboard' ? '#eecc81' : '#fff'}>
              Dashboards
            </Typography>
          ),
          key: '/studio/dashboard',
          icon: (
            <MenuIcon
              sx={{
                color: `${currentKey === 'studio/dashboard' ? '#eecc81' : '#6bb8a4'}`,
                width: '18px',
                height: '22px',
              }}
            />
          ),
        },
        {
          label: (
            <Typography fontSize={12} fontWeight={500} color={currentKey === '/studio/rankings' ? '#eecc81' : '#fff'}>
              Rankings
            </Typography>
          ),
          key: '/studio/rankings',
          icon: (
            <MenuIcon
              sx={{
                color: `${currentKey === '/studio/rankings' ? '#eecc81' : '#6bb8a4'}`,
                width: '18px',
                height: '22px',
              }}
            />
          ),
        },
        {
          label: (
            <Typography fontSize={12} fontWeight={500} color={currentKey === '/studio/watchlists' ? '#eecc81' : '#fff'}>
              Watchlists
            </Typography>
          ),
          key: '/studio/watchlists',
          icon: (
            <MenuIcon
              sx={{
                color: `${currentKey === '/studio/watchlists' ? '#eecc81' : '#6bb8a4'}`,
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
          color={currentKey === '/portfolio' ? '#eecc81' : '#fff'}
          sx={{ paddingLeft: '10px' }}
        >
          Portfolio
        </Typography>
      ),
      key: '/portfolio',
      icon: <BarChartIcon sx={{ color: `${currentKey === '/portfolio' ? '#eecc81' : '#6bb8a4'}` }} />,
    },
    {
      label: (
        <Typography
          fontSize={14}
          fontWeight={500}
          color={currentKey === '/news' ? '#eecc81' : '#fff'}
          sx={{ paddingLeft: '10px' }}
        >
          News
        </Typography>
      ),
      key: '/news',
      icon: <BackupTableIcon sx={{ color: `${currentKey === '/news' ? '#eecc81' : '#6bb8a4'}` }} />,
    },
    {
      label: (
        <Typography
          fontSize={14}
          fontWeight={500}
          color={currentKey === 'calendar' ? '#eecc81' : '#fff'}
          sx={{ paddingLeft: '10px' }}
        >
          Calendar
        </Typography>
      ),
      key: 'calendar',
      icon: <CalendarMonthIcon sx={{ color: `${currentKey === 'calendar' ? '#eecc81' : '#6bb8a4'}` }} />,
      children: [
        {
          label: (
            <Typography
              fontSize={12}
              fontWeight={500}
              color={currentKey === '/calendar/macro_calendar' ? '#eecc81' : '#fff'}
            >
              Macro Calendar
            </Typography>
          ),
          key: '/calendar/macro_calendar',
          icon: (
            <MenuIcon
              sx={{
                color: `${currentKey === '/calendar/macro_calendar' ? '#eecc81' : '#6bb8a4'}`,
                width: '18px',
                height: '22px',
              }}
            />
          ),
        },
        {
          label: (
            <Typography fontSize={12} fontWeight={500} color={currentKey === '/calendar/stocks' ? '#eecc81' : '#fff'}>
              Asian Tech stocks
            </Typography>
          ),
          key: '/calendar/stocks',
          icon: (
            <MenuIcon
              sx={{
                color: `${currentKey === '/calendar/stocks' ? '#eecc81' : '#6bb8a4'}`,
                width: '18px',
                height: '22px',
              }}
            />
          ),
        },
        {
          label: (
            <Typography fontSize={12} fontWeight={500} color={currentKey === '/calendar/see_all' ? '#eecc81' : '#fff'}>
              See All
            </Typography>
          ),
          key: '/calendar/see_all',
          icon: (
            <MenuIcon
              sx={{
                color: `${currentKey === '/calendar/see_all' ? '#eecc81' : '#6bb8a4'}`,
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
          color={currentKey === '/settings' ? '#eecc81' : '#fff'}
          sx={{ paddingLeft: '10px' }}
        >
          Settings
        </Typography>
      ),
      key: '/settings',
      icon: <SettingsIcon sx={{ color: `${currentKey === '/settings' ? '#eecc81' : '#6bb8a4'}` }} />,
    },
  ];

  const StyleMenuWrapper = styled('div')(() => ({
    '&:hover': {
      '& svg': {
        color: '#eecc81',
      },
      '& p': {
        color: '#eecc81',
      },
    },
  }));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('menuPath')) {
        setCurrentKey(window.localStorage.getItem('menuPath') as string);

        if (window.localStorage.getItem('menuPath')?.search('studio') !== -1) {
          setExpandStudio(true);
        } else {
          setExpandStudio(false);
        }

        if (window.localStorage.getItem('menuPath')?.search('calendar') !== -1) {
          setExpandCalendar(true);
        } else {
          setExpandCalendar(false);
        }
      } else {
        setCurrentKey('/');
      }
    }
  }, [router]);

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

    if (typeof window !== 'undefined') window.localStorage.setItem('menuPath', index);

    router(index);
  };

  return (
    <Stack
      sx={{
        width: '187px',
        borderRadius: '8px',
        backgroundColor: '#101D24',
        boxShadow:
          '0px 1px 9px 6px rgba(0, 0, 0, 0.2), 0px 13px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
      }}
    >
      <List sx={{ padding: 0 }}>
        {MENUS.map((item: MenuItem) => (
          <Fragment key={item.key}>
            <StyleMenuWrapper
              sx={{
                width: '100%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => handleExpandMenu(item.key)}
            >
              <Stack
                sx={{
                  width: '40px',
                  backgroundColor: '#091319',
                  borderRight: '1px solid rgb(0 0 0 / 10%)',
                  borderTopLeftRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  padding: '12px 8px',
                }}
              >
                {item.icon}
              </Stack>
              <Stack>{item.label}</Stack>
            </StyleMenuWrapper>

            <Collapse in={item.key === 'studio' ? expandStudio : expandCalendar} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item?.children?.map((subItem: MenuItem) => (
                  <StyleMenuWrapper
                    key={subItem.key}
                    sx={{
                      width: '100%',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onClick={() => handleExpandMenu(subItem.key)}
                  >
                    <Stack
                      sx={{
                        width: '40px',
                        backgroundColor: '#091319',
                        borderRight: '1px solid rgb(0 0 0 / 10%)',
                        borderTopLeftRadius: '8px',
                        borderBottomLeftRadius: '8px',
                        padding: '17px 8px',
                      }}
                    ></Stack>
                    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ paddingLeft: '5px' }}>
                      {subItem.icon}
                      {subItem.label}
                    </Stack>
                  </StyleMenuWrapper>
                ))}
              </List>
            </Collapse>
          </Fragment>
        ))}
      </List>
    </Stack>
  );
}
