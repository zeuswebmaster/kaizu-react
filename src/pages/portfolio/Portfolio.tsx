import { useState } from 'react';

import {
  Button,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  styled,
  tableCellClasses,
  useTheme,
} from '@mui/material';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useWidth from '../../hooks/useWidth';
import {
  AddTransaction,
  CalendarMenu,
  CreatePortfolio,
  LineChart,
  MenuSelectItem,
  ModalComponent,
  NewsMenu,
  PartComponent,
  PieChart,
} from '../../components';

const PORTFOLIO = [
  {
    id: 1,
    name: 'Dad’s Portfolio',
    value: 25710506,
    change_1: -4.55,
    change_2: -1.04,
    cost: 305.32,
    gain_loss: 19150203,
    account: 78,
  },
  {
    id: 2,
    name: 'Asian Tech Stocks',
    value: 2387678,
    change_1: -138.8,
    change_2: 0.48,
    cost: 18515.15,
    gain_loss: 82.26,
    account: 7.5,
  },
  {
    id: 3,
    name: 'Bitcoin Mining Companies',
    value: 270778,
    change_1: -3.09,
    change_2: -0.16,
    cost: 1406.89,
    gain_loss: 142.59,
    account: 1.3,
  },
  {
    id: 4,
    name: 'Real Estate Portfolio',
    value: 7690,
    change_1: -2.68,
    change_2: 3.38,
    cost: 55.32,
    gain_loss: 0.78,
    account: 0.5,
  },
  {
    id: 5,
    name: 'Nate’s Portfolio',
    value: 5706,
    change_1: 0.07,
    change_2: 0.061,
    cost: 110.32,
    gain_loss: 1.32,
    account: 0.4,
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

const pieSize = {
  width: 450,
  height: 250,
};

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

export default function Portfolio() {
  const themeGlobal = useTheme();
  const windowWidth = useWidth();

  const [menuNews, setMenuNews] = useState<HTMLElement | null>(null);
  const [menuCalendar, setMenuCalendar] = useState<HTMLElement | null>(null);
  const [selectView, setSelectView] = useState<string>('list');
  const [menu, setMenu] = useState<HTMLElement | null>(null);
  const [maskFirst, setMaskFirst] = useState<boolean>(false);
  const [maskSecond, setMaskSecond] = useState<boolean>(false);
  const [maskThird, setMaskThird] = useState<boolean>(false);
  const [modalPortfolio, setModalPortfolio] = useState<boolean>(false);
  const [modalTransaction, setModalTransaction] = useState<boolean>(false);

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
    padding: '15px 0',
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

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, index: string) => {
    if (index === 'news') setMenuNews(event.currentTarget);
    if (index === 'calendar') setMenuCalendar(event.currentTarget);
    if (index === 'panel') setMenu(event.currentTarget);
  };

  const handleCloseMenu = (index: string) => {
    if (index === 'news') setMenuNews(null);
    if (index === 'calendar') setMenuCalendar(null);
    if (index === 'panel') setMenu(null);
  };

  const handleDeleteFirst = () => {};

  const handleDeleteSecond = () => {};

  const handleDeleteThird = () => {};

  return (
    <>
      <ModalComponent open={modalPortfolio} setOpen={setModalPortfolio} width={500}>
        <Stack padding={2} direction="column" spacing={2} sx={{ width: '100%' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h5" color={themeGlobal.palette.common.white}>
              Create new portfolio
            </Typography>
            <IconButton onClick={() => setModalPortfolio(false)}>
              <CloseIcon sx={{ color: themeGlobal.palette.common.white, width: '30px', height: '30px' }} />
            </IconButton>
          </Stack>
          <CreatePortfolio setModalPortfolio={setModalPortfolio} setModalTransaction={setModalTransaction} />
        </Stack>
      </ModalComponent>
      <ModalComponent open={modalTransaction} setOpen={setModalTransaction} width={400}>
        <Stack padding={1} direction="column" spacing={1} sx={{ width: '100%' }}>
          <AddTransaction setModalTransaction={setModalTransaction} />
        </Stack>
      </ModalComponent>
      <Stack padding={2}>
        <PartComponent padding="0" backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(14, 29, 36, 1))">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: '22px 26px 0 26px' }}
          >
            <Stack>
              <Typography variant="h4" color={themeGlobal.palette.common.white} mb={1}>
                My Portfolios
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="caption" color={themeGlobal.palette.grey[200]}>
                  $32,159,160
                </Typography>
                <Stack sx={{ borderRadius: '6px', padding: '0 5px', backgroundColor: themeGlobal.palette.info.main }}>
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    -3.5%
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
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
                onClick={() => setModalPortfolio(true)}
              >
                New Portfolio
              </Button>
              <Button
                variant="contained"
                startIcon={<AppsIcon />}
                sx={{
                  ...StyleButton,
                  ...(selectView === 'panel' ? { backgroundColor: '#CFD2D3' } : {}),
                  ...(selectView === 'panel'
                    ? {
                        '& svg': {
                          color: themeGlobal.palette.common.black,
                        },
                      }
                    : {}),
                  padding: '15px',
                  '&:hover': {
                    backgroundColor: '#CFD2D3',
                    '& svg': {
                      color: themeGlobal.palette.common.black,
                    },
                  },
                }}
                onClick={() => setSelectView('panel')}
              />
              <Button
                variant="contained"
                startIcon={<MenuIcon />}
                sx={{
                  ...StyleButton,
                  padding: '15px',
                  ...(selectView === 'list' ? { backgroundColor: '#CFD2D3' } : {}),
                  ...(selectView === 'list'
                    ? {
                        '& svg': {
                          color: themeGlobal.palette.common.black,
                        },
                      }
                    : {}),
                  '&:hover': {
                    backgroundColor: '#CFD2D3',
                    '& svg': {
                      color: themeGlobal.palette.common.black,
                    },
                  },
                }}
                onClick={() => setSelectView('list')}
              />
            </Stack>
          </Stack>
          <Stack sx={{ padding: '22px 26px' }}>
            <Grid container spacing={2}>
              <Grid item md={12} sm={12} xl={6}>
                <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
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
                <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
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
                  <Stack position="relative">
                    <PieChart data={pieData} size={pieSize} />
                    <Stack
                      position="absolute"
                      sx={{ right: windowWidth > 1535 || windowWidth <= 1024 ? 0 : '200px', top: '39px' }}
                    >
                      {pieData.map((item) => (
                        <Typography
                          variant="caption"
                          color={themeGlobal.palette.common.white}
                          key={item.label}
                          sx={{ marginBottom: '21px' }}
                        >
                          {item.value}%
                        </Typography>
                      ))}
                    </Stack>
                  </Stack>
                </PartComponent>
              </Grid>
            </Grid>
          </Stack>
          {selectView === 'list' && (
            <TableContainer sx={{ marginBottom: '20px' }}>
              <Table sx={{ minWidth: 450 }}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell width="25%">Name</StyledTableCell>
                    <StyledTableCell align="center">MARKET VALUE</StyledTableCell>
                    <StyledTableCell align="center">24H CHANGE</StyledTableCell>
                    <StyledTableCell align="center">COST BASIS</StyledTableCell>
                    <StyledTableCell align="center">GAIN / LOSS</StyledTableCell>
                    <StyledTableCell align="center">% OF ACCOUNT</StyledTableCell>
                    <StyledTableCell align="center">ACTIONS</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {PORTFOLIO.map((item) => (
                    <TableRow key={item.id}>
                      <StyledTableCell sx={{ paddingLeft: '22px' }}>{item.name}</StyledTableCell>
                      <StyledTableCell align="center">
                        $
                        {parseFloat(item.value.toString())
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        sx={{
                          color: item.change_1 < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main,
                        }}
                      >
                        {item.change_1}({item.change_2}%)
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        $
                        {parseFloat(item.cost.toString())
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        $
                        {parseFloat(item.gain_loss.toString())
                          .toFixed(2)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </StyledTableCell>
                      <StyledTableCell
                        align="center"
                        sx={{
                          color: item.account < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main,
                        }}
                      >
                        {item.account}%
                      </StyledTableCell>
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
          )}
        </PartComponent>

        {selectView === 'panel' && (
          <>
            <Stack pt={2}>
              <Grid container spacing={2}>
                <Grid item md={3} sm={6}>
                  <MenuSelectItem
                    icon={
                      <AccountBalanceWalletIcon sx={{ width: 64, height: 64, color: themeGlobal.palette.info.main }} />
                    }
                    url="/portfolio/detail"
                    title="Nate’s Portfolio"
                    info="$32,658,135"
                    otherInfo="+$708,168 (18.5%)"
                    color={themeGlobal.palette.info.main}
                    subInfo="Created May 13, 2023"
                    menu={menu as HTMLElement}
                    onOpen={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'panel')}
                    onClose={() => handleCloseMenu('panel')}
                    mask={maskFirst}
                    setMask={setMaskFirst}
                    onDelete={handleDeleteFirst}
                    kind="portfolio"
                  />
                </Grid>
                <Grid item md={3} sm={6}>
                  <MenuSelectItem
                    icon={
                      <AccountBalanceWalletIcon sx={{ width: 64, height: 64, color: themeGlobal.palette.info.main }} />
                    }
                    url="/portfolio/detail"
                    title="Asian Tech Stocks"
                    info="$32,658,135"
                    otherInfo="+$708,168 (18.5%)"
                    color={themeGlobal.palette.info.main}
                    subInfo="Created May 13, 2023"
                    menu={menu as HTMLElement}
                    onOpen={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'panel')}
                    onClose={() => handleCloseMenu('panel')}
                    mask={maskSecond}
                    setMask={setMaskSecond}
                    onDelete={handleDeleteSecond}
                    kind="portfolio"
                  />
                </Grid>
                <Grid item md={3} sm={6}>
                  <MenuSelectItem
                    icon={
                      <AccountBalanceWalletIcon sx={{ width: 64, height: 64, color: themeGlobal.palette.info.main }} />
                    }
                    url="/portfolio/detail"
                    title="Dad’s Portfolio"
                    info="$32,658,135"
                    otherInfo="+$708,168 (18.5%)"
                    color={themeGlobal.palette.info.main}
                    subInfo="Created May 13, 2023"
                    menu={menu as HTMLElement}
                    onOpen={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'panel')}
                    onClose={() => handleCloseMenu('panel')}
                    mask={maskThird}
                    setMask={setMaskThird}
                    onDelete={handleDeleteThird}
                    kind="portfolio"
                  />
                </Grid>
                <Grid item md={3} sm={6}>
                  <MenuSelectItem
                    icon={
                      <AddCircleOutlineSharpIcon
                        sx={{
                          width: 64,
                          height: 64,
                          color: themeGlobal.palette.info.main,
                        }}
                      />
                    }
                    isEdit={false}
                    title="New Portfolio"
                    subInfo={
                      <>
                        Create a new portfolio <br /> and add assets
                      </>
                    }
                    kind="portfolio"
                  />
                </Grid>
              </Grid>
            </Stack>
          </>
        )}
      </Stack>
    </>
  );
}
