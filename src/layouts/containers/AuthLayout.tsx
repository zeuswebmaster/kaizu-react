import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Stack, Typography, styled, useTheme } from '@mui/material';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function AuthLayout() {
  const theme = useTheme();
  const router = useNavigate();
  const { pathname } = useLocation();

  const StyledIconWrapper = styled('div')(() => ({
    width: '135px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  }));

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0a2833',
      }}
    >
      <Stack
        direction="row"
        sx={{
          maxWidth: '1566px',
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/bg_login.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '40px',
        }}
      >
        <Stack sx={{ width: '50%', height: '100%' }}></Stack>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            width: '50%',
            height: '100%',
            borderRadius: '8px',
            backgroundColor: theme.palette.common.white,
            opacity: '90%',
            padding: '80px 40px',
          }}
        >
          <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
            <Stack width={14} height={30}>
              {pathname !== '/sign-in' && (
                <NavLink to="/sign-in">
                  <ArrowBackIosIcon sx={{ color: '#294856', paddingTop: '5px' }} />
                </NavLink>
              )}
            </Stack>
            <NavLink to="/">
              <StyledIconWrapper>
                <img src="/icons/logo_1.svg" alt="" />
              </StyledIconWrapper>
            </NavLink>
            <Stack></Stack>
          </Stack>
          <Outlet />
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
            {pathname === '/sign-in' && (
              <>
                <Typography variant="subtitle1">Don`t have an account?</Typography>
                <Stack
                  onClick={() => router('/sign-up')}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: '75%',
                    },
                  }}
                >
                  <Typography variant="subtitle1" color="#248ac0">
                    Sign up
                  </Typography>
                </Stack>
              </>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
