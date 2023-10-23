import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

import { SidebarMenu } from '..';

export default function Wrapper() {
  return (
    <Stack direction="row" justifyContent="center" spacing={4} sx={{ padding: '48px', marginLeft: '-250px' }}>
      <Stack>
        <SidebarMenu />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1220,
          height: 600,
          borderRadius: '8px',
          backgroundColor: 'rgb(0 0 0 / 40%)',
          boxShadow:
            '0px 1px 5px 2px rgba(0, 0, 0, 0.2), 0px 2px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
        }}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
}
