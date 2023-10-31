import { Fragment, useLayoutEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Collapse, IconButton, List, Menu, Stack, Tooltip, Typography, styled, useTheme } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem as Items } from '../../types/global';
import useWidth from '../../hooks/useWidth';

export default function SidebarMenu() {
  const router = useNavigate();
  const { pathname } = useLocation();

  const theme = useTheme();
  const windowWidth = useWidth();

  const [currentKey, setCurrentKey] = useState<string>('');
  const [expandStudio, setExpandStudio] = useState<boolean>(false);
  const [expandCalendar, setExpandCalendar] = useState<boolean>(false);
  const [menuStudio, setMenuStudio] = useState<HTMLElement | null>(null);
  const [menuCalendar, setMenuCalendar] = useState<HTMLElement | null>(null);

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
                currentKey.search('/calendar/macro_calendar') !== -1
                  ? theme.palette.warning.main
                  : theme.palette.common.white
              }
            >
              Macro Calendar
            </Typography>
          ),
          key: '/calendar/macro_calendar',
          icon: (
            <MenuIcon
              sx={{
                color: `${
                  currentKey.search('/calendar/macro_calendar') !== -1
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

  const StyleMenuWrapper = styled('div')(() => ({
    '&:hover': {
      '& svg': {
        color: theme.palette.warning.main,
      },
      '& p': {
        color: theme.palette.warning.main,
      },
    },
  }));

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

  const handleOpenStudioMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuStudio(event.currentTarget);
  };

  const handleOpenCalendarMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuCalendar(event.currentTarget);
  };

  const handleCloseStudioMenu = (index?: string) => {
    setMenuStudio(null);

    if (index) router(index);
  };

  const handleCloseCalendarMenu = (index?: string) => {
    setMenuCalendar(null);

    if (index) router(index);
  };

  return (
    <>
      {windowWidth >= 1200 && (
        <Stack
          sx={{
            position: 'fixed',
            width: '187px',
            borderRadius: '8px',
            backgroundColor: theme.palette.background.paper,
            boxShadow:
              '0px 1px 9px 6px rgba(0, 0, 0, 0.2), 0px 13px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
          }}
        >
          <List sx={{ padding: 0 }}>
            {MENUS.map((item: Items) => (
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
                    {item?.children?.map((subItem: Items) => (
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
      )}

      {windowWidth < 1200 && (
        <Stack
          sx={{
            width: '50px',
            borderRadius: '8px',
            backgroundColor: '#091319',
            position: 'fixed',
          }}
        >
          {MENUS.map((item: Items) => (
            <Fragment key={item.key}>
              <Tooltip title={item.value} arrow placement="right">
                <IconButton
                  sx={{
                    padding: '12px',
                    '&:hover': {
                      '& svg': {
                        color: theme.palette.warning.main,
                      },
                    },
                  }}
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    if (item.key === 'studio') {
                      handleOpenStudioMenu(e);
                      return;
                    }

                    if (item.key === 'calendar') {
                      handleOpenCalendarMenu(e);
                      return;
                    }

                    handleExpandMenu(item.key);
                  }}
                >
                  {item.icon}
                </IconButton>
              </Tooltip>

              {item.key === 'studio' && (
                <Menu
                  sx={{ ml: 7 }}
                  anchorEl={menuStudio}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(menuStudio)}
                  onClose={() => handleCloseStudioMenu()}
                >
                  {item?.children?.map((subItem: Items) => (
                    <Stack
                      key={subItem.key}
                      sx={{
                        padding: '8px 16px',
                        cursor: 'pointer',
                        '&:hover': {
                          '& p': {
                            color: theme.palette.warning.main,
                          },
                        },
                      }}
                      onClick={() => handleCloseStudioMenu(subItem.key)}
                    >
                      {subItem.label}
                    </Stack>
                  ))}
                </Menu>
              )}

              {item.key === 'calendar' && (
                <Menu
                  sx={{ ml: 7 }}
                  anchorEl={menuCalendar}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(menuCalendar)}
                  onClose={() => handleCloseCalendarMenu()}
                >
                  {item?.children?.map((subItem: Items) => (
                    <Stack
                      key={subItem.key}
                      sx={{
                        padding: '8px 16px',
                        cursor: 'pointer',
                        '&:hover': {
                          '& p': {
                            color: theme.palette.warning.main,
                          },
                        },
                      }}
                      onClick={() => handleCloseCalendarMenu(subItem.key)}
                    >
                      {subItem.label}
                    </Stack>
                  ))}
                </Menu>
              )}
            </Fragment>
          ))}
        </Stack>
      )}
    </>
  );
}
