import { Grid, Stack, Typography, useTheme, styled, Button } from '@mui/material';

import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { PartComponent } from '../../components';

export default function Dashboard() {
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
    <Stack>
      <Typography variant="h4" color={themeGlobal.palette.common.white} mb={2}>
        My Dashboards
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={3} sm={6}>
          <PartComponent
            padding="11px"
            backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
          >
            <Stack direction="row" alignItems="center" justifyContent="flex-end">
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <StyledButton variant="contained" startIcon={<EditSharpIcon />} />
                <StyledButton variant="contained" startIcon={<DeleteForeverSharpIcon />} />
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center" justifyContent="center">
              <GridViewSharpIcon
                sx={{ width: 64, height: 64, color: themeGlobal.palette.info.main, marginBottom: '17px' }}
              />
              <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={1}>
                Macro Dashboard
              </Typography>
              <Typography variant="caption" color={themeGlobal.palette.common.white} mb={1}>
                4 widgets
              </Typography>
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
            <Stack direction="row" alignItems="center" justifyContent="flex-end">
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <StyledButton variant="contained" startIcon={<EditSharpIcon />} />
                <StyledButton variant="contained" startIcon={<DeleteForeverSharpIcon />} />
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center" justifyContent="center">
              <GridViewSharpIcon
                sx={{ width: 64, height: 64, color: themeGlobal.palette.info.main, marginBottom: '17px' }}
              />
              <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={1}>
                Asian Tech Stocks
              </Typography>
              <Typography variant="caption" color={themeGlobal.palette.common.white} mb={1}>
                4 widgets
              </Typography>
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
            <Stack direction="row" alignItems="center" justifyContent="flex-end">
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <StyledButton variant="contained" startIcon={<EditSharpIcon />} />
                <StyledButton variant="contained" startIcon={<DeleteForeverSharpIcon />} />
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center" justifyContent="center">
              <GridViewSharpIcon
                sx={{ width: 64, height: 64, color: themeGlobal.palette.info.main, marginBottom: '17px' }}
              />
              <Typography variant="subtitle1" color={themeGlobal.palette.common.white} mb={1}>
                Inflation Watch
              </Typography>
              <Typography variant="caption" color={themeGlobal.palette.common.white} mb={1}>
                13 widgets
              </Typography>
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
                New Dashboard
              </Typography>
              <Typography variant="caption" color={themeGlobal.palette.common.white} sx={{ opacity: '0.6' }} mb={2}>
                Create a new dashboard <br /> and manually add widgets
              </Typography>
            </Stack>
          </PartComponent>
        </Grid>
      </Grid>
    </Stack>
  );
}
