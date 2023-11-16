import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import useResponsive from '../../hooks/useResponsive';
import { PartComponent } from '../../components';

const MENU_TABS = [
  {
    id: 1,
    title: 'Profile',
    key: '/settings/profile',
  },
  {
    id: 2,
    title: 'Notifications',
    key: '/settings/notifications',
  },
  {
    id: 3,
    title: 'Subscription',
    key: '/settings/subscription',
  },
  {
    id: 4,
    title: 'Invoices',
    key: '/settings/invoices',
  },
  {
    id: 5,
    title: 'Saved Templates',
    key: '/settings/templates',
  },
  {
    id: 6,
    title: 'Activity Log',
    key: '/settings/activity_log',
  },
];

export default function Settings() {
  const router = useNavigate();
  const { pathname } = useLocation();
  const theme = useTheme();
  const isSmDown = useResponsive('down', 'sm');
  const isLLGUp = useResponsive('up', 'llg');

  const [selectedTab, setSelectedTab] = useState<string>('');

  useEffect(() => {
    setSelectedTab(pathname);
  }, [router]);

  const handleClickTab = (key: string) => {
    setSelectedTab(key);
    router(key);
  };

  return (
    <Stack direction="column" spacing={2} padding={isSmDown ? 1 : 2}>
      <Grid container>
        {MENU_TABS.map((item, key: number) => (
          <Grid key={item.id} item llg={2} md={4} xs={6} xxs={12}>
            <Stack
              bgcolor={selectedTab === item.key ? theme.palette.warning.main : theme.palette.common.black}
              p={1.3}
              textAlign="center"
              sx={{
                borderTopLeftRadius: key === 0 && isLLGUp ? '8px' : 0,
                borderBottomLeftRadius: key === 0 && isLLGUp ? '8px' : 0,
                borderTopRightRadius: key === MENU_TABS.length - 1 && isLLGUp ? '8px' : 0,
                borderBottomRightRadius: key === MENU_TABS.length - 1 && isLLGUp ? '8px' : 0,
                cursor: 'pointer',
              }}
              onClick={() => handleClickTab(item.key)}
            >
              <Typography
                variant="subtitle1"
                color={selectedTab === item.key ? theme.palette.common.black : theme.palette.info.main}
              >
                {item.title}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <PartComponent
        backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(14, 29, 36, 1))"
        {...(isSmDown ? { padding: '8px' } : {})}
      >
        <Outlet />
      </PartComponent>
    </Stack>
  );
}
