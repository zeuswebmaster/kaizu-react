import { useLayoutEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';

import { SidebarMenu } from '..';
import useWidth from '../../hooks/useWidth';
import useResponsive from '../../hooks/useResponsive';

export default function Wrapper() {
  const windowWidth = useWidth();
  const isXXXL = useResponsive('up', 'xxxl');
  const isXXLAndXXXL = useResponsive('between', 'xxl', 'xxxl');
  const isXLAndXXL = useResponsive('between', 'xl', 'xxl');
  const isXLDown = useResponsive('down', 'xl');
  const isXLUp = useResponsive('up', 'xl');
  const isXsDown = useResponsive('down', 'xs');
  const isSmDown = useResponsive('down', 'sm');

  const [marginValue, setMarginValue] = useState<string>('-270px');
  const [paddingLeft, setPaddingLeft] = useState<string>('48px');
  const [subMarginLeft, setSubMarginLeft] = useState<string>('');

  useLayoutEffect(() => {
    if (isXLUp) {
      setSubMarginLeft('240px');
    } else if (isXsDown) {
      setSubMarginLeft('82px');
    } else if (isSmDown) {
      setSubMarginLeft('85px');
    } else {
      setSubMarginLeft('104px');
    }

    if (isXXXL) {
      setMarginValue('-270px');
      return;
    }

    if (isXXLAndXXXL) {
      setMarginValue('-100px');
      return;
    }

    if (isXLAndXXL) {
      setMarginValue('-40px');
      return;
    }

    setMarginValue('0');
    if (isXLDown) setPaddingLeft('5px');
  }, [windowWidth]);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        paddingTop: '48px',
        paddingRight: '48px',
        paddingBottom: '48px',
        paddingLeft,
        marginTop: '45px',
        marginLeft: marginValue,
      }}
    >
      <Stack>
        <SidebarMenu />
      </Stack>
      <Stack
        sx={{
          width: '100%',
          maxWidth: 1220,
          marginBottom: '52px !important',
          marginLeft: subMarginLeft,
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
