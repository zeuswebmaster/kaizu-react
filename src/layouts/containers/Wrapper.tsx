import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

import { SidebarMenu } from '..';
import useWidth from '../../hooks/useWidth';

export default function Wrapper() {
  const windowWidth = useWidth();

  const [marginValue, setMarginValue] = useState<string>('-200px');

  useEffect(() => {
    if (windowWidth > 1800) {
      setMarginValue('-200px');
      return;
    }

    if (windowWidth > 1700) {
      setMarginValue('-160px');
      return;
    }

    if (windowWidth > 1800) {
      setMarginValue('-130px');
      return;
    }

    setMarginValue('0');
  }, [windowWidth]);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={4}
      sx={{
        padding: '48px',
        marginTop: '45px',
        marginLeft: marginValue,
      }}
    >
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
          backgroundColor: 'rgb(0 0 0 / 45%)',
          boxShadow:
            '0px 1px 5px 2px rgba(0, 0, 0, 0.2), 0px 2px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
        }}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
}
