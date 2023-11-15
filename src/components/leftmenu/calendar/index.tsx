import { Button, Checkbox, FormControlLabel, Stack, Typography, useTheme } from '@mui/material';

const INDEXES = [
  {
    label: 'FTSE 100',
    checked: false,
  },
  {
    label: 'FTSE Mid 250',
    checked: false,
  },
  {
    label: 'Techmark',
    checked: false,
  },
  {
    label: 'Weekend EURUSD',
    checked: false,
  },
  {
    label: 'Weekend GBPUSD',
    checked: false,
  },
  {
    label: 'Wall Street',
    checked: false,
  },
  {
    label: 'Germany 40',
    checked: false,
  },
  {
    label: 'US 500',
    checked: false,
  },
  {
    label: 'US Tech 100',
    checked: false,
  },
  {
    label: 'Hong Kong HS50',
    checked: false,
  },
];

const COUNTRIES = [
  {
    label: 'United Kingdom',
    checked: false,
  },
  {
    label: 'USA',
    checked: false,
  },
  {
    label: 'Germany',
    checked: false,
  },
  {
    label: 'France',
    checked: false,
  },
  {
    label: 'Japan',
    checked: false,
  },
];

export default function CalendarComponent() {
  const theme = useTheme();

  return (
    <Stack
      direction="column"
      padding={1.5}
      sx={{
        width: '187px',
        borderRadius: '8px',
        backgroundColor: theme.palette.background.paper,
        boxShadow:
          '0px 1px 9px 6px rgba(0, 0, 0, 0.2), 0px 13px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
      }}
    >
      <Stack direction="column" padding={1}>
        <Typography variant="subtitle2" color={theme.palette.common.white}>
          Index
        </Typography>
        {INDEXES.map((item) => (
          <FormControlLabel
            key={item.label}
            control={
              <Checkbox
                size="small"
                sx={{
                  color: '#A4C7D4',
                  paddingBottom: 0,
                  '&.Mui-checked': {
                    color: '#A4C7D4',
                  },
                }}
              />
            }
            label={
              <Typography variant="caption" color={theme.palette.common.white} mt={1}>
                {item.label}
              </Typography>
            }
          />
        ))}
      </Stack>
      <Stack direction="column" padding={1}>
        <Typography variant="subtitle2" color={theme.palette.common.white}>
          Country
        </Typography>
        {COUNTRIES.map((item) => (
          <FormControlLabel
            key={item.label}
            control={
              <Checkbox
                size="small"
                sx={{
                  color: '#A4C7D4',
                  paddingBottom: 0,
                  '&.Mui-checked': {
                    color: '#A4C7D4',
                  },
                }}
              />
            }
            label={
              <Typography variant="caption" color={theme.palette.common.white} mt={1}>
                {item.label}
              </Typography>
            }
          />
        ))}

        <Button sx={{ width: '70px', paddingLeft: 0, marginLeft: '20px' }}>
          <Typography variant="caption" color={theme.palette.common.white} sx={{ textDecoration: 'underline' }}>
            See more
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
