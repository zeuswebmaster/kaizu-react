import { Button, Card, CardContent, Grid, Slider, Stack, Tooltip, Typography, useTheme } from '@mui/material';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import RectangleIcon from '@mui/icons-material/Rectangle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import useResponsive from '../../../hooks/useResponsive';

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

export default function AssetsLeftComponent() {
  const themeGlobal = useTheme();
  const isMdDown = useResponsive('down', 'md');

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

  const StyleSlider = {
    color: '#8FBACA !important',
    '& .MuiSlider-thumb': { width: '6px', height: '13px', borderRadius: '3px' },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: 36,
      backgroundColor: 'unset',
      color: themeGlobal.palette.text.primary,
      '&:before': {
        display: 'block !important',
      },
      '& *': {
        background: 'transparent',
        color: themeGlobal.palette.common.white,
      },
    },
  };

  const elementVariable = (title: string, value: string, marginBottom?: number, info?: string) => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        pb={1.5}
        mb={marginBottom}
        sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" color="#8FBACA">
            {title}
          </Typography>

          {info && (
            <Tooltip title={info} arrow>
              <Stack sx={{ cursor: 'pointer' }}>
                <InfoIcon sx={{ color: '#8FBACA', width: 13, height: 13 }} />
              </Stack>
            </Tooltip>
          )}
        </Stack>
        <Typography variant="caption" color={themeGlobal.palette.common.white}>
          {value}
        </Typography>
      </Stack>
    );
  };

  return (
    <Stack
      direction="column"
      padding={2}
      sx={{
        backgroundColor: 'rgba(19, 21, 30, 0.8)',
        borderTopLeftRadius: '8px',
        borderBottomLeftRadius: !isMdDown ? '8px' : 0,
        borderTopRightRadius: isMdDown ? '8px' : 0,
      }}
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
            <Stack sx={{ padding: '1px 9px', borderRadius: '10px', backgroundColor: themeGlobal.palette.grey[700] }}>
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
            <Typography variant="h3" fontWeight={500} color={themeGlobal.palette.common.white}>
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
            <Button variant="contained" startIcon={<img src="/images/ico_watchlist_1.png" alt="" />} sx={StyleButton} />
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
            <Grid item xxs={6} lg={4} key={item.id}>
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
              valueLabelDisplay="on"
              disabled
              sx={StyleSlider}
            />
            <Typography variant="caption" color={themeGlobal.palette.common.white}>
              $29,414
            </Typography>
          </Stack>
        </Stack>
        <>{elementVariable('Market Cap', '$568.17B', 1.5)}</>
        <>{elementVariable('24H Volume', '$6.54B', 1.5)}</>
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
              defaultValue={30}
              aria-label="Small"
              valueLabelDisplay="on"
              disabled
              sx={StyleSlider}
            />
            <Typography variant="caption" color={themeGlobal.palette.common.white}>
              92.6%
            </Typography>
          </Stack>
        </Stack>
        <>{elementVariable('Total Supply', '19.45M BTC', 1.5, 'Info')}</>
        <>{elementVariable('Max Supply', '21M BTC', 1.5)}</>
        <>{elementVariable('BTC Dominance', '48.7%', 1.5)}</>
        <>{elementVariable('Launch Date', 'Jan 3, 2009')}</>
      </Stack>
      <Stack>
        <Typography variant="caption" fontWeight={600} color={themeGlobal.palette.common.white} mb={2}>
          Price Performance
        </Typography>
        <Stack pb={1.5} mb={1.5} sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="caption" color="#8FBACA">
              All-Time High
            </Typography>
            <Typography variant="caption" color={themeGlobal.palette.common.white}>
              $68,692.14
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="caption" color="#8FBACA">
              Nov 10, 2021 (2 years ago)
            </Typography>
            <Typography variant="caption" color={themeGlobal.palette.error.main}>
              -57.6%
            </Typography>
          </Stack>
        </Stack>
        <Stack pb={1.5} mb={1.5} sx={{ borderBottom: `1px solid ${themeGlobal.palette.primary.main}` }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="caption" color="#8FBACA">
              All-Time High
            </Typography>
            <Typography variant="caption" color={themeGlobal.palette.common.white}>
              $0.04865
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="caption" color="#8FBACA">
              Jul 14, 2010 (13 years ago)
            </Typography>
            <Typography variant="caption" color={themeGlobal.palette.info.main}>
              +5,981,1997.2%
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="caption" fontWeight={600} color={themeGlobal.palette.common.white} mb={2}>
          Official Links
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1.3}>
          <Button
            variant="contained"
            startIcon={<LanguageIcon />}
            sx={{
              padding: '3px 8px',
              backgroundColor: '#292F44',
              '&:hover': {
                opacity: 0.75,
                backgroundColor: '#292F44',
              },
            }}
          >
            <Typography variant="caption">Website</Typography>
          </Button>
          <Button
            variant="contained"
            startIcon={<InsertDriveFileOutlinedIcon />}
            sx={{
              padding: '3px 8px',
              backgroundColor: '#292F44',
              '&:hover': {
                opacity: 0.75,
                backgroundColor: '#292F44',
              },
            }}
          >
            <Typography variant="caption">Whitepaper</Typography>
          </Button>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            sx={{
              padding: '3px 8px',
              backgroundColor: '#292F44',
              '&:hover': {
                opacity: 0.75,
                backgroundColor: '#292F44',
              },
            }}
          >
            <Typography variant="caption">GitHub</Typography>
          </Button>
        </Stack>
      </Stack>
      <Stack>
        <Typography variant="caption" fontWeight={600} color={themeGlobal.palette.common.white} mb={2}>
          Social Links
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1.3}>
          <Button
            variant="contained"
            startIcon={<TwitterIcon />}
            sx={{
              padding: '3px 8px',
              backgroundColor: '#292F44',
              '&:hover': {
                opacity: 0.75,
                backgroundColor: '#292F44',
              },
            }}
          >
            <Typography variant="caption">Twitter</Typography>
          </Button>
          <Button
            variant="contained"
            startIcon={<RedditIcon />}
            sx={{
              padding: '3px 8px',
              backgroundColor: '#292F44',
              '&:hover': {
                opacity: 0.75,
                backgroundColor: '#292F44',
              },
            }}
          >
            <Typography variant="caption">Reddit</Typography>
          </Button>
          <Button
            variant="contained"
            startIcon={<LinkedInIcon />}
            sx={{
              padding: '3px 8px',
              backgroundColor: '#292F44',
              '&:hover': {
                opacity: 0.75,
                backgroundColor: '#292F44',
              },
            }}
          >
            <Typography variant="caption">LinkedIn</Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
