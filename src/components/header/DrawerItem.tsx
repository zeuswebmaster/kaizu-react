import { useEffect, useState } from 'react';
import { Stack, Typography, Button, Tooltip, useTheme, Skeleton } from '@mui/material';
import { ParsedEvent, ReconnectInterval, createParser } from 'eventsource-parser';

import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarIcon from '@mui/icons-material/Star';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import { useAuthStore } from '../../features';
import useResponsive from '../../hooks/useResponsive';

export default function DrawerItem({
  openDrawer,
  setOpenDrawer,
}: {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const theme = useTheme();
  const isSmDown = useResponsive('down', 'sm');
  const isMdDown = useResponsive('down', 'md');
  const accessToken = useAuthStore((state) => state.accessToken);

  const [bullishText, setBullishText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const StyledButton = {
    backgroundColor: '#263c48',
    padding: '4px 8px',
    minWidth: 'auto',
    '& span': {
      marginRight: '-3px',
    },
    '&:hover': {
      backgroundColor: '#2d4551',
    },
  };

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
      if (openDrawer) {
        await handleAIStream();
      }
    })();
  }, [openDrawer]);

  return (
    <Stack
      sx={{
        width: '100%',
        height: 'calc(100% - 44px)',
        overflowY: 'auto',
        backgroundImage: 'linear-gradient(to right, rgba(20, 42, 53, 1), rgba(40, 72, 86, 1))',
      }}
    >
      <Stack
        direction={{ sm: 'row', xs: 'column' }}
        alignItems={{ sm: 'center', xs: 'flex-start' }}
        justifyContent="space-between"
        position="fixed"
        sx={{
          backgroundImage: 'linear-gradient(to right, rgba(10, 21, 26, 1), rgba(19, 35, 42, 1))',
          padding: isSmDown ? '10px 15px' : '20px 30px',
          right: 0,
          width: isMdDown ? '90%' : 450,
        }}
      >
        <Stack sx={{ marginBottom: isSmDown ? '16px' : 0 }}>
          <Stack
            sx={{
              width: '45px',
              marginBottom: '5px',
            }}
          >
            <img src="/icons/kaizu.svg" alt="" />
          </Stack>
          <Typography variant="body2" color={theme.palette.common.white} fontWeight={500}>
            Predictive Intel Report
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Tooltip title="Expand" arrow>
            <Button
              variant="contained"
              startIcon={<OpenInFullIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
              sx={StyledButton}
            />
          </Tooltip>
          <Tooltip title="Info" arrow>
            <Button
              variant="contained"
              startIcon={<InfoOutlinedIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
              sx={StyledButton}
            />
          </Tooltip>
          <Tooltip title="Save report" arrow>
            <Button
              variant="contained"
              startIcon={<StarIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
              sx={StyledButton}
            />
          </Tooltip>
          <Tooltip title="Refresh" describeChild arrow>
            <Button
              variant="contained"
              startIcon={<RefreshIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
              onClick={handleAIStream}
              sx={StyledButton}
            />
          </Tooltip>
          <Tooltip title="More" arrow>
            <Button
              variant="contained"
              startIcon={<MoreHorizIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
              sx={StyledButton}
            />
          </Tooltip>
          <Tooltip title="Close" arrow>
            <Button
              variant="contained"
              startIcon={<CloseIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
              sx={StyledButton}
              onClick={() => setOpenDrawer(false)}
            />
          </Tooltip>
        </Stack>
      </Stack>
      <Stack sx={{ padding: isSmDown ? '10px 15px' : '20px', marginTop: isSmDown ? '107px' : '87px' }}>
        <Typography variant="body2" color="#67777e" mt={1}>
          BITCOIN PRICE
        </Typography>
        <Typography variant="h3" color={theme.palette.common.white} mt={1}>
          Bullish Scenario
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
          <Typography variant="body2" color="#67777e" mt={1} style={{ whiteSpace: 'pre-wrap' }}>
            {bullishText}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
}
