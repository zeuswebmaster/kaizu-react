import { Backdrop, CircularProgress } from '@mui/material';

export default function Spinner() {
  return (
    <Backdrop
      sx={{ color: '#388e3c', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'rgba(0, 0, 0, 0)' }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
