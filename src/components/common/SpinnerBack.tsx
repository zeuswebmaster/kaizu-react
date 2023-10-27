import { Backdrop, CircularProgress } from '@mui/material';

interface SpinnerBackProps {
  open: boolean;
  backgroundColor?: string;
  color?: string;
}

export default function SpinnerBack({
  open,
  backgroundColor = 'rgba(0, 0, 0, 0.2)',
  color = '#fff',
}: SpinnerBackProps) {
  return (
    <Backdrop sx={{ color, zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor }} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
