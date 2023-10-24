import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import Header from './Header';
import Wrapper from './Wrapper';
import Footer from './Footer';
import { useEffect } from 'react';

export default function MainLayout() {
  const router = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('sessionId')) {
        router('/');
      } else {
        router('/sign-in');
      }
    }
  }, [router]);

  return (
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
  );
}
