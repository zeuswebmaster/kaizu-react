import { useState } from 'react';
import {
  Button,
  Grid,
  Menu,
  MenuProps,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
  useTheme,
} from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ForwardIcon from '@mui/icons-material/Forward';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { CalendarMenu, ControllerMenu, LineChart, MoreSettingMenu, NewsMenu } from '../..';
import PartComponent from '../PartComponent';
import useResponsive from '../../../hooks/useResponsive';

const SELECT_ITEMS = [
  'On-Chain Intelligence',
  'Social Sentiment',
  'Bitcoin Halving',
  'Calendar',
  'ETFs',
  'History',
  'Asset Correlations',
];

const years = [
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
  new Date(2019, 0, 1),
  new Date(2020, 0, 1),
  new Date(2021, 0, 1),
  new Date(2022, 0, 1),
  new Date(2023, 0, 1),
];

const FranceGDPperCapita = [
  28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807, 31323.078, 32284.611, 33409.68,
  33920.098,
];

const xAxis = [
  {
    id: 'Years',
    data: years,
    scaleType: 'time',
    valueFormatter: (date: Date) => date.getFullYear().toString(),
  },
];

const series1 = [
  {
    id: 'France',
    data: FranceGDPperCapita,
    stack: 'total',
    area: true,
    showMark: false,
    color: '#e29c50',
  },
];

const series2 = [
  {
    id: 'France',
    data: FranceGDPperCapita,
    stack: 'total',
    area: true,
    showMark: false,
    color: '#0c86b1',
  },
];

const BITCOIN_CALENDAR = [
  {
    id: 1,
    event: 'Bitcoin Halving',
    date: 'Apr 30, 2024',
    icon: <NotificationsOutlinedIcon sx={{ width: 13, height: 13 }} />,
  },
  {
    id: 2,
    event: 'Difficulty Adjustment',
    date: 'Nov 30, 2024',
    icon: <NotificationsOutlinedIcon sx={{ width: 13, height: 13 }} />,
  },
  {
    id: 3,
    event: 'Copper Mining',
    date: 'Jan 15, 2025',
    icon: <NotificationsOutlinedIcon sx={{ width: 13, height: 13 }} />,
  },
  {
    id: 4,
    event: 'Iron State Miners',
    date: 'Feb 30, 2025',
    icon: <NotificationsOutlinedIcon sx={{ width: 13, height: 13 }} />,
  },
];

const BITCOIN_COMPANIES = [
  {
    id: 1,
    metal: 'Core Scientific',
    price: 1971.05,
    value: 1.2,
    hourly: 2.3,
  },
  {
    id: 2,
    metal: 'Hydro Mining Bitcoin Ltd.',
    price: 24.819,
    value: -3,
    hourly: 4,
  },
  {
    id: 3,
    metal: 'Copper Mining',
    price: 3.9987,
    value: 0.5,
    hourly: -1,
  },
  {
    id: 4,
    metal: 'Iron State Miners',
    price: 112.46,
    value: 1,
    hourly: 2.3,
  },
];

const NEWS = [
  {
    id: 1,
    content: 'Bank of Japan alters yield curve control program, impacting global bond markets 🔥🔥🔥',
    timer: '3 MIN AGO',
    coinKind: 'MACRO',
    upCnt: 32,
    donwCnt: 9,
    favorityCnt: 17,
    upIcon: <ForwardIcon sx={{ transform: 'rotate(-90deg)', color: '#fff', opacity: '0.75' }} />,
    downIcon: <ForwardIcon sx={{ transform: 'rotate(90deg)', color: '#fff', opacity: '0.75' }} />,
    favorityIcon: <FavoriteIcon sx={{ color: '#fff', opacity: '0.75' }} />,
  },
  {
    id: 2,
    content: 'Federal Reserve resumes rate hikes at FOMC meeting, bringing federal funds rate to 22-year high 🔥🔥',
    timer: '18 MIN AGO',
    coinKind: 'BITCOIN',
    upCnt: 32,
    donwCnt: 9,
    favorityCnt: 17,
    upIcon: <ForwardIcon sx={{ transform: 'rotate(-90deg)', color: '#fff', opacity: '0.75' }} />,
    downIcon: <ForwardIcon sx={{ transform: 'rotate(90deg)', color: '#fff', opacity: '0.75' }} />,
    favorityIcon: <FavoriteIcon sx={{ color: '#fff', opacity: '0.75' }} />,
  },
  {
    id: 3,
    content: 'Bitcoin and S&P 500 decouple from net liquidity 🔥',
    timer: '21 MIN AGO',
    coinKind: 'STOCKS',
    upCnt: 32,
    donwCnt: 9,
    favorityCnt: 17,
    upIcon: <ForwardIcon sx={{ transform: 'rotate(-90deg)', color: '#fff', opacity: '0.75' }} />,
    downIcon: <ForwardIcon sx={{ transform: 'rotate(90deg)', color: '#fff', opacity: '0.75' }} />,
    favorityIcon: <FavoriteIcon sx={{ color: '#fff', opacity: '0.75' }} />,
  },
  {
    id: 4,
    content: 'Fed decided against rate hikes in June FOMC meeting, but left room for future increases',
    timer: '30 MIN AGO',
    coinKind: 'MACRO',
    upCnt: 32,
    donwCnt: 9,
    favorityCnt: 17,
    upIcon: <ForwardIcon sx={{ transform: 'rotate(-90deg)', color: '#fff', opacity: '0.75' }} />,
    downIcon: <ForwardIcon sx={{ transform: 'rotate(90deg)', color: '#fff', opacity: '0.75' }} />,
    favorityIcon: <FavoriteIcon sx={{ color: '#fff', opacity: '0.75' }} />,
  },
  {
    id: 5,
    content:
      'Biden extols economic progress in Chicago speech, again criticizing “loopholes for crypto traders” in U.S. tax code',
    timer: '1 HOUR AGO',
    coinKind: 'POLITICS',
    upCnt: 32,
    donwCnt: 9,
    favorityCnt: 17,
    upIcon: <ForwardIcon sx={{ transform: 'rotate(-90deg)', color: '#fff', opacity: '0.75' }} />,
    downIcon: <ForwardIcon sx={{ transform: 'rotate(90deg)', color: '#fff', opacity: '0.75' }} />,
    favorityIcon: <FavoriteIcon sx={{ color: '#fff', opacity: '0.75' }} />,
  },
];

export default function AssetsRightComponent() {
  const themeGlobal = useTheme();
  const isLgDown = useResponsive('down', 'lg');
  const isSmDown = useResponsive('down', 'sm');

  const [selectItem, setSelectItem] = useState<string>('On-Chain Intelligence');
  const [menuController, setMenuController] = useState<HTMLElement | null>(null);
  const [menuMoreSetting, setMenuMoreSetting] = useState<HTMLElement | null>(null);
  const [menuNews, setMenuNews] = useState<HTMLElement | null>(null);
  const [menuCalendar, setMenuCalendar] = useState<HTMLElement | null>(null);

  const StyleMenu = styled(Menu)<MenuProps>(() => ({
    '& .MuiPaper-root': {
      backgroundColor: 'transparent',
      minWidth: '288px',
      borderRadius: '8px',
      boxShadow: 'none',
      '& ul': {
        marginTop: isLgDown ? 0 : '10px',
        position: 'relative',
        backgroundImage: 'linear-gradient(to left, rgba(29, 51, 63, 1), rgba(41, 65, 79, 1))',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      },
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: `1px solid ${themeGlobal.palette.primary.main}`,
    padding: '6px',
    color: theme.palette.common.white,
    [`&.${tableCellClasses.head}`]: {
      fontSize: 10,
      opacity: 0.7,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#0E1D24',
    padding: '3px 6px',
    minWidth: 'auto',
    '& span': {
      marginRight: '-3px',
    },
    '& svg': { color: theme.palette.common.white, width: '20px', height: '20px' },
    '&:hover': {
      backgroundColor: '#2d4551',
    },
  }));

  const StyleButton = {
    width: 23,
    height: 23,
    backgroundColor: '#334D5B',
    padding: '2px 6px',
    minWidth: 'auto',
    '& span': {
      marginRight: '-3px',
    },
    '& svg': {
      color: themeGlobal.palette.common.white,
      width: '20px',
      height: '20px',
      opacity: '0.7',
    },
    '&:hover': {
      backgroundColor: '#2d4551',
    },
  };

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, index: string) => {
    if (index === 'controller') setMenuController(event.currentTarget);
    if (index === 'moreSetting') setMenuMoreSetting(event.currentTarget);
    if (index === 'news') setMenuNews(event.currentTarget);
    if (index === 'calendar') setMenuCalendar(event.currentTarget);
  };

  const handleCloseMenu = (index: string) => {
    if (index === 'controller') setMenuController(null);
    if (index === 'moreSetting') setMenuMoreSetting(null);
    if (index === 'news') setMenuNews(null);
    if (index === 'calendar') setMenuCalendar(null);
  };

  return (
    <Stack direction="column" padding={isSmDown ? 1 : 2} spacing={2}>
      <Stack>
        <Grid container spacing={1} direction="row" justifyContent={{ md: 'flex-end', xxs: 'flex-start' }}>
          {SELECT_ITEMS.map((item: string) => (
            <Grid item key={item}>
              <Button
                sx={{
                  backgroundColor: selectItem === item ? themeGlobal.palette.common.white : 'transparent',
                  padding: '3px 4px',
                  color: selectItem === item ? themeGlobal.palette.common.black : themeGlobal.palette.common.white,
                  '&:hover': {
                    color: themeGlobal.palette.common.black,
                    backgroundColor: themeGlobal.palette.common.white,
                  },
                }}
                onClick={() => setSelectItem(item)}
              >
                <Typography variant="caption">{item}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Stack>
        <PartComponent
          backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
          {...(isSmDown ? { padding: '8px' } : {})}
        >
          <Stack
            direction={{ lg: 'row', xxs: 'column' }}
            alignItems={{ lg: 'center', xxs: 'flex-start' }}
            justifyContent="space-between"
            mb={1}
          >
            <Stack direction="row" alignItems="center" spacing={1} mb={{ xxs: 1 }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                width={120}
                sx={{
                  backgroundColor: themeGlobal.palette.common.white,
                  borderRadius: '3px',
                  padding: '2px 7px 2px 2px',
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  width={40}
                  height={20}
                  sx={{ borderRadius: '3px', backgroundColor: themeGlobal.palette.common.black }}
                >
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    Price
                  </Typography>
                </Stack>
                <Typography variant="caption" color={themeGlobal.palette.common.black}>
                  Market Cap
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography variant="caption" color={themeGlobal.palette.common.white}>
                  Last: $29,044.30
                </Typography>
                <Typography variant="caption" color={themeGlobal.palette.info.main}>
                  (1.3%)
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<img src="/images/circle_logo.png" alt="" />}
                  sx={StyleButton}
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'news')}
                />
                <NewsMenu menuKind={menuNews as HTMLElement} onClose={handleCloseMenu} />
              </Stack>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<CalendarMonthIcon />}
                  sx={StyleButton}
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'calendar')}
                />
                <CalendarMenu menuKind={menuCalendar as HTMLElement} onClose={handleCloseMenu} />
              </Stack>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<TuneRoundedIcon />}
                  sx={StyleButton}
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'controller')}
                />
                <ControllerMenu
                  StyleMenu={StyleMenu}
                  menuKind={menuController as HTMLElement}
                  onClose={handleCloseMenu}
                />
              </Stack>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<MoreHorizIcon />}
                  sx={StyleButton}
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'moreSetting')}
                />
                <MoreSettingMenu
                  StyleMenu={StyleMenu}
                  menuKind={menuMoreSetting as HTMLElement}
                  onClose={handleCloseMenu}
                />
              </Stack>
            </Stack>
          </Stack>
          <LineChart xAxis={xAxis} series={series1} />
        </PartComponent>
      </Stack>
      <Stack>
        <PartComponent
          backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
          {...(isSmDown ? { padding: '8px' } : {})}
        >
          <Stack
            direction={{ lg: 'row', xxs: 'column' }}
            alignItems={{ lg: 'center', xxs: 'flex-start' }}
            justifyContent="space-between"
            mb={1}
          >
            <Typography variant="caption" fontWeight={600} color={themeGlobal.palette.common.white} mb={{ xxs: 1 }}>
              About Bitcoin
            </Typography>
            <Stack>
              <Button
                variant="contained"
                startIcon={<MoreHorizIcon />}
                sx={StyleButton}
                onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'moreSetting')}
              />
              <MoreSettingMenu
                StyleMenu={StyleMenu}
                menuKind={menuMoreSetting as HTMLElement}
                onClose={handleCloseMenu}
              />
            </Stack>
          </Stack>
          <Typography variant="caption" color={themeGlobal.palette.common.white} lineHeight={2} mb={3}>
            Bitcoin, a decentralized currency that defies the sway of central banks or administrators, transacts
            electronically, circumventing intermediaries via a peer-to-peer network. These transactions are
            authenticated by network nodes through cryptography and recorded on the blockchain, a ledger accessible to
            all. The mastermind behind Bitcoin referred to as Satoshi Nakamoto, remains unknown.
          </Typography>
          <Typography variant="caption" color={themeGlobal.palette.info.main}>
            Continue reading...
          </Typography>
        </PartComponent>
      </Stack>
      <Stack>
        <PartComponent
          backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
          {...(isSmDown ? { padding: '8px' } : {})}
        >
          <Stack direction={{ lg: 'row', xxs: 'column' }} alignItems="flex-start" justifyContent="space-between" mb={1}>
            <Stack mb={{ xxs: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                <Typography variant="caption" color={themeGlobal.palette.common.white}>
                  Bitcoin Average Transaction Fee
                </Typography>
                <ArrowDropDownCircleIcon sx={{ color: themeGlobal.palette.grey[400], width: 14, height: 14 }} />
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="caption" color={themeGlobal.palette.grey[400]}>
                  $4.35 (4.12%)
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<img src="/images/circle_logo.png" alt="" />}
                  sx={StyleButton}
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'news')}
                />
                <NewsMenu menuKind={menuNews as HTMLElement} onClose={handleCloseMenu} />
              </Stack>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<CalendarMonthIcon />}
                  sx={StyleButton}
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'calendar')}
                />
                <CalendarMenu menuKind={menuCalendar as HTMLElement} onClose={handleCloseMenu} />
              </Stack>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<TuneRoundedIcon />}
                  sx={StyleButton}
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'controller')}
                />
                <ControllerMenu
                  StyleMenu={StyleMenu}
                  menuKind={menuController as HTMLElement}
                  onClose={handleCloseMenu}
                />
              </Stack>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<MoreHorizIcon />}
                  sx={StyleButton}
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'moreSetting')}
                />
                <MoreSettingMenu
                  StyleMenu={StyleMenu}
                  menuKind={menuMoreSetting as HTMLElement}
                  onClose={handleCloseMenu}
                />
              </Stack>
            </Stack>
          </Stack>
          <LineChart xAxis={xAxis} series={series2} />
        </PartComponent>
      </Stack>
      <Stack>
        <Grid container spacing={2}>
          <Grid item lg={6} xxs={12}>
            <PartComponent
              backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
              {...(isSmDown ? { padding: '8px' } : {})}
            >
              <Stack
                direction={{ lg: 'row', xxs: 'column' }}
                alignItems={{ lg: 'center', xxs: 'flex-start' }}
                justifyContent="space-between"
                mb={2}
              >
                <Typography variant="caption" color={themeGlobal.palette.common.white} mb={{ xxs: 1 }}>
                  Bitcoin Calendar
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Stack>
                    <Button
                      variant="contained"
                      startIcon={<TuneRoundedIcon />}
                      sx={StyleButton}
                      onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'controller')}
                    />
                    <ControllerMenu
                      StyleMenu={StyleMenu}
                      menuKind={menuController as HTMLElement}
                      onClose={handleCloseMenu}
                    />
                  </Stack>
                  <Stack>
                    <Button
                      variant="contained"
                      startIcon={<MoreHorizIcon />}
                      sx={StyleButton}
                      onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'moreSetting')}
                    />
                    <MoreSettingMenu
                      StyleMenu={StyleMenu}
                      menuKind={menuMoreSetting as HTMLElement}
                      onClose={handleCloseMenu}
                    />
                  </Stack>
                </Stack>
              </Stack>
              <TableContainer>
                <Table sx={{ minWidth: 350 }}>
                  <TableHead>
                    <TableRow
                      sx={{
                        '& td, & th': { border: 0 },
                      }}
                    >
                      <StyledTableCell>EVENT</StyledTableCell>
                      <StyledTableCell>DATE</StyledTableCell>
                      <StyledTableCell>&nbsp;</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {BITCOIN_CALENDAR.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          '& td, & th': { border: 0 },
                        }}
                      >
                        <StyledTableCell>{item.event}</StyledTableCell>
                        <StyledTableCell>{item.date}</StyledTableCell>
                        <StyledTableCell align="right">{item.icon}</StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </PartComponent>
          </Grid>
          <Grid item lg={6} xxs={12}>
            <PartComponent
              backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
              {...(isSmDown ? { padding: '8px' } : {})}
            >
              <Stack
                direction={{ lg: 'row', xxs: 'column' }}
                alignItems={{ lg: 'center', xxs: 'flex-start' }}
                justifyContent="space-between"
                mb={2}
              >
                <Stack direction="row" alignItems="center" spacing={1} mb={{ xxs: 1 }}>
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    Bitcoin Mining Companies
                  </Typography>
                  <ArrowDropDownCircleIcon sx={{ color: themeGlobal.palette.common.white, width: 14, height: 14 }} />
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Stack>
                    <Button
                      variant="contained"
                      startIcon={<TuneRoundedIcon />}
                      sx={StyleButton}
                      onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'controller')}
                    />
                    <ControllerMenu
                      StyleMenu={StyleMenu}
                      menuKind={menuController as HTMLElement}
                      onClose={handleCloseMenu}
                    />
                  </Stack>
                  <Stack>
                    <Button
                      variant="contained"
                      startIcon={<MoreHorizIcon />}
                      sx={StyleButton}
                      onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'moreSetting')}
                    />
                    <MoreSettingMenu
                      StyleMenu={StyleMenu}
                      menuKind={menuMoreSetting as HTMLElement}
                      onClose={handleCloseMenu}
                    />
                  </Stack>
                </Stack>
              </Stack>
              <TableContainer>
                <Table sx={{ minWidth: 350 }}>
                  <TableHead>
                    <TableRow
                      sx={{
                        '& td, & th': { border: 0 },
                      }}
                    >
                      <StyledTableCell>METAL</StyledTableCell>
                      <StyledTableCell>PRICE</StyledTableCell>
                      <StyledTableCell>+/-</StyledTableCell>
                      <StyledTableCell>24H %</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {BITCOIN_COMPANIES.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          '& td, & th': { border: 0 },
                        }}
                      >
                        <StyledTableCell>{item.metal}</StyledTableCell>
                        <StyledTableCell>
                          $
                          {parseFloat(item.price.toString())
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </StyledTableCell>
                        <StyledTableCell
                          sx={{
                            color: item.value < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main,
                          }}
                        >
                          {parseFloat(item.value.toString())
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        </StyledTableCell>
                        <StyledTableCell
                          sx={{
                            color: item.hourly < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main,
                          }}
                        >
                          {parseFloat(item.hourly.toString())
                            .toFixed(2)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                          %
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </PartComponent>
          </Grid>
        </Grid>
      </Stack>
      <Stack>
        <PartComponent
          backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
          {...(isSmDown ? { padding: '8px' } : {})}
        >
          <Stack
            direction={{ lg: 'row', xxs: 'column' }}
            alignItems={{ lg: 'center', xxs: 'flex-start' }}
            justifyContent="space-between"
            mb={3}
          >
            <Stack direction="row" alignItems="center" spacing={1} mb={{ xxs: 1 }}>
              <Typography variant="caption" color={themeGlobal.palette.common.white}>
                Related News
              </Typography>
              <Typography variant="caption" color={themeGlobal.palette.grey[400]}>
                #Bitcoin
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<TuneRoundedIcon />}
                  sx={StyleButton}
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'controller')}
                />
                <ControllerMenu
                  StyleMenu={StyleMenu}
                  menuKind={menuController as HTMLElement}
                  onClose={handleCloseMenu}
                />
              </Stack>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<MoreHorizIcon />}
                  sx={StyleButton}
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'moreSetting')}
                />
                <MoreSettingMenu
                  StyleMenu={StyleMenu}
                  menuKind={menuMoreSetting as HTMLElement}
                  onClose={handleCloseMenu}
                />
              </Stack>
            </Stack>
          </Stack>
          <TableContainer>
            <Table sx={{ minWidth: 450 }}>
              <TableBody>
                {NEWS.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <StyledTableCell sx={{ width: '20%' }}>
                      <Stack color="#209979">{item.timer}</Stack>
                      <Stack>{item.coinKind}</Stack>
                    </StyledTableCell>
                    <StyledTableCell>{item.content}</StyledTableCell>
                    <StyledTableCell>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Stack textAlign="center">
                          <StyledButton variant="contained" startIcon={item.upIcon} />
                          <Stack>{item.upCnt}</Stack>
                        </Stack>
                        <Stack textAlign="center">
                          <StyledButton variant="contained" startIcon={item.downIcon} />
                          <Stack>{item.donwCnt}</Stack>
                        </Stack>
                        <Stack textAlign="center">
                          <StyledButton variant="contained" startIcon={item.favorityIcon} />
                          <Stack>{item.favorityCnt}</Stack>
                        </Stack>
                      </Stack>
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </PartComponent>
      </Stack>
    </Stack>
  );
}
