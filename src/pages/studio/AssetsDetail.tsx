import { Button, Card, CardContent, Grid, Slider, Stack, Tooltip, Typography, useTheme } from '@mui/material';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import RectangleIcon from '@mui/icons-material/Rectangle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoIcon from '@mui/icons-material/Info';

const CHANGES_ITEMS = [
  {
    id: 1,
    status: '1H Change',
    value: 0.1,
  },
  {
    id: 2,
    status: '24H Change',
    value: 1.3,
  },
  {
    id: 3,
    status: '7D Change',
    value: -1.13,
  },
  {
    id: 4,
    status: '30D Change',
    value: -3.91,
  },
  {
    id: 5,
    status: '1Y Change',
    value: 25.7,
  },
  {
    id: 6,
    status: 'YTD Change',
    value: 29.5,
  },
];

export default function AssetsDetail() {
  const themeGlobal = useTheme();

  const StyleButton = {
    height: 23,
    backgroundColor: '#334D5B',
    padding: '14px 9px',
    minWidth: 'auto',
    '& span': {
      marginRight: '-3px',
    },
    '& svg': {
      color: themeGlobal.palette.common.white,
      width: '17px',
      height: '15px',
      opacity: '0.7',
    },
    '& img': {
      width: '17px',
      height: '15px',
    },
    '&:hover': {
      backgroundColor: '#2d4551',
    },
  };

  return (
    <>
      <Grid container>
        <Grid item sm={5} lg={4}>
          <Stack
            direction="column"
            padding={2}
            sx={{ backgroundColor: 'rgba(19, 21, 30, 0.8)', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}
            spacing={2}
          >
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between">
              <Stack direction="column" spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="caption" color={themeGlobal.palette.grey[200]}>
                    Assets
                  </Typography>
                  <Stack direction="row" alignItems="center">
                    <ArrowRightIcon sx={{ color: themeGlobal.palette.common.white }} />
                    <Typography variant="caption" color={themeGlobal.palette.common.white}>
                      Crypto
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{ padding: '1px 9px', borderRadius: '10px', backgroundColor: themeGlobal.palette.grey[700] }}
                  >
                    <Typography variant="caption" color={themeGlobal.palette.common.white}>
                      #1
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1.2}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    width={31}
                    height={31}
                    sx={{ backgroundColor: '#f7921c', borderRadius: '5px' }}
                  >
                    <CurrencyBitcoinIcon sx={{ color: themeGlobal.palette.common.white, transform: 'rotate(13deg)' }} />
                  </Stack>
                  <Stack>
                    <Typography variant="subtitle1" fontWeight={500} color={themeGlobal.palette.common.white}>
                      BTC
                    </Typography>
                    <Typography variant="caption" color={themeGlobal.palette.grey[200]} mt={-0.5}>
                      Bitcoin
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Typography variant="h3" color={themeGlobal.palette.common.white}>
                    $29,216.30
                  </Typography>
                  <Stack direction="row" alignItems="center" paddingTop={1}>
                    <ArrowDropUpIcon sx={{ color: themeGlobal.palette.info.main }} />
                    <Typography variant="subtitle1" color={themeGlobal.palette.info.main}>
                      1.3%
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction="column" spacing={2}>
                <Stack>
                  <Button
                    variant="contained"
                    startIcon={<img src="/images/ico_watchlist_1.png" alt="" />}
                    sx={StyleButton}
                  />
                </Stack>
                <Stack>
                  <Button variant="contained" startIcon={<RectangleIcon />} sx={StyleButton} />
                </Stack>
                <Stack>
                  <Button
                    variant="contained"
                    startIcon={<img src="/images/ico_add_watchlist.png" alt="" />}
                    sx={StyleButton}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack>
              <Grid container spacing={1.2}>
                {CHANGES_ITEMS.map((item) => (
                  <Grid item sm={6} lg={4} key={item.id}>
                    <Card variant="outlined" sx={{ border: '1.5px solid #265161' }}>
                      <CardContent sx={{ padding: '8px 11px !important' }}>
                        <Typography variant="caption" color={themeGlobal.palette.common.white}>
                          {item.status}
                        </Typography>
                        <Stack direction="row" alignItems="center">
                          {item.value >= 0 && <ArrowDropUpIcon sx={{ color: themeGlobal.palette.info.main }} />}
                          {item.value < 0 && <ArrowDropDownIcon sx={{ color: themeGlobal.palette.error.main }} />}

                          <Typography
                            variant="subtitle2"
                            color={item.value >= 0 ? themeGlobal.palette.info.main : themeGlobal.palette.error.main}
                            component="div"
                          >
                            {item.value.toString().replace('-', '')}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack>
              <Stack pb={1.5} mb={1.5} sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}>
                <Typography variant="caption" color="#8FBACA">
                  24H Price Change
                </Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    $27,314
                  </Typography>
                  <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    sx={{
                      color: '#8FBACA',
                      '& .MuiSlider-thumb': { width: '6px', height: '13px', borderRadius: '3px' },
                      '& .MuiSlider-valueLabel': {
                        fontSize: 12,
                        fontWeight: 'normal',
                        top: 0,
                        backgroundColor: 'unset',
                        color: themeGlobal.palette.text.primary,
                        '&:before': {
                          display: 'none',
                        },
                        '& *': {
                          background: 'transparent',
                          color: themeGlobal.palette.common.white,
                        },
                      },
                    }}
                  />
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    $29,414
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                pb={1.5}
                mb={1.5}
                sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}
              >
                <Typography variant="caption" color="#8FBACA">
                  Market Cap
                </Typography>
                <Typography variant="caption" color={themeGlobal.palette.common.white}>
                  $568.17B
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                pb={1.5}
                mb={1.5}
                sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}
              >
                <Typography variant="caption" color="#8FBACA">
                  24H Volume
                </Typography>
                <Typography variant="caption" color={themeGlobal.palette.common.white}>
                  $6.54B
                </Typography>
              </Stack>
              <Stack pb={1.5} mb={1.5} sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Typography variant="caption" color="#8FBACA">
                    Circulating Supply
                  </Typography>
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    19.45M BTC
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                  <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    sx={{
                      color: '#8FBACA',
                      '& .MuiSlider-thumb': { width: '6px', height: '13px', borderRadius: '3px' },
                      '& .MuiSlider-valueLabel': {
                        fontSize: 12,
                        fontWeight: 'normal',
                        top: 0,
                        backgroundColor: 'unset',
                        color: themeGlobal.palette.text.primary,
                        '&:before': {
                          display: 'none',
                        },
                        '& *': {
                          background: 'transparent',
                          color: themeGlobal.palette.common.white,
                        },
                      },
                    }}
                  />
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    92.6%
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                pb={1.5}
                mb={1.5}
                sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="caption" color="#8FBACA">
                    Total Supply
                  </Typography>
                  <Tooltip title="Info" arrow>
                    <Stack sx={{ cursor: 'pointer' }}>
                      <InfoIcon sx={{ color: '#8FBACA', width: 13, height: 13 }} />
                    </Stack>
                  </Tooltip>
                </Stack>
                <Typography variant="caption" color={themeGlobal.palette.common.white}>
                  19.45M BTC
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                pb={1.5}
                mb={1.5}
                sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}
              >
                <Typography variant="caption" color="#8FBACA">
                  Max Supply
                </Typography>
                <Typography variant="caption" color={themeGlobal.palette.common.white}>
                  21M BTC
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                pb={1.5}
                mb={1.5}
                sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}
              >
                <Typography variant="caption" color="#8FBACA">
                  BTC Dominance
                </Typography>
                <Typography variant="caption" color={themeGlobal.palette.common.white}>
                  48.7%
                </Typography>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                pb={1.5}
                mb={1.5}
                sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}
              >
                <Typography variant="caption" color="#8FBACA">
                  Launch Date
                </Typography>
                <Typography variant="caption" color={themeGlobal.palette.common.white}>
                  Jan 3, 2009
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item sm={7} lg={8}>
          <Stack padding={2}></Stack>
        </Grid>
      </Grid>
    </>
  );
}
