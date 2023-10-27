import { Stack } from '@mui/material';

interface PartComponentProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
}

export default function PartComponent({ children, backgroundImage, backgroundColor }: PartComponentProps) {
  return (
    <Stack
      padding={2}
      sx={{
        ...(backgroundImage ? { backgroundImage } : {}),
        ...(backgroundColor ? { backgroundColor } : {}),
        width: '100%',
        borderRadius: '7px',
      }}
    >
      {children}
    </Stack>
  );
}
