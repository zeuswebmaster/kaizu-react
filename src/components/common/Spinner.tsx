import { Stack, CircularProgress } from '@mui/material';

export default function Spinner() {
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '47%',
        left: '47%',
        width: '64px',
        height: '64px',
      }}
    >
      <CircularProgress size="lg" />
    </Stack>
  );
}
