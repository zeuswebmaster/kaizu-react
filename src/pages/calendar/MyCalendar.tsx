import { useState } from 'react';
import { Grid, Stack, Typography, useTheme } from '@mui/material';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import useResponsive from '../../hooks/useResponsive';
import { MenuSelectItem } from '../../components';

export default function MyCalendar() {
  const theme = useTheme();
  const isSmDown = useResponsive('down', 'sm');

  const [menu, setMenu] = useState<HTMLElement | null>(null);
  const [maskFirst, setMaskFirst] = useState<boolean>(false);
  const [maskSecond, setMaskSecond] = useState<boolean>(false);
  const [maskThird, setMaskThird] = useState<boolean>(false);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setMenu(null);
  };

  const handleDeleteFirst = () => {};

  const handleDeleteSecond = () => {};

  const handleDeleteThird = () => {};

  return (
    <Stack padding={isSmDown ? 1 : 2}>
      <Typography variant="h4" color={theme.palette.common.white} mb={2}>
        My Calendars
      </Typography>
      <Grid container spacing={isSmDown ? 1 : 2}>
        <Grid item lg={3} sm={6} xxs={12}>
          <MenuSelectItem
            icon={<CalendarMonthIcon sx={{ width: 64, height: 64, color: theme.palette.info.main }} />}
            url="/calendar/macro_calendar"
            title="My Custom Calendar"
            info="325 events"
            subInfo="Created May 13, 2023"
            menu={menu as HTMLElement}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            mask={maskFirst}
            setMask={setMaskFirst}
            onDelete={handleDeleteFirst}
            kind="calendar"
          />
        </Grid>
        <Grid item lg={3} sm={6} xxs={12}>
          <MenuSelectItem
            icon={<CalendarMonthIcon sx={{ width: 64, height: 64, color: theme.palette.info.main }} />}
            url="/calendar/macro_calendar"
            title="Bitcoin Calendar"
            info="28 events"
            subInfo="Created May 13, 2023"
            menu={menu as HTMLElement}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            mask={maskSecond}
            setMask={setMaskSecond}
            onDelete={handleDeleteSecond}
            kind="calendar"
          />
        </Grid>
        <Grid item lg={3} sm={6} xxs={12}>
          <MenuSelectItem
            icon={<CalendarMonthIcon sx={{ width: 64, height: 64, color: theme.palette.info.main }} />}
            url="/calendar/macro_calendar"
            title="U.S. Tech Stocks"
            info="42 events"
            subInfo="Created Apr 5, 2023"
            menu={menu as HTMLElement}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            mask={maskThird}
            setMask={setMaskThird}
            onDelete={handleDeleteThird}
            kind="calendar"
          />
        </Grid>
        <Grid item lg={3} sm={6} xxs={12}>
          <MenuSelectItem
            icon={
              <AddCircleOutlineSharpIcon
                sx={{
                  width: 64,
                  height: 64,
                  color: theme.palette.info.main,
                }}
              />
            }
            isEdit={false}
            title="New Calendar"
            subInfo={
              <>
                Create a new calendar <br /> and manually add events
              </>
            }
            kind="calendar"
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
