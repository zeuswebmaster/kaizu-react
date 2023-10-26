import { Backdrop, CircularProgress } from '@mui/material';

interface SpinnerBackProps {
  open: boolean;
}

export default function SpinnerBack({ open }: SpinnerBackProps) {
  return (
    <Backdrop
      sx={{ color: '#388e3c', zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'rgba(10, 40, 51, 1)' }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
