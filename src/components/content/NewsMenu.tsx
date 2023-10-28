import { Stack, Typography, MenuProps, Box, useTheme, styled, Menu } from '@mui/material';

interface NewsMenuProps {
  menuKind: HTMLElement;
  onClose: (index: string) => void;
}

export default function NewsMenu({ menuKind, onClose }: NewsMenuProps) {
  const theme = useTheme();

  const StyleMenu = styled(Menu)<MenuProps>(() => ({
    '& .MuiPaper-root': {
      backgroundColor: 'transparent',
      minWidth: '500px',
      borderRadius: '8px',
      boxShadow: 'none',
      '& ul': {
        marginTop: '10px',
        position: 'relative',
        backgroundImage: 'linear-gradient(to left, rgba(29, 51, 63, 1), rgba(41, 65, 79, 1))',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      },
    },
  }));

  return (
    <StyleMenu
      sx={{ marginTop: '26px' }}
      anchorEl={menuKind}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={Boolean(menuKind)}
      onClose={() => onClose('news')}
    >
      <Box
        sx={{
          position: 'relative',
          '&::before': {
            backgroundColor: '#223946',
            content: '""',
            display: 'block',
            position: 'absolute',
            width: 8,
            height: 8,
            top: '-12px',
            transform: 'rotate(45deg)',
            left: 'calc((100% / 2) - 5px)',
          },
        }}
      />
      <Stack sx={{ padding: '65px 25px 25px 25px' }}>
        <Typography variant="body1" color={theme.palette.grey[400]}>
          AUG 3, 2023 - BITCOIN PRICE
        </Typography>
        <Typography variant="h4" color={theme.palette.common.white}>
          Bullish Opportunity
        </Typography>
        <Typography variant="caption" color={theme.palette.grey[500]}>
          Time Period: Aug 3, 2017 - Aug 3, 2023, Data Type: Chart + News
        </Typography>
      </Stack>
    </StyleMenu>
  );
}
