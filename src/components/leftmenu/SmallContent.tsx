import { useState } from 'react';
import { Button, Checkbox, FormControlLabel, IconButton, Stack, Tooltip, Typography, useTheme } from '@mui/material';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SourceIcon from '@mui/icons-material/Source';
import CloseIcon from '@mui/icons-material/Close';
import EventIcon from '@mui/icons-material/Event';
import { ModalComponent } from '..';

const TRENDING = [
  {
    label: '#China',
    value: '451',
  },
  {
    label: '#AI',
    value: '350',
  },
  {
    label: '#YieldCurve',
    value: '210',
  },
  {
    label: '#ESG',
    value: '195',
  },
];

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

export default function SmallContent({
  selected,
  setSelected,
  view,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  view: string;
}) {
  const theme = useTheme();

  const [modalTrending, setModalTrending] = useState<boolean>(false);
  const [modalSources, setModalSources] = useState<boolean>(false);
  const [modalCalendar, setModalCalendar] = useState<boolean>(false);

  return (
    <>
      <ModalComponent open={modalTrending} setOpen={setModalTrending} width="300px">
        <Stack padding={2.5} direction="column" spacing={2} sx={{ width: '100%' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" color={theme.palette.common.white}>
              Trending
            </Typography>
            <IconButton onClick={() => setModalTrending(false)}>
              <CloseIcon sx={{ color: theme.palette.common.white, width: '30px', height: '30px' }} />
            </IconButton>
          </Stack>

          {TRENDING.map((item) => (
            <Stack key={item.label}>
              <Typography variant="subtitle2" color={theme.palette.grey[300]}>
                {item.label}
              </Typography>
              <Typography variant="caption" color={theme.palette.common.white}>
                {item.value} stories
              </Typography>
            </Stack>
          ))}
        </Stack>
      </ModalComponent>
      <ModalComponent open={modalSources} setOpen={setModalSources} width="300px">
        <Stack padding={2.5} direction="column" spacing={2} sx={{ width: '100%' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" color={theme.palette.common.white}>
              Sources
            </Typography>
            <IconButton onClick={() => setModalSources(false)}>
              <CloseIcon sx={{ color: theme.palette.common.white, width: '30px', height: '30px' }} />
            </IconButton>
          </Stack>
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
                <Typography variant="body2" color={theme.palette.common.white} mt={1}>
                  {item.label}
                </Typography>
              }
            />
          ))}

          <Button sx={{ width: '70px', paddingLeft: 0, marginLeft: '30px !important' }}>
            <Typography variant="caption" color={theme.palette.common.white} sx={{ textDecoration: 'underline' }}>
              See more
            </Typography>
          </Button>
        </Stack>
      </ModalComponent>
      <ModalComponent open={modalCalendar} setOpen={setModalCalendar} width="300px">
        <Stack padding={2.5} direction="column" spacing={2} sx={{ width: '100%' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" color={theme.palette.common.white}>
              Calendar
            </Typography>
            <IconButton onClick={() => setModalCalendar(false)}>
              <CloseIcon sx={{ color: theme.palette.common.white, width: '30px', height: '30px' }} />
            </IconButton>
          </Stack>
          <Stack>
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
          <Stack>
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

            <Button sx={{ width: '70px', paddingLeft: 0, marginLeft: '20px !important' }}>
              <Typography variant="caption" color={theme.palette.common.white} sx={{ textDecoration: 'underline' }}>
                See more
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </ModalComponent>
      <Stack
        sx={{
          width: '50px',
          borderRadius: '8px',
          backgroundColor: '#091319',
        }}
      >
        {view === 'news' && (
          <>
            <Tooltip title="Trending" arrow placement="right">
              <IconButton
                sx={{
                  padding: '12px',
                  '&:hover': {
                    '& svg': {
                      color: theme.palette.warning.main,
                    },
                  },
                }}
                onClick={() => {
                  setSelected('Trending');
                  setModalTrending(true);
                }}
              >
                <TrendingUpIcon
                  sx={{ color: selected === 'Trending' ? theme.palette.warning.main : theme.palette.info.main }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Sources" arrow placement="right">
              <IconButton
                sx={{
                  padding: '12px',
                  '&:hover': {
                    '& svg': {
                      color: theme.palette.warning.main,
                    },
                  },
                }}
                onClick={() => {
                  setSelected('Sources');
                  setModalSources(true);
                }}
              >
                <SourceIcon
                  sx={{ color: selected === 'Sources' ? theme.palette.warning.main : theme.palette.info.main }}
                />
              </IconButton>
            </Tooltip>
          </>
        )}

        {view === 'calendar' && (
          <Tooltip title="Calendar" arrow placement="right">
            <IconButton
              sx={{
                padding: '12px',
                '&:hover': {
                  '& svg': {
                    color: theme.palette.warning.main,
                  },
                },
              }}
              onClick={() => {
                setSelected('Calendar');
                setModalCalendar(true);
              }}
            >
              <EventIcon
                sx={{ color: selected === 'Calendar' ? theme.palette.warning.main : theme.palette.info.main }}
              />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
    </>
  );
}
