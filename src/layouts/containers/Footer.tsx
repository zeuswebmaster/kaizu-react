import { Stack, Paper, IconButton, InputBase, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';

export default function Footer() {
  const theme = useTheme();

  return (
    <Stack
      position="fixed"
      sx={{ bottom: 0, width: '100%', height: '52px', backgroundColor: theme.palette.background.paper }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        position="relative"
        sx={{ padding: '8px 20px', height: '100%' }}
      >
        <IconButton type="button" sx={{ position: 'absolute', left: '20px' }}>
          <HelpIcon sx={{ width: 21, height: 21, color: theme.palette.info.main }} />
        </IconButton>
        <Paper
          component="form"
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: 515,
            backgroundColor: '#18474C',
            height: '40px',
            borderRadius: '6px',
          }}
        >
          <Stack sx={{ p: '10px' }}>
            <SearchIcon sx={{ color: theme.palette.grey[500_80] }} />
          </Stack>
          <InputBase
            sx={{ ml: 1, flex: 1, color: theme.palette.grey[500_80] }}
            placeholder="Search any asset, metric or event"
          />
        </Paper>
      </Stack>
    </Stack>
  );
}
