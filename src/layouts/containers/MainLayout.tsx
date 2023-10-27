import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';

import { useAuthStore } from '../../features';

import Header from './Header';
import Wrapper from './Wrapper';
import Footer from './Footer';
import { SpinnerBack } from '../../components';

export default function MainLayout() {
  const router = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const loadUser = useAuthStore((state) => state.loadUser);

  useLayoutEffect(() => {
    (async () => {
      await loadUser();
    })();
  }, [isAuthenticated, router]);

  return (
    <>
      {!isAuthenticated ? (
        <SpinnerBack open={!isAuthenticated} />
      ) : (
        <Stack
          sx={{
            width: '100%',
            minHeight: '100%',
            backgroundImage: 'url(/images/kaizu-bg-default.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <Header />
          <Wrapper />
          <Footer />
        </Stack>
      )}
    </>
  );
}
