import { useState } from 'react';
import { Grid, Stack, Typography, useTheme } from '@mui/material';

import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { MenuSelectItem } from '../../components';

export default function Dashboard() {
  const theme = useTheme();

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
    <Stack padding={2}>
      <Typography variant="h4" color={theme.palette.common.white} mb={2}>
        My Dashboards
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={3} sm={6}>
          <MenuSelectItem
            icon={<GridViewSharpIcon sx={{ width: 64, height: 64, color: theme.palette.info.main }} />}
            url="/studio/macro_dashboard"
            title="Mackro Dashboard"
            info="4 widgets"
            subInfo="Created May 13, 2023"
            menu={menu as HTMLElement}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            mask={maskFirst}
            setMask={setMaskFirst}
            onDelete={handleDeleteFirst}
            kind="dashboard"
          />
        </Grid>
        <Grid item md={3} sm={6}>
          <MenuSelectItem
            icon={<GridViewSharpIcon sx={{ width: 64, height: 64, color: theme.palette.info.main }} />}
            url="/studio/macro_dashboard"
            title="Asian Tech Stocks"
            info="4 widgets"
            subInfo="Created May 13, 2023"
            menu={menu as HTMLElement}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            mask={maskSecond}
            setMask={setMaskSecond}
            onDelete={handleDeleteSecond}
            kind="dashboard"
          />
        </Grid>
        <Grid item md={3} sm={6}>
          <MenuSelectItem
            icon={<GridViewSharpIcon sx={{ width: 64, height: 64, color: theme.palette.info.main }} />}
            url="/studio/macro_dashboard"
            title="Inflation Watch"
            info="13 widgets"
            subInfo="Created Apr 5, 2023"
            menu={menu as HTMLElement}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            mask={maskThird}
            setMask={setMaskThird}
            onDelete={handleDeleteThird}
            kind="dashboard"
          />
        </Grid>
        <Grid item md={3} sm={6}>
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
            title="New Dashboard"
            subInfo={
              <>
                Create a new dashboard <br /> and manually add widgets
              </>
            }
            kind="dashboard"
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
