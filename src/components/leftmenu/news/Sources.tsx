import { Button, Checkbox, FormControlLabel, Stack, Typography, useTheme } from '@mui/material';

const SOURCES = [
  {
    label: 'All',
    checked: false,
  },
  {
    label: 'Bitcoin Magazine',
    checked: false,
  },
  {
    label: 'Bloomberg',
    checked: false,
  },
  {
    label: 'CNBC CoinDesk',
    checked: false,
  },
  {
    label: 'CryptoSlate',
    checked: false,
  },
  {
    label: 'NASDAQ',
    checked: false,
  },
  {
    label: 'The Street Reuters',
    checked: false,
  },
];

export default function Sources() {
  const theme = useTheme();

  return (
    <Stack
      direction="column"
      padding={2}
      sx={{
        width: '187px',
        borderRadius: '8px',
        backgroundColor: theme.palette.background.paper,
        boxShadow:
          '0px 1px 9px 6px rgba(0, 0, 0, 0.2), 0px 13px 24px 10px rgba(0, 0, 0, 0.14), 0px 6px 30px 10px rgba(0, 0, 0, 0.12)',
      }}
    >
      <Typography variant="subtitle2" color={theme.palette.common.white}>
        Sources
      </Typography>
      {SOURCES.map((item) => (
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
  );
}
