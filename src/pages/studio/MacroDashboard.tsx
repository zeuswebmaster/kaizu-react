import { useState } from 'react';
import {
  Stack,
  Typography,
  IconButton,
  styled,
  Menu,
  MenuProps,
  useTheme,
  Grid,
  Button,
  TableCell,
  tableCellClasses,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
} from '@mui/material';

import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import ForwardIcon from '@mui/icons-material/Forward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
  KindMenu,
  PartComponent,
  ControllerMenu,
  NewsMenu,
  CalendarMenu,
  LineChart,
  MoreSettingMenu,
} from '../../components';

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

const SCREENER = [
  {
    id: 1,
    country: 'US',
    currency: 'United States Dollar',
    actual: 1.0,
    value: 1.2,
    hourly: 2.3,
    week: 2.3,
  },
  {
    id: 2,
    country: 'IN',
    currency: 'Indian Rupee',
    actual: 82.26,
    value: -3,
    hourly: 4,
    week: 4,
  },
  {
    id: 3,
    country: 'JP',
    currency: 'Japanese Yen',
    actual: 142.59,
    value: 0.5,
    hourly: -1,
    week: -1,
  },
  {
    id: 4,
    country: 'GB',
    currency: 'Great British Pound',
    actual: 0.78,
    value: 1,
    hourly: 2.3,
    week: 2.3,
  },
  {
    id: 5,
    country: 'CA',
    currency: 'Canadian Dollar',
    actual: 1.32,
    value: 0,
    hourly: 5,
    week: 5,
  },
  {
    id: 6,
    country: 'CN',
    currency: 'Chinese Yuan',
    actual: 7.11,
    value: -1,
    hourly: 7,
    week: 7,
  },
  {
    id: 7,
    country: 'EU',
    currency: 'Euro',
    actual: 0.91,
    value: 3.5,
    hourly: 8,
    week: 8,
  },
  {
    id: 8,
    country: 'BR',
    currency: 'Brazilian Bolivar',
    actual: 0.91,
    value: 1.2,
    hourly: 9,
    week: 9,
  },
];

export default function MacroDashboard() {
  const themeGlobal = useTheme();

  const [menuKind, setMenuKind] = useState<HTMLElement | null>(null);
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
    if (index === 'kind') setMenuKind(event.currentTarget);
    if (index === 'controller') setMenuController(event.currentTarget);
    if (index === 'moreSetting') setMenuMoreSetting(event.currentTarget);
    if (index === 'news') setMenuNews(event.currentTarget);
    if (index === 'calendar') setMenuCalendar(event.currentTarget);
  };

  const handleCloseMenu = (index: string) => {
    if (index === 'kind') setMenuKind(null);
    if (index === 'controller') setMenuController(null);
    if (index === 'moreSetting') setMenuMoreSetting(null);
    if (index === 'news') setMenuNews(null);
    if (index === 'calendar') setMenuCalendar(null);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
        <GridViewSharpIcon sx={{ width: 17, height: 17, color: themeGlobal.palette.info.main }} />
        <Typography variant="h4" color={themeGlobal.palette.common.white}>
          Macro Dashboard
        </Typography>
        <IconButton
          size="small"
          color="inherit"
          onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'kind')}
        >
          <MoreHorizIcon sx={{ color: themeGlobal.palette.common.white }} />
        </IconButton>
        <KindMenu StyleMenu={StyleMenu} menuKind={menuKind as HTMLElement} onClose={handleCloseMenu} />
      </Stack>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={4}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="caption" color={themeGlobal.palette.common.white}>
                  News
                </Typography>
                <Typography fontSize={10} color={themeGlobal.palette.common.white} sx={{ opacity: '0.7' }}>
                  #macro #bitcoin #stocks #politics #china #fed
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
                  Screener: FX
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
              <Table sx={{ minWidth: 450 }}>
                <TableHead>
                  <TableRow
                    sx={{
                      '& td, & th': { border: 0 },
                    }}
                  >
                    <StyledTableCell>&nbsp;</StyledTableCell>
                    <StyledTableCell>CURRENCY</StyledTableCell>
                    <StyledTableCell align="right">ACTUAL</StyledTableCell>
                    <StyledTableCell align="right">+/-</StyledTableCell>
                    <StyledTableCell align="right">24H %</StyledTableCell>
                    <StyledTableCell align="right">7D %</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {SCREENER.map((item) => (
                    <TableRow
                      key={item.id}
                      sx={{
                        '& td, & th': { border: 0 },
                      }}
                    >
                      <StyledTableCell>{item.country}</StyledTableCell>
                      <StyledTableCell>{item.currency}</StyledTableCell>
                      <StyledTableCell align="right">{item.actual}</StyledTableCell>
                      <StyledTableCell align="right" sx={{ color: item.value < 0 ? '#AD1128' : '#209979' }}>
                        {item.value >= 0 ? `+${item.value}` : `-${item.value}`}
                      </StyledTableCell>
                      <StyledTableCell align="right" sx={{ color: item.hourly < 0 ? '#AD1128' : '#209979' }}>
                        {item.hourly >= 0 ? `+${item.hourly}%` : `-${item.value}%`}
                      </StyledTableCell>
                      <StyledTableCell align="right" sx={{ color: item.week < 0 ? '#AD1128' : '#209979' }}>
                        {item.week >= 0 ? `+${item.week}%` : `-${item.value}%`}
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
              <LineChart />
            </Stack>
          </PartComponent>
        </Grid>
        <Grid item md={6} sm={12}>
          <PartComponent backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
            <Stack direction="row" alignItems="flex-start" justifyContent="space-between" mb={1}>
              <Stack>
                <Stack direction="row" alignItems="center" spacing={1} mb={0.5}>
                  <Typography variant="caption" color={themeGlobal.palette.common.white}>
                    Nasdaq
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
              <LineChart />
            </Stack>
          </PartComponent>
        </Grid>
      </Grid>
    </>
  );
}
