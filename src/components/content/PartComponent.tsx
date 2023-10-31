import { Stack } from '@mui/material';

interface PartComponentProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundColor?: string;
  padding?: string;
}

export default function PartComponent({
  children,
  backgroundImage,
  backgroundColor,
  padding = '16px',
}: PartComponentProps) {
  return (
    <Stack
      position="relative"
      padding={padding}
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
