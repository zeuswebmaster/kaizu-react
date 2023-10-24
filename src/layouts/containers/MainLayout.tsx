import { Stack } from '@mui/material';
import Header from './Header';
import Wrapper from './Wrapper';
import Footer from './Footer';

export default function MainLayout() {
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
