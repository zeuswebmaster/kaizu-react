import { Stack, Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';

export default function Footer() {
  return (
    <Stack position="fixed" sx={{ bottom: 0, width: '100%', height: '52px', backgroundColor: '#101D24' }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        position="relative"
        sx={{ padding: '8px 20px', height: '100%' }}
      >
        <IconButton type="button" sx={{ position: 'absolute', left: '20px' }}>
          <HelpIcon sx={{ width: 21, height: 21, color: '#43bba4' }} />
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
            <SearchIcon sx={{ color: '#a3c1d0' }} />
          </Stack>
          <InputBase sx={{ ml: 1, flex: 1, color: '#AECADA' }} placeholder="Search any asset, metric or event" />
        </Paper>
      </Stack>
    </Stack>
  );
}
