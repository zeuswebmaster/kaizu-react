import { Stack, Typography, useTheme } from '@mui/material';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function Trending() {
  const theme = useTheme();

  return (
    <Stack
      direction="column"
      spacing={1.1}
      sx={{
        width: '187px',
        borderRadius: '8px',
        padding: '20px 25px',
        backgroundColor: theme.palette.background.paper,
        boxShadow:
          '0px 1px 9px 6px rgba(0, 0, 0, 0.2), 0px 13px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <TrendingUpIcon sx={{ color: theme.palette.info.main, widht: 11, height: 14 }} />
        <Typography variant="subtitle2" color={theme.palette.common.white}>
          Trending
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="subtitle2" color={theme.palette.grey[300]}>
          #China
        </Typography>
        <Typography variant="caption" color={theme.palette.common.white}>
          451 stories
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="subtitle2" color={theme.palette.grey[300]}>
          #AI
        </Typography>
        <Typography variant="caption" color={theme.palette.common.white}>
          350 stories
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="subtitle2" color={theme.palette.grey[300]}>
          #YieldCurve
        </Typography>
        <Typography variant="caption" color={theme.palette.common.white}>
          210 stories
        </Typography>
      </Stack>
      <Stack>
        <Typography variant="subtitle2" color={theme.palette.grey[300]}>
          #ESG
        </Typography>
        <Typography variant="caption" color={theme.palette.common.white}>
          195 stories
        </Typography>
      </Stack>
    </Stack>
  );
}
