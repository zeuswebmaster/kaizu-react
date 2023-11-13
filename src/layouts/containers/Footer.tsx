import { Stack, Paper, IconButton, InputBase, useTheme } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import useResponsive from '../../hooks/useResponsive';

export default function Footer() {
  const theme = useTheme();
  const isMdDown = useResponsive('down', 'md');
  const isSmDown = useResponsive('down', 'sm');

  return (
    <Stack
      position="fixed"
      sx={{ bottom: 0, width: '100%', height: '52px', backgroundColor: theme.palette.background.paper }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={isMdDown ? 'flex-end' : 'center'}
        position="relative"
        sx={{ padding: isSmDown ? '8px 15px' : '8px 20px', height: '100%' }}
      >
        <IconButton type="button" sx={{ position: 'absolute', left: '20px' }}>
          <HelpIcon sx={{ color: theme.palette.info.main }} />
        </IconButton>
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: isMdDown ? 200 : 515,
            backgroundColor: theme.palette.secondary.main,
            height: '40px',
            borderRadius: '6px',
          }}
        >
          <Stack sx={{ p: '10px' }}>
            <SearchIcon sx={{ color: theme.palette.grey[500_80] }} />
          </Stack>
          <InputBase
            sx={{ flex: 1, color: theme.palette.grey[500_80] }}
            placeholder={isMdDown ? 'Search...' : 'Search any asset, metric or event'}
          />
        </Paper>
      </Stack>
    </Stack>
  );
}
