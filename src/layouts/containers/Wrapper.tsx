import { useLayoutEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

import { SidebarMenu } from '..';
import useWidth from '../../hooks/useWidth';

export default function Wrapper() {
  const windowWidth = useWidth();

  const [marginValue, setMarginValue] = useState<string>('-200px');
  const [leftValue, setLeftValue] = useState<string>('130px');

  useLayoutEffect(() => {
    if (windowWidth > 1920) {
      setMarginValue('-180px');
      setLeftValue('130px');
      return;
    }

    if (windowWidth > 1800) {
      setMarginValue('-200px');
      setLeftValue('80px');
      return;
    }

    if (windowWidth > 1700) {
      setMarginValue('-160px');
      setLeftValue('30px');
      return;
    }

    if (windowWidth > 1600) {
      setMarginValue('-80px');
      setLeftValue('15px');
      return;
    }

    setLeftValue('0');
    setMarginValue('0');
  }, [windowWidth]);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      position="relative"
      sx={{
        padding: '48px',
        marginTop: '45px',
        marginLeft: marginValue,
      }}
    >
      <Stack
        position="fixed"
        left={leftValue}
        top={0}
        sx={{
          height: '100%',
          paddingTop: '91px',
          paddingBottom: '100px',
          overflowY: 'auto',
          paddingLeft: '40px',
          paddingRight: '40px',
        }}
      >
        <SidebarMenu />
      </Stack>
      <Stack
        sx={{
          width: 1220,
          marginBottom: '52px !important',
          marginLeft: windowWidth >= 1200 ? '219px' : '64px',
        }}
      >
        <Stack
          sx={{
            width: '100%',
            borderRadius: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            boxShadow:
              '0px 1px 5px 2px rgba(0, 0, 0, 0.2), 0px 2px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
          }}
        >
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
}
