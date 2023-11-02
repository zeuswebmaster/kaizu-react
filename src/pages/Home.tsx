import {
  Button,
  Grid,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  TypographyProps,
  styled,
  useTheme,
  tableCellClasses,
  TableBody,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { PartComponent } from '../components';

const DASHBOARDS = [
  {
    id: 1,
    title: 'Macro Dashboard',
    value: '36 widgets',
    icon: '/icons/ico_fire.svg',
  },
  {
    id: 2,
    title: 'Bitcoin Mining Companies',
    value: '36 widgets',
    icon: '/icons/ico_header.svg',
  },
  {
    id: 3,
    title: 'Asian Tech Stocks',
    value: '36 widgets',
    icon: '/icons/ico_notebook.svg',
  },
  {
    id: 4,
    title: 'Fed Data',
    value: '36 widgets',
    icon: '/icons/ico_bank.svg',
  },
  {
    id: 5,
    title: 'Treasury Bonds',
    value: '36 widgets',
    icon: '/icons/ico_money.svg',
  },
  {
    id: 6,
    title: 'Foreign Currencies',
    value: '36 widgets',
    icon: '/icons/ico_money_1.svg',
  },
  {
    id: 7,
    title: 'Commodities',
    value: '36 widgets',
    icon: '/icons/ico_oil.svg',
  },
  {
    id: 8,
    title: 'Precious Metals',
    value: '36 widgets',
    icon: '/icons/ico_golden.svg',
  },
  {
    id: 9,
    title: 'Real Estate Data',
    value: '36 widgets',
    icon: '/icons/ico_home.svg',
  },
];

const UPDATES = [
  {
    id: 1,
    update: 'New user interface now live! Experience the change.',
    date: 'May 21, 14:31 EST',
  },
  {
    id: 2,
    update: 'Speed boost of 25% implemented for faster access.',
    date: 'May 23, 16:16 EST',
  },
  {
    id: 3,
    update: 'Latest security patch deployed. Stay protected.',
    date: 'May 25, 17:37 EST',
  },
  {
    id: 4,
    update: 'API upgraded for better integration and flexibility.',
    date: 'May 27, 19:39 EST',
  },
  {
    id: 5,
    update: 'Reports enhanced with new visualizations and data.',
    date: 'May 28, 21:51 EST',
  },
];

const PORTFOLIO = [
  {
    id: 1,
    portfolio: 'Asian Tech Stocks',
    hourly: -10.5,
    value: 5103501,
  },
  {
    id: 2,
    portfolio: 'Treasury Bonds',
    hourly: 8.9,
    value: 851304,
  },
  {
    id: 3,
    portfolio: 'Bitcoin Miners',
    hourly: 9.7,
    value: 614014,
  },
  {
    id: 4,
    portfolio: 'Real Estate',
    hourly: 8.9,
    value: 414014,
  },
  {
    id: 5,
    portfolio: 'Crypto Portfolio',
    hourly: -7.3,
    value: 249041,
  },
];

const CALENDAR = [
  {
    id: 1,
    title: 'Asian Tech Stocks',
    value: 'May 21, 16:00 EST',
  },
  {
    id: 2,
    title: 'Treasury Bonds',
    value: 'May 23, 16:00 EST',
  },
  {
    id: 3,
    title: 'Bitcoin Miners',
    value: 'May 25, 17:30 EST',
  },
  {
    id: 4,
    title: 'Real Estate',
    value: 'May 27, 19:30 EST',
  },
  {
    id: 5,
    title: 'Crypto Portfolio',
    value: 'May 28, 21:30 EST',
  },
];

const WATCHLIST = [
  {
    id: 1,
    watchlist: 'Asian Tech Stocks',
    hourly: -10.5,
    week: -10.5,
  },
  {
    id: 2,
    watchlist: 'Treasury Bonds',
    hourly: 8.9,
    week: 8.9,
  },
  {
    id: 3,
    watchlist: 'Bitcoin Miners',
    hourly: 9.7,
    week: 9.7,
  },
  {
    id: 4,
    watchlist: 'Real Estate',
    hourly: 8.9,
    week: 8.9,
  },
  {
    id: 5,
    watchlist: 'Crypto Portfolio',
    hourly: -7.3,
    week: -7.3,
  },
];

export default function Home() {
  const themeGlobal = useTheme();

  const StylesTypography = styled(Typography)<TypographyProps>(() => ({
    overflow: 'hidden',
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: 'none',
    padding: '6px 0',
    color: theme.palette.common.white,
    [`&.${tableCellClasses.head}`]: {
      fontSize: 10,
      opacity: 0.7,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
  }));

  return (
    <Stack direction="column" spacing={2} padding={2}>
      <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
        <Stack padding={2}>
          <Stack direction="row" alignItems="center" spacing={1} mb={2}>
            <Typography variant="h5" color={themeGlobal.palette.common.white}>
              Welcome back, Ser James. Today is Wednesday, August 23, 2023
            </Typography>
            <Tooltip title="Info" arrow>
              <Stack sx={{ cursor: 'pointer' }}>
                <img src="/icons/info.svg" alt="" />
              </Stack>
            </Tooltip>
          </Stack>
          <Typography fontSize={15} fontWeight={400} lineHeight={1.8} color={themeGlobal.palette.common.white}>
            Welcome to Kaizu`s Financial Fables: Where bear markets become unicorns overnight! Today`s tale:{' '}
            <span style={{ color: '#3BA594', fontWeight: 'bold' }}>Stocks soar</span>&nbsp; as if sprinkled with pixie
            dust, Bitcoin glitters like never before, and your portfolio`s ready for an all-night binger. Stay tuned for
            an <span style={{ color: '#3BA594', fontWeight: 'bold' }}>Chinese economic rollercoaster</span>&nbsp;
            followed by the apocalypse. Join the fiesta! 🎉
          </Typography>
        </Stack>
      </PartComponent>
      <PartComponent backgroundColor={themeGlobal.palette.background.paper}>
        <Grid container spacing={2} mb={2}>
          <Grid item sm={12} md={6} xs={12}>
            <PartComponent backgroundImage="linear-gradient(to right, rgba(23, 41, 51, 1), rgba(31, 54, 67, 1), rgba(23, 41, 52, 1))">
              <Stack direction="row" alignItems="center" spacing={1} mb={2.5}>
                <DashboardIcon sx={{ width: 16, height: 16, color: themeGlobal.palette.info.main }} />
                <Typography fontSize={12} fontWeight={700} color={themeGlobal.palette.common.white}>
                  My Dashboards
                </Typography>
              </Stack>
              <Stack mb={2}>
                <Grid container spacing={1}>
                  {DASHBOARDS.map((item) => (
                    <Grid key={item.id} item sm={12} md={12} xs={12} lg={6} xl={4}>
                      <PartComponent backgroundImage="linear-gradient(to bottom, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <img src={item.icon} alt="" />
                          <Stack>
                            <StylesTypography fontSize={10} fontWeight={600} color={themeGlobal.palette.common.white}>
                              {item.title}
                            </StylesTypography>
                            <Typography fontSize={10} color="#B9D0D9">
                              {item.value}
                            </Typography>
                          </Stack>
                        </Stack>
                      </PartComponent>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  width: '107px',
                  padding: '3px 8px',
                  backgroundColor: themeGlobal.palette.primary.main,
                  '&:hover': {
                    opacity: 10,
                    backgroundColor: themeGlobal.palette.grey[500_8],
                  },
                }}
              >
                <Typography fontSize={10}>See all dashboards</Typography>
              </Button>
            </PartComponent>
          </Grid>
          <Grid item sm={12} md={6} xs={12}>
            <PartComponent backgroundImage="linear-gradient(to right, rgba(23, 41, 51, 1), rgba(31, 54, 67, 1), rgba(23, 41, 52, 1))">
              <Stack direction="row" alignItems="center" spacing={1} mb={2.5}>
                <SettingsIcon sx={{ width: 16, height: 16, color: themeGlobal.palette.info.main }} />
                <Typography fontSize={12} fontWeight={700} color={themeGlobal.palette.common.white}>
                  Kaizu System Updates
                </Typography>
              </Stack>
              <Stack mb={2}>
                <TableContainer>
                  <Table sx={{ minWidth: 450 }}>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>UPDATE</StyledTableCell>
                        <StyledTableCell align="right">DATE</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {UPDATES.map((item) => (
                        <TableRow key={item.id}>
                          <StyledTableCell>{item.update}</StyledTableCell>
                          <StyledTableCell align="right">{item.date}</StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  width: '107px',
                  padding: '3px 8px',
                  backgroundColor: themeGlobal.palette.primary.main,
                  '&:hover': {
                    opacity: 10,
                    backgroundColor: themeGlobal.palette.grey[500_8],
                  },
                }}
              >
                <Typography fontSize={10}>See all updates</Typography>
              </Button>
            </PartComponent>
          </Grid>
        </Grid>
        <Grid container spacing={2} mb={2}>
          <Grid item sm={12} md={4} xs={12}>
            <PartComponent backgroundImage="linear-gradient(to right, rgba(23, 41, 51, 1), rgba(31, 54, 67, 1), rgba(23, 41, 52, 1))">
              <Stack direction="row" alignItems="center" spacing={1} mb={2.5}>
                <BarChartIcon sx={{ width: 16, height: 16, color: themeGlobal.palette.info.main }} />
                <Typography fontSize={12} fontWeight={700} color={themeGlobal.palette.common.white}>
                  My Portfolios
                </Typography>
              </Stack>
              <Stack mb={2}>
                <TableContainer>
                  <Table sx={{ minWidth: 300 }}>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>PORTFOLIO</StyledTableCell>
                        <StyledTableCell align="right">24H %</StyledTableCell>
                        <StyledTableCell align="right">VALUE</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {PORTFOLIO.map((item) => (
                        <TableRow key={item.id}>
                          <StyledTableCell>{item.portfolio}</StyledTableCell>
                          <StyledTableCell align="right" sx={{ color: item.hourly < 0 ? '#AD1128' : '#209979' }}>
                            {item.hourly}
                          </StyledTableCell>
                          <StyledTableCell align="right">${item.value.toLocaleString()}</StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  width: '107px',
                  padding: '3px 8px',
                  backgroundColor: themeGlobal.palette.primary.main,
                  '&:hover': {
                    opacity: 10,
                    backgroundColor: themeGlobal.palette.grey[500_8],
                  },
                }}
              >
                <Typography fontSize={10}>See all portfolios</Typography>
              </Button>
            </PartComponent>
          </Grid>
          <Grid item sm={12} md={4} xs={12}>
            <PartComponent backgroundImage="linear-gradient(to right, rgba(23, 41, 51, 1), rgba(31, 54, 67, 1), rgba(23, 41, 52, 1))">
              <Stack direction="row" alignItems="center" spacing={1} mb={2.5}>
                <CalendarMonthIcon sx={{ width: 16, height: 16, color: themeGlobal.palette.info.main }} />
                <Typography fontSize={12} fontWeight={700} color={themeGlobal.palette.common.white}>
                  My Calendars
                </Typography>
              </Stack>
              <Stack mb={2}>
                <TableContainer>
                  <Table sx={{ minWidth: 300 }}>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>CALENDAR</StyledTableCell>
                        <StyledTableCell align="right">NEXT EVENT</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {CALENDAR.map((item) => (
                        <TableRow key={item.id}>
                          <StyledTableCell>{item.title}</StyledTableCell>
                          <StyledTableCell align="right">${item.value}</StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  width: '107px',
                  padding: '3px 8px',
                  backgroundColor: themeGlobal.palette.primary.main,
                  '&:hover': {
                    opacity: 10,
                    backgroundColor: themeGlobal.palette.grey[500_8],
                  },
                }}
              >
                <Typography fontSize={10}>See all calendars</Typography>
              </Button>
            </PartComponent>
          </Grid>
          <Grid item sm={12} md={4} xs={12}>
            <PartComponent backgroundImage="linear-gradient(to right, rgba(23, 41, 51, 1), rgba(31, 54, 67, 1), rgba(23, 41, 52, 1))">
              <Stack direction="row" alignItems="center" spacing={1} mb={2.5}>
                <img src="/icons/ico_watchlist.svg" alt="" />
                <Typography fontSize={12} fontWeight={700} color={themeGlobal.palette.common.white}>
                  My Watchlists
                </Typography>
              </Stack>
              <Stack mb={2}>
                <TableContainer>
                  <Table sx={{ minWidth: 300 }}>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>WATCHLIST</StyledTableCell>
                        <StyledTableCell align="right">24H %</StyledTableCell>
                        <StyledTableCell align="right">7D %</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {WATCHLIST.map((item) => (
                        <TableRow key={item.id}>
                          <StyledTableCell>{item.watchlist}</StyledTableCell>
                          <StyledTableCell align="right" sx={{ color: item.hourly < 0 ? '#AD1128' : '#209979' }}>
                            {item.hourly}
                          </StyledTableCell>
                          <StyledTableCell align="right" sx={{ color: item.week < 0 ? '#AD1128' : '#209979' }}>
                            {item.week}
                          </StyledTableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  width: '107px',
                  padding: '3px 8px',
                  backgroundColor: themeGlobal.palette.primary.main,
                  '&:hover': {
                    opacity: 10,
                    backgroundColor: themeGlobal.palette.grey[500_8],
                  },
                }}
              >
                <Typography fontSize={10}>See all watchlists</Typography>
              </Button>
            </PartComponent>
          </Grid>
        </Grid>
      </PartComponent>
    </Stack>
  );
}
