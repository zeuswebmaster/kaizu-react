import { useState } from 'react';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { MenuSelectItem } from '../../components';
import useResponsive from '../../hooks/useResponsive';

export default function Watchlists() {
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
        My Watchlists
      </Typography>
      <Grid container spacing={isSmDown ? 1 : 2}>
        <Grid item lg={3} sm={6} xxs={12}>
          <MenuSelectItem
            icon={<img src="/icons/asset-watchlist.svg" alt="" />}
            url="/studio/assets"
            title="Asian Tech Stocks"
            info="36 Assets"
            value={18.5}
            subInfo="Created May 13, 2023"
            menu={menu as HTMLElement}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            mask={maskFirst}
            setMask={setMaskFirst}
            onDelete={handleDeleteFirst}
            kind="watchlist"
          />
        </Grid>
        <Grid item lg={3} sm={6} xxs={12}>
          <MenuSelectItem
            icon={<img src="/icons/asset-watchlist.svg" alt="" />}
            url="/studio/assets"
            title="Bitcoin Mining Companies"
            info="24 Assets"
            value={-7.5}
            subInfo="Created May 13, 2023"
            menu={menu as HTMLElement}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            mask={maskSecond}
            setMask={setMaskSecond}
            onDelete={handleDeleteSecond}
            kind="watchlist"
          />
        </Grid>
        <Grid item lg={3} sm={6} xxs={12}>
          <MenuSelectItem
            icon={<img src="/icons/asset-watchlist.svg" alt="" />}
            url="/studio/assets"
            title="Sick Bonds"
            info="12 Assets"
            value={1.5}
            subInfo="Created Apr 5, 2023"
            menu={menu as HTMLElement}
            onOpen={handleOpenMenu}
            onClose={handleCloseMenu}
            mask={maskThird}
            setMask={setMaskThird}
            onDelete={handleDeleteThird}
            kind="watchlist"
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
            title="New Watchlist"
            subInfo={
              <>
                Create a new watchlist <br /> and add assets
              </>
            }
            kind="dashboard"
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
