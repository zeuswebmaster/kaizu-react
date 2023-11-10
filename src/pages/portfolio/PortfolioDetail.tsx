import { useState } from 'react';
import {
  Button,
  MenuProps,
  Stack,
  Typography,
  styled,
  useTheme,
  Menu,
  Grid,
  Tooltip,
  TableContainer,
  TableCell,
  tableCellClasses,
  Table,
  TableHead,
  TableRow,
  IconButton,
  TableBody,
} from '@mui/material';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  AddTransaction,
  CalendarMenu,
  ControllerMenu,
  LineChart,
  ModalComponent,
  MoreSettingMenu,
  NewsMenu,
  PartComponent,
  PieChart,
} from '../../components';
import useResponsive from '../../hooks/useResponsive';

const PORTFOLIO = [
  {
    id: 1,
    name: 'NVDA',
    subName: 'Nvidia',
    quantiry: 59125,
    price: -4.55,
    hourly: -1.04,
    marketValue: 25710506,
    cost: 305.32,
    gain_loss: 19150203,
    holding: 78,
    type: 'Stock',
    icon: '/icons/nvda.svg',
  },
  {
    id: 2,
    name: 'BTC',
    subName: 'Bitcoin',
    quantiry: 82,
    price: -138.8,
    hourly: 0.48,
    marketValue: 2387678,
    cost: 18515.15,
    gain_loss: -82.26,
    holding: 7.5,
    type: 'Crypto',
    icon: '/icons/bitcoin.svg',
  },
  {
    id: 3,
    name: 'GOLD',
    subName: 'GOLD',
    quantiry: 142,
    price: -3.09,
    hourly: 0.16,
    marketValue: 270778,
    cost: 140689,
    gain_loss: -1420,
    holding: 1.3,
    type: 'Metal',
    icon: '/icons/gold.svg',
  },
  {
    id: 4,
    name: 'LTC',
    subName: 'Litecoin',
    quantiry: 100,
    price: -2.68,
    hourly: 3.38,
    marketValue: 7690,
    cost: 55.32,
    gain_loss: 740053,
    holding: 0.5,
    type: 'Crypto',
    icon: '/icons/ltc.svg',
  },
  {
    id: 5,
    name: 'IEAC',
    subName: 'iShares Core € Corp Bond UCITS ETF',
    quantiry: 50,
    price: 0.07,
    hourly: 0.061,
    marketValue: 5706,
    cost: 110.32,
    gain_loss: 13491,
    holding: 0.4,
    type: 'Bond',
    icon: '/icons/ieac.svg',
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

const pieData = [
  { value: 55, label: 'NVDA', color: '#FBD47A' },
  { value: 12.5, label: 'BTC', color: '#3BA493' },
  { value: 10.3, label: 'GOLD', color: '#D4BC33' },
  { value: 12.5, label: 'LTC', color: '#266D73' },
  { value: 12.4, label: 'IEAC', color: '#F7AD57' },
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
    color: '#0c86b1',
  },
];

export default function PortfolioDetail() {
  const themeGlobal = useTheme();
  const isSmDown = useResponsive('down', 'sm');
  const isXsDown = useResponsive('down', 'xs');

  const pieSize = {
    width: isXsDown ? 230 : 350,
    height: 250,
  };

  const [menuNews, setMenuNews] = useState<HTMLElement | null>(null);
  const [menuCalendar, setMenuCalendar] = useState<HTMLElement | null>(null);
  const [menuController, setMenuController] = useState<HTMLElement | null>(null);
  const [menuMoreSetting, setMenuMoreSetting] = useState<HTMLElement | null>(null);
  const [modalTransaction, setModalTransaction] = useState<boolean>(false);

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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: `1px solid ${themeGlobal.palette.primary.main}`,
    padding: '6px 0',
    color: theme.palette.common.white,
    [`&.${tableCellClasses.head}`]: {
      fontSize: 10,
      opacity: 0.7,
      backgroundColor: theme.palette.primary.main,
      paddingLeft: '22px',
      paddingRight: '22px',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
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
    if (index === 'news') setMenuNews(event.currentTarget);
    if (index === 'calendar') setMenuCalendar(event.currentTarget);
    if (index === 'controller') setMenuController(event.currentTarget);
    if (index === 'moreSetting') setMenuMoreSetting(event.currentTarget);
  };

  const handleCloseMenu = (index: string) => {
    if (index === 'news') setMenuNews(null);
    if (index === 'calendar') setMenuCalendar(null);
    if (index === 'controller') setMenuController(null);
    if (index === 'moreSetting') setMenuMoreSetting(null);
  };

  return (
    <>
      <ModalComponent open={modalTransaction} setOpen={setModalTransaction} width={isSmDown ? '95%' : '400px'}>
        <Stack padding={1} direction="column" spacing={1} sx={{ width: '100%' }}>
          <AddTransaction setModalTransaction={setModalTransaction} />
        </Stack>
      </ModalComponent>
      <Stack padding={isSmDown ? 1 : 2}>
        <PartComponent padding="0" backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(14, 29, 36, 1))">
          <Stack
            direction={{ md: 'row', xxs: 'column' }}
            alignItems={{ md: 'center', xxs: 'flex-start' }}
            justifyContent="space-between"
            sx={{ padding: isSmDown ? '8px 8px 15px 15px' : '22px 26px 0 26px' }}
          >
            <Stack mb={{ xxs: 2 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="subtitle2" color={themeGlobal.palette.common.white} mb={1}>
                  Nate’s Custom Portfolio
                </Typography>
                <ArrowDropDownCircleIcon sx={{ color: themeGlobal.palette.common.white, width: 14, height: 14 }} />
              </Stack>
              <Stack
                direction={{ sm: 'row', xxs: 'column' }}
                alignItems={{ sm: 'center', xxs: 'flex-start' }}
                spacing={1}
              >
                <Typography variant="h3" color={themeGlobal.palette.common.white}>
                  $32,159,160
                </Typography>
                <Typography variant="caption" color={themeGlobal.palette.grey[200]}>
                  +$1,405,604
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ borderRadius: '4px', padding: '0 5px', backgroundColor: themeGlobal.palette.info.main }}
                >
                  <ArrowDropUpIcon sx={{ color: themeGlobal.palette.common.white, width: '14px', height: '18px' }} />
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    3.5%
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} ml={{ xxl: 1 }}>
              <Button
                startIcon={
                  <>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                      sx={{
                        backgroundColor: '#314149',
                        borderTopLeftRadius: '4px',
                        borderBottomLeftRadius: '4px',
                        width: 30,
                        height: 30,
                        marginLeft: '-14px',
                      }}
                    >
                      <AddCircleOutlineIcon />
                    </Stack>
                  </>
                }
                sx={{
                  backgroundColor: '#334D5B',
                  color: themeGlobal.palette.grey[200],
                  fontSize: '11px',
                  height: 30,
                  '&:hover': {
                    backgroundColor: '#2d4551',
                  },
                }}
                onClick={() => setModalTransaction(true)}
              >
                Add Transaction
              </Button>
              <Stack>
                <Button
                  variant="contained"
                  startIcon={<TuneRoundedIcon />}
                  sx={{ ...StyleButton, padding: '15px' }}
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
                  sx={{ ...StyleButton, padding: '15px' }}
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
          <Stack sx={{ padding: isSmDown ? '8px 12px' : '22px 26px' }}>
            <Grid container spacing={2}>
              <Grid item xxs={12} xl={6}>
                <PartComponent
                  backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
                  {...(isSmDown ? { padding: '8px' } : {})}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="subtitle2" color={themeGlobal.palette.common.white}>
                        Historical Trend
                      </Typography>
                      <Tooltip title="Info" arrow>
                        <Stack sx={{ cursor: 'pointer' }}>
                          <img src="/icons/info.svg" alt="" />
                        </Stack>
                      </Tooltip>
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
                          startIcon={<img src="/images/circle_logo.png" alt="" />}
                          sx={StyleButton}
                          onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'news')}
                        />
                        <NewsMenu menuKind={menuNews as HTMLElement} onClose={handleCloseMenu} />
                      </Stack>
                    </Stack>
                  </Stack>
                  <LineChart xAxis={xAxis} series={series1} />
                </PartComponent>
              </Grid>
              <Grid item md={12} sm={12} xl={6}>
                <PartComponent
                  backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
                  {...(isSmDown ? { padding: '8px' } : {})}
                >
                  <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="subtitle2" color={themeGlobal.palette.common.white}>
                        Allocation
                      </Typography>
                      <Tooltip title="Info" arrow>
                        <Stack sx={{ cursor: 'pointer' }}>
                          <img src="/icons/info.svg" alt="" />
                        </Stack>
                      </Tooltip>
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
                    </Stack>
                  </Stack>
                  <Stack direction={{ sm: 'row', xxs: 'column' }} alignItems="center" sx={{ width: '100%' }}>
                    <PieChart data={pieData} size={pieSize} />
                    <Stack sx={{ marginLeft: isSmDown ? 0 : '-80px' }} mt={{ xxs: 2 }}>
                      {pieData.map((item) => (
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                          mb={2}
                          spacing={6}
                          key={item.label}
                        >
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <Stack
                              sx={{ width: 15, height: 15, bgcolor: `${item.color}`, borderRadius: '100%' }}
                            ></Stack>
                            <Typography variant="overline" color={themeGlobal.palette.common.white}>
                              {item.label}
                            </Typography>
                          </Stack>
                          <Typography variant="caption" color={themeGlobal.palette.common.white}>
                            {item.value}%
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </PartComponent>
              </Grid>
            </Grid>
          </Stack>
          <TableContainer sx={{ marginBottom: '20px' }}>
            <Table sx={{ minWidth: 450 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell sx={{ textDecoration: 'underline' }}>SYMBOL/NAME</StyledTableCell>
                  <StyledTableCell align="left">QUANTITY</StyledTableCell>
                  <StyledTableCell align="center">PRICE CHANGE</StyledTableCell>
                  <StyledTableCell align="center">24H %</StyledTableCell>
                  <StyledTableCell align="center">MARKET VALUME</StyledTableCell>
                  <StyledTableCell align="center">COST BASIS</StyledTableCell>
                  <StyledTableCell align="center">GAIN / LOSS</StyledTableCell>
                  <StyledTableCell align="center">% OF HOLDINGS</StyledTableCell>
                  <StyledTableCell align="center">TYPE</StyledTableCell>
                  <StyledTableCell align="center">ACTIONS</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {PORTFOLIO.map((item) => (
                  <TableRow key={item.id}>
                    <StyledTableCell sx={{ paddingLeft: '22px' }}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <img src={item.icon} alt="" />
                        <Stack>
                          <Typography variant="subtitle2" color={themeGlobal.palette.common.white}>
                            {item.name}
                          </Typography>
                          <Typography variant="caption" color={themeGlobal.palette.grey[100]}>
                            {item.subName}
                          </Typography>
                        </Stack>
                      </Stack>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {parseFloat(item.quantiry.toString())
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color: item.price < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main,
                      }}
                    >
                      {item.price < 0 ? '-' : ''}${Math.abs(item.price)}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color: item.hourly < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main,
                      }}
                    >
                      {item.hourly}%
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      $
                      {parseFloat(item.marketValue.toString())
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      $
                      {parseFloat(item.cost.toString())
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color: item.gain_loss < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main,
                      }}
                    >
                      {item.gain_loss < 0 ? '-' : ''}$
                      {parseFloat(Math.abs(item.gain_loss).toString())
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      sx={{
                        color: item.holding < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main,
                      }}
                    >
                      {item.holding}%
                    </StyledTableCell>
                    <StyledTableCell align="center">{item.type}</StyledTableCell>
                    <StyledTableCell>
                      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                        <Stack>
                          <IconButton sx={{ width: '13px', height: '13px' }}>
                            <AddCircleOutlineIcon
                              sx={{ width: '17px', height: '17px', color: themeGlobal.palette.common.white }}
                            />
                          </IconButton>
                        </Stack>
                        <Stack>
                          <IconButton sx={{ width: '13px', height: '13px' }}>
                            <MoreHorizIcon
                              sx={{ width: '17px', height: '17px', color: themeGlobal.palette.common.white }}
                            />
                          </IconButton>
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
    </>
  );
}
