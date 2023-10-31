import { useNavigate } from 'react-router-dom';
import { Grid, Stack, Typography, useTheme, styled, Button } from '@mui/material';

import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import { PartComponent } from '../../components';

export default function Watchlists() {
  const router = useNavigate();
  const themeGlobal = useTheme();

  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#0E1D24',
    padding: '2px 6px',
    minWidth: 'auto',
    '& span': {
      marginRight: '-3px',
    },
    '& svg': { color: theme.palette.common.white, width: '20px', height: '20px' },
    '&:hover': {
      backgroundColor: '#2d4551',
    },
  }));

  return (
    <>
      <Typography variant="h4" color={themeGlobal.palette.common.white} mb={2}>
        My Watchlists
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={3} sm={6}>
          <PartComponent
            padding="11px"
            backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
          >
            <Stack direction="row" alignItems="center" justifyContent="flex-end" mb={2}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <StyledButton
                  variant="contained"
                  startIcon={<EditSharpIcon />}
                  onClick={() => router('/studio/assets')}
                />
                <StyledButton variant="contained" startIcon={<DeleteForeverSharpIcon />} />
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center" justifyContent="center">
              <Stack mb={3}>
                <img src="/icons/asset-watchlist.svg" alt="" />
              </Stack>
              <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={1}>
                Asian Tech Stocks
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="caption" color={themeGlobal.palette.common.white} mb={1}>
                  36 Assets
                </Typography>
                <Typography variant="caption" color={themeGlobal.palette.info.main} mb={1}>
                  (+18.5%)
                </Typography>
              </Stack>
              <Typography variant="caption" color={themeGlobal.palette.common.white} sx={{ opacity: '0.6' }} mb={2}>
                Created May 13, 2023
              </Typography>
            </Stack>
          </PartComponent>
        </Grid>
        <Grid item md={3} sm={6}>
          <PartComponent
            padding="11px"
            backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
          >
            <Stack direction="row" alignItems="center" justifyContent="flex-end" mb={2}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <StyledButton
                  variant="contained"
                  startIcon={<EditSharpIcon />}
                  onClick={() => router('/studio/assets')}
                />
                <StyledButton variant="contained" startIcon={<DeleteForeverSharpIcon />} />
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center" justifyContent="center">
              <Stack mb={3}>
                <img src="/icons/asset-watchlist.svg" alt="" />
              </Stack>
              <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={1}>
                Bitcoin Mining Companies
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="caption" color={themeGlobal.palette.common.white} mb={1}>
                  24 Assets
                </Typography>
                <Typography variant="caption" color={themeGlobal.palette.error.main} mb={1}>
                  (-7.5%)
                </Typography>
              </Stack>
              <Typography variant="caption" color={themeGlobal.palette.common.white} sx={{ opacity: '0.6' }} mb={2}>
                Created May 13, 2023
              </Typography>
            </Stack>
          </PartComponent>
        </Grid>
        <Grid item md={3} sm={6}>
          <PartComponent
            padding="11px"
            backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
          >
            <Stack direction="row" alignItems="center" justifyContent="flex-end" mb={2}>
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <StyledButton
                  variant="contained"
                  startIcon={<EditSharpIcon />}
                  onClick={() => router('/studio/assets')}
                />
                <StyledButton variant="contained" startIcon={<DeleteForeverSharpIcon />} />
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center" justifyContent="center">
              <Stack mb={3}>
                <img src="/icons/asset-watchlist.svg" alt="" />
              </Stack>
              <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={1}>
                Sick Bonds
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="caption" color={themeGlobal.palette.common.white} mb={1}>
                  12 Assets
                </Typography>
                <Typography variant="caption" color={themeGlobal.palette.info.main} mb={1}>
                  (+1.5%)
                </Typography>
              </Stack>
              <Typography variant="caption" color={themeGlobal.palette.common.white} sx={{ opacity: '0.6' }} mb={2}>
                Created Apr 5, 2023
              </Typography>
            </Stack>
          </PartComponent>
        </Grid>
        <Grid item md={3} sm={6}>
          <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
            <Stack direction="column" alignItems="center" justifyContent="center">
              <AddCircleOutlineSharpIcon
                sx={{
                  width: 64,
                  height: 64,
                  color: themeGlobal.palette.info.main,
                  marginBottom: '17px',
                  marginTop: '21px',
                }}
              />
              <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={1}>
                New Watchlist
              </Typography>
              <Typography
                variant="caption"
                color={themeGlobal.palette.common.white}
                sx={{ opacity: '0.6' }}
                textAlign="center"
                mb={2}
              >
                Create a new watchlist <br /> and add assets
              </Typography>
            </Stack>
          </PartComponent>
        </Grid>
      </Grid>
    </>
  );
}
