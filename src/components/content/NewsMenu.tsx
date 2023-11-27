import { useEffect, useState } from 'react';
import { Stack, Typography, Box, useTheme, Menu, Skeleton } from '@mui/material';
import dayjs from 'dayjs';
import { ParsedEvent, ReconnectInterval, createParser } from 'eventsource-parser';

import useResponsive from '../../hooks/useResponsive';
import { useAuthStore } from '../../features';

interface NewsMenuProps {
  menuKind: HTMLElement;
  onClose: (index: string) => void;
}

export default function NewsMenu({ menuKind, onClose }: NewsMenuProps) {
  const theme = useTheme();
  const isLgDown = useResponsive('down', 'lg');
  const accessToken = useAuthStore((state) => state.accessToken);

  const [bullishText, setBullishText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleAIStream = async () => {
    setBullishText('');
    setLoading(true);

    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/openai/btc-price`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message:
          'Predictive Intel: {"type": "chart-data", "asset": "BTC", "price": 29208.72, "24hr-change-pct" : 0.37, "7day-change-pct" : 0.07, response-type: "hypothetical long-form bullish case at least three paragraphs"}',
      }),
    });

    setLoading(false);
    if (!response.body) throw new Error('ReadableStream not yet supported in this browser.');

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;

    function onParse(event: ParsedEvent | ReconnectInterval) {
      if (event.type === 'event') {
        const data = JSON.parse(event.data);
        setBullishText((prev) => `${prev}${data}`);
      }
    }

    const parser = createParser(onParse);

    while (!done) {
      /* eslint-disable no-await-in-loop */
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);

      if (done || chunkValue.includes('[DONE]')) break;

      parser.feed(chunkValue);
    }
  };

  useEffect(() => {
    (async () => {
      if (menuKind) {
        await handleAIStream();
      }
    })();
  }, [menuKind]);

  return (
    <Menu
      disableScrollLock
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
      <Stack
        sx={{
          padding: isLgDown ? '25px 15px 15px 15px' : '25px',
          width: 327,
          height: 400,
          overflowY: 'auto',
        }}
      >
        <Typography variant="body1" color={theme.palette.grey[400]}>
          {dayjs(new Date()).format('ll')} - BITCOIN PRICE
        </Typography>
        <Typography variant="h4" color={theme.palette.common.white}>
          Bullish Opportunity
        </Typography>
        <Typography variant="caption" color={theme.palette.grey[500]} mb={2}>
          Time Period: {dayjs(new Date()).format('ll')}, Data Type: Chart + News
        </Typography>

        {loading ? (
          <>
            <Skeleton variant="text" sx={{ backgroundColor: '#67777e' }} width="100%"></Skeleton>
            <Skeleton variant="text" sx={{ backgroundColor: '#67777e' }} width="80%"></Skeleton>
            <Skeleton variant="text" sx={{ backgroundColor: '#67777e' }} width="58%"></Skeleton>
            <Skeleton variant="text" sx={{ backgroundColor: '#67777e' }} width="44%"></Skeleton>
            <Skeleton variant="text" sx={{ backgroundColor: '#67777e' }} width="79%"></Skeleton>
            <Skeleton variant="text" sx={{ backgroundColor: '#67777e' }} width="35%"></Skeleton>
          </>
        ) : (
          <Typography variant="caption" color={theme.palette.grey[500]}>
            {bullishText}
          </Typography>
        )}
      </Stack>
    </Menu>
  );
}
