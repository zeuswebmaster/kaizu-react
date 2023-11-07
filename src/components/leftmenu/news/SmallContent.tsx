import { useState } from 'react';
import { Button, Checkbox, FormControlLabel, IconButton, Stack, Tooltip, Typography, useTheme } from '@mui/material';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SourceIcon from '@mui/icons-material/Source';
import CloseIcon from '@mui/icons-material/Close';
import { ModalComponent } from '../..';

export default function SmallContent({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}) {
  const theme = useTheme();

  const [modalTrending, setModalTrending] = useState<boolean>(false);
  const [modalSources, setModalSources] = useState<boolean>(false);

  return (
    <>
      <ModalComponent open={modalTrending} setOpen={setModalTrending} width={300}>
        <Stack padding={2.5} direction="column" spacing={2} sx={{ width: '100%' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" color={theme.palette.common.white}>
              Trending
            </Typography>
            <IconButton onClick={() => setModalTrending(false)}>
              <CloseIcon sx={{ color: theme.palette.common.white, width: '30px', height: '30px' }} />
            </IconButton>
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
      </ModalComponent>
      <ModalComponent open={modalSources} setOpen={setModalSources} width={300}>
        <Stack padding={2.5} direction="column" spacing={2} sx={{ width: '100%' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" color={theme.palette.common.white}>
              Sources
            </Typography>
            <IconButton onClick={() => setModalSources(false)}>
              <CloseIcon sx={{ color: theme.palette.common.white, width: '30px', height: '30px' }} />
            </IconButton>
          </Stack>
          <FormControlLabel
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
                All
              </Typography>
            }
          />
          <FormControlLabel
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
                Bitcoin Magazine
              </Typography>
            }
          />
          <FormControlLabel
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
                Bloomberg
              </Typography>
            }
          />
          <FormControlLabel
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
                CNBCCoinDesk
              </Typography>
            }
          />
          <FormControlLabel
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
                CryptoSlate
              </Typography>
            }
          />
          <FormControlLabel
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
                NASDAQ
              </Typography>
            }
          />
          <FormControlLabel
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
                The StreetReuters
              </Typography>
            }
          />
          <Button sx={{ width: '70px', paddingLeft: 0 }}>
            <Typography variant="caption" color={theme.palette.common.white} sx={{ textDecoration: 'underline' }}>
              See more
            </Typography>
          </Button>
        </Stack>
      </ModalComponent>
      <Stack
        sx={{
          width: '50px',
          borderRadius: '8px',
          backgroundColor: '#091319',
        }}
      >
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
            <SourceIcon sx={{ color: selected === 'Sources' ? theme.palette.warning.main : theme.palette.info.main }} />
          </IconButton>
        </Tooltip>
      </Stack>
    </>
  );
}
