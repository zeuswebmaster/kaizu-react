import { useEffect } from 'react';
import { Stack } from '@mui/material';

import { supabase, useAuthStore } from '../../features';

import Header from './Header';
import Wrapper from './Wrapper';
import Footer from './Footer';

import type { UserResponse } from '../../types/auth';

export default function MainLayout() {
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setUser = useAuthStore((state) => state.setUser);
  const logout = useAuthStore((state) => state.logout);
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  useEffect(() => {
    (async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (!error && session) {
        setIsAuthenticated(true);
        setUser(session?.user as UserResponse);
        setAccessToken(session?.access_token);
      } else {
        await logout();
      }
    })();
  }, [isAuthenticated]);

  return (
    <>
      <Stack
        sx={{
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/images/kaizu-bg-default.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <Wrapper />
        <Footer />
      </Stack>
    </>
  );
}
