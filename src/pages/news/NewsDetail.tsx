import { useState } from 'react';
import {
  Stack,
  Typography,
  useTheme,
  Button,
  Tooltip,
  Grid,
  styled,
  MenuProps,
  Menu,
  TableCell,
  tableCellClasses,
  TableContainer,
  Table,
  TableBody,
  TableRow,
} from '@mui/material';

import ForwardIcon from '@mui/icons-material/Forward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ControllerMenu, MoreSettingMenu, PartComponent, NewsMenu, CalendarMenu, LineChart } from '../../components';

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

const UKGDPperCapita = [
  26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248, 29259.764, 30077.385, 30932.537, 31946.037,
  32660.441,
];

const xAxis = [
  {
    id: 'Years',
    data: years,
    scaleType: 'time',
    valueFormatter: (date: Date) => date.getFullYear().toString(),
  },
];

const series = [
  {
    id: 'France',
    data: FranceGDPperCapita,
    stack: 'total',
    area: true,
    showMark: false,
    color: '#e29c50',
  },
  {
    id: 'United Kingdom',
    data: UKGDPperCapita,
    stack: 'total',
    area: true,
    showMark: false,
    color: '#c1bdc2',
  },
];

const series1 = [
  {
    id: 'France',
    data: FranceGDPperCapita,
    stack: 'total',
    area: true,
    showMark: false,
    color: '#0c86b1',
  },
];

export default function NewsDetail() {
  const themeGlobal = useTheme();

  const [menuController, setMenuController] = useState<HTMLElement | null>(null);
  const [menuMoreSetting, setMenuMoreSetting] = useState<HTMLElement | null>(null);
  const [menuNews, setMenuNews] = useState<HTMLElement | null>(null);
  const [menuCalendar, setMenuCalendar] = useState<HTMLElement | null>(null);

  const StyleMenu = styled(Menu)<MenuProps>(() => ({
    '& .MuiPaper-root': {
      backgroundColor: 'transparent',
      minWidth: '200px',
      borderRadius: '8px',
      boxShadow: 'none',
      '& ul': {
        marginTop: '10px',
        position: 'relative',
        backgroundImage: 'linear-gradient(to left, rgba(29, 51, 63, 1), rgba(41, 65, 79, 1))',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      },
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
    <>
      <Stack px={2} pt={2}>
        <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="h4" color={themeGlobal.palette.common.white}>
                News
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="caption" color={themeGlobal.palette.info.main}>
                  18 min ago
                </Typography>
                <Stack
                  sx={{ width: 5, height: 5, borderRadius: '100%', backgroundColor: themeGlobal.palette.info.main }}
                ></Stack>
                <Typography variant="caption" color={themeGlobal.palette.common.white}>
                  #bitcoin #coinbase #lightning
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Stack textAlign="center">
                <Button
                  variant="contained"
                  startIcon={<ForwardIcon sx={{ transform: 'rotate(-90deg)', color: '#fff', opacity: '0.75' }} />}
                  sx={StyleButton}
                />
                <Typography variant="caption" fontSize={10} sx={{ color: '#fff', opacity: '0.75', marginTop: '2px' }}>
                  32
                </Typography>
              </Stack>
              <Stack textAlign="center">
                <Button
                  variant="contained"
                  startIcon={<ForwardIcon sx={{ transform: 'rotate(90deg)', color: '#fff', opacity: '0.75' }} />}
                  sx={StyleButton}
                />
                <Typography variant="caption" fontSize={10} sx={{ color: '#fff', opacity: '0.75', marginTop: '2px' }}>
                  9
                </Typography>
              </Stack>
              <Stack textAlign="center">
                <Button
                  variant="contained"
                  startIcon={<FavoriteIcon sx={{ color: '#fff', opacity: '0.75' }} />}
                  sx={StyleButton}
                />
                <Typography variant="caption" fontSize={10} sx={{ color: '#fff', opacity: '0.75', marginTop: '2px' }}>
                  17
                </Typography>
              </Stack>
              <Stack textAlign="center">
                <Button
                  variant="contained"
                  startIcon={
                    <Stack sx={{ width: 14, height: 14 }}>
                      <img src="/images/share.png" alt="" />
                    </Stack>
                  }
                  sx={StyleButton}
                />
                <Typography variant="caption" fontSize={10} sx={{ color: '#fff', opacity: '0.75', marginTop: '2px' }}>
                  5
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Typography variant="h4" color={themeGlobal.palette.common.white} mb={1}>
            Coinbase eyes Bitcoin Lightning Network integration, says CEO Brian Armstrong
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Typography variant="caption" color={themeGlobal.palette.grey[500]}>
              TL;DR SUMMARY
            </Typography>
            <Tooltip title="Info" arrow>
              <Stack sx={{ cursor: 'pointer' }}>
                <img src="/icons/info.svg" alt="" />
              </Stack>
            </Tooltip>
          </Stack>
          <Stack direction="column" spacing={3}>
            <Stack direction="row" alignItems="flex-start" spacing={3} sx={{ width: '100%' }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ width: 21, height: 21, borderRadius: '3px', backgroundColor: themeGlobal.palette.grey[300] }}
              >
                <Typography variant="caption" color="#0E1D24">
                  1
                </Typography>
              </Stack>
              <Typography variant="body2" color={themeGlobal.palette.common.white} sx={{ width: '95%' }}>
                Coinbase CEO Brian Armstrong has confirmed plans to integrate the Bitcoin Lightning Network (LN) into
                the cryptocurrency exchange. This announcement was made in response to a tweet from Twitter`s co-founder
                Jack, who queried why Coinbase was not already utilizing the LN for its crypto payment options.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={3} sx={{ width: '100%' }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ width: 21, height: 21, borderRadius: '3px', backgroundColor: themeGlobal.palette.grey[300] }}
              >
                <Typography variant="caption" color="#0E1D24">
                  2
                </Typography>
              </Stack>
              <Typography variant="body2" color={themeGlobal.palette.common.white} sx={{ width: '95%' }}>
                The Lightning Network is a layer-2 payment protocol for Bitcoin, facilitating faster, more affordable
                transactions. It`s intended to solve Bitcoin`s scalability issues and is the most popular Bitcoin
                layer-2 solution.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={3} sx={{ width: '100%' }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ width: 21, height: 21, borderRadius: '3px', backgroundColor: themeGlobal.palette.grey[300] }}
              >
                <Typography variant="caption" color="#0E1D24">
                  3
                </Typography>
              </Stack>
              <Typography variant="body2" color={themeGlobal.palette.common.white} sx={{ width: '95%' }}>
                Armstrong did not provide a timeline for when the integration would occur. However, he had earlier
                hinted in April that the exchange was considering the integration of LN into its platform.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={3} sx={{ width: '100%' }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ width: 21, height: 21, borderRadius: '3px', backgroundColor: themeGlobal.palette.grey[300] }}
              >
                <Typography variant="caption" color="#0E1D24">
                  4
                </Typography>
              </Stack>
              <Typography variant="body2" color={themeGlobal.palette.common.white} sx={{ width: '95%' }}>
                This development comes as other leading exchanges such as Binance, Bitfinex, Kraken, and OKX have
                integrated the Lightning Network into their systems.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={3} sx={{ width: '100%' }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ width: 21, height: 21, borderRadius: '3px', backgroundColor: themeGlobal.palette.grey[300] }}
              >
                <Typography variant="caption" color="#0E1D24">
                  5
                </Typography>
              </Stack>
              <Typography variant="body2" color={themeGlobal.palette.common.white} sx={{ width: '95%' }}>
                The Lightning Network has been growing in popularity, as evidenced by partnerships like the one between
                Voltage, a Bitcoin Lightning infrastructure provider, and Google Cloud. According to data from
                Glassnode, assets locked on the network reached over 5,000 BTC in early July, showing a significant
                increase from around 4,000 BTC at the start of the year.
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="flex-start" spacing={3} sx={{ width: '100%' }}>
              <Stack width={21}></Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body2" fontStyle="italic" color={themeGlobal.palette.common.white}>
                  Source:
                </Typography>
                <Typography variant="body2" fontStyle="italic" color={themeGlobal.palette.info.main}>
                  Bloomberg
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </PartComponent>
      </Stack>
      <Stack padding={2}>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
              <Stack direction="row" alignItems="flex-start" justifyContent="space-between" mb={1}>
                <Stack>
                  <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                    <Typography variant="caption" color={themeGlobal.palette.common.white}>
                      Bitcoin Price
                    </Typography>
                    <ArrowDropDownCircleIcon sx={{ color: themeGlobal.palette.common.white, width: 14, height: 14 }} />
                    <Typography variant="caption" color={themeGlobal.palette.common.white}>
                      vs
                    </Typography>
                    <Typography variant="caption" color={themeGlobal.palette.common.white}>
                      Bitcoin Tx Fees
                    </Typography>
                    <ArrowDropDownCircleIcon sx={{ color: themeGlobal.palette.common.white, width: 14, height: 14 }} />
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="caption" color={themeGlobal.palette.common.white}>
                      $29,321
                    </Typography>
                    <Typography variant="caption" color={themeGlobal.palette.info.main}>
                      4.12%
                    </Typography>
                    <Typography variant="caption" color={themeGlobal.palette.common.white}>
                      /&nbsp;&nbsp;$3.20
                    </Typography>
                    <Typography variant="caption" color="#AD1128">
                      -3%
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
              <Stack>
                <LineChart xAxis={xAxis} series={series} />
              </Stack>
            </PartComponent>
          </Grid>
          <Grid item md={6} sm={12}>
            <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
              <Stack direction="row" alignItems="flex-start" justifyContent="space-between" mb={1}>
                <Stack>
                  <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                    <Typography variant="caption" color={themeGlobal.palette.common.white}>
                      Lightning Network Tx
                    </Typography>
                    <ArrowDropDownCircleIcon sx={{ color: themeGlobal.palette.common.white, width: 14, height: 14 }} />
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="caption" color={themeGlobal.palette.common.white}>
                      $29,321 (4.12%)
                    </Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={1}>
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
              <Stack>
                <LineChart xAxis={xAxis} series={series1} />
              </Stack>
            </PartComponent>
          </Grid>
          <Grid item md={6} sm={12}>
            <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    Related News
                  </Typography>
                  <Typography variant="caption" color={themeGlobal.palette.info.main}>
                    #Coinbase
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
          </Grid>
          <Grid item md={6} sm={12}>
            <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    Related News
                  </Typography>
                  <Typography variant="caption" color={themeGlobal.palette.info.main}>
                    #Lightning
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
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}
