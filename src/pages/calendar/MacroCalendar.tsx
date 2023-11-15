import { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  IconButton,
  Menu,
  MenuProps,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
  useTheme,
  TableContainer,
} from '@mui/material';
import { SwiperClass, Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import useResponsive from '../../hooks/useResponsive';
import useWidth from '../../hooks/useWidth';
import { CalendarMenu, KindMenu, MoreSettingMenu, PartComponent } from '../../components';

const CALENDAR_DATA = [
  {
    id: 1,
    year: '2023',
    month: 'NOVEMBER',
    days: 'MONDAY',
    day: '13',
  },
  {
    id: 2,
    year: '2023',
    month: 'NOVEMBER',
    days: 'TUESDAY',
    day: '14',
  },
  {
    id: 3,
    year: '2023',
    month: 'NOVEMBER',
    days: 'WEDNESDAY',
    day: '15',
  },
  {
    id: 4,
    year: '2023',
    month: 'NOVEMBER',
    days: 'THURSDAY',
    day: '16',
  },
  {
    id: 5,
    year: '2023',
    month: 'NOVEMBER',
    days: 'FRIDAY',
    day: '17',
  },
  {
    id: 6,
    year: '2023',
    month: 'NOVEMBER',
    days: 'SATURDAY',
    day: '18',
  },
  {
    id: 7,
    year: '2023',
    month: 'NOVEMBER',
    days: 'SUNDAY',
    day: '19',
  },
];

const TABLE_DATA = [
  {
    id: 1,
    region: 'US',
    event: 'FOMC Meeting Minutes',
    time: '16:00 EST',
    period: 'Q1 2023',
  },
  {
    id: 2,
    region: 'US',
    event: 'Consumer Confidence Index',
    time: '16:00 EST',
    period: 'Q1 2023',
  },
  {
    id: 3,
    region: 'US',
    event: 'New Home Sales',
    time: '17:30 EST',
    period: 'Q1 2023',
  },
  {
    id: 4,
    region: 'US',
    event: 'Durable Goods Orders',
    time: '19:30 EST',
    period: 'Q1 2023',
  },
  {
    id: 5,
    region: 'US',
    event: 'GDP Growth Rate',
    time: '21:30 EST',
    period: 'Q1 2023',
  },
  {
    id: 6,
    region: 'US',
    event: 'Unemployment Rate',
    time: '22:30 EST',
    period: 'Q1 2023',
  },
  {
    id: 7,
    region: 'US',
    event: 'Consumer Price Index',
    time: '22:30 EST',
    period: 'Q1 2023',
  },
  {
    id: 8,
    region: 'US',
    event: 'Retail Sales',
    time: '22:30 EST',
    period: 'Q1 2023',
  },
];

export default function MacroCalendar() {
  const themeGlobal = useTheme();
  const isLgDown = useResponsive('down', 'lg');
  const isSmDown = useResponsive('down', 'sm');
  const windowWidth = useWidth();

  const [menuCalendar, setMenuCalendar] = useState<HTMLElement | null>(null);
  const [menuMoreSetting, setMenuMoreSetting] = useState<HTMLElement | null>(null);
  const [menuKind, setMenuKind] = useState<HTMLElement | null>(null);
  const [width, setWidth] = useState<number>(0);
  const [customSwiper, setCustomSwipe] = useState<SwiperClass | null>(null);
  const [activePosition, setActivePosition] = useState<number>(0);

  useEffect(() => {
    if (windowWidth >= 685) {
      setWidth(windowWidth - 285);
    } else {
      setWidth(400);
    }
  }, [windowWidth]);

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
    borderBottom: 'none',
    padding: '12px',
    color: theme.palette.common.white,
    [`&.${tableCellClasses.head}`]: {
      fontSize: 10,
      opacity: 0.7,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, index: string) => {
    if (index === 'kind') setMenuKind(event.currentTarget);
    if (index === 'moreSetting') setMenuMoreSetting(event.currentTarget);
    if (index === 'calendar') setMenuCalendar(event.currentTarget);
  };

  const handleCloseMenu = (index: string) => {
    if (index === 'kind') setMenuKind(null);
    if (index === 'moreSetting') setMenuMoreSetting(null);
    if (index === 'calendar') setMenuCalendar(null);
  };

  const handleSwiperPrev = () => {
    customSwiper?.slidePrev();
    // setActivePosition(Number(customSwiper?.activeIndex));
  };

  const handleSwiperNext = () => {
    customSwiper?.slideNext();
    // setActivePosition(Number(customSwiper?.activeIndex));
  };

  const handleClickSlide = (position: number) => {
    setActivePosition(position);
  };

  return (
    <Stack padding={isSmDown ? 1 : 2}>
      <PartComponent padding="0" backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(14, 29, 36, 1))">
        <Stack
          direction={{ sm: 'row', xxs: 'column' }}
          alignItems={{ sm: 'center', xxs: 'flex-start' }}
          justifyContent="space-between"
          spacing={1}
          padding={3}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h4" color={themeGlobal.palette.common.white}>
              Macro Calendar
            </Typography>
            <IconButton
              size="small"
              color="inherit"
              onClick={(e: React.MouseEvent<HTMLElement>) => handleOpenMenu(e, 'kind')}
            >
              <MoreHorizIcon sx={{ color: themeGlobal.palette.common.white }} />
            </IconButton>
            <KindMenu
              StyleMenu={StyleMenu}
              menuKind={menuKind as HTMLElement}
              onClose={handleCloseMenu}
              view="macro_calendar"
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
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
              <Button variant="contained" startIcon={<NotificationsIcon />} sx={StyleButton} />
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          bgcolor={themeGlobal.palette.primary.main}
          height={83}
          px={2}
          py={1.3}
          sx={{ width: '100%' }}
          gap={1}
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              width: 23,
              height: '100%',
              borderRadius: '3px',
              backgroundImage: 'linear-gradient(to bottom, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))',
              cursor: 'pointer',
            }}
            onClick={handleSwiperPrev}
          >
            <NavigateBeforeIcon sx={{ color: themeGlobal.palette.common.white }} />
          </Stack>
          <SwiperComponent
            slidesPerView={5}
            spaceBetween={13}
            className="mySwiper"
            onSwiper={(swp: SwiperClass) => setCustomSwipe(swp)}
            style={{ width: `${width}px` }}
            breakpoints={{
              1200: {
                slidesPerView: 5,
              },
              992: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          >
            {CALENDAR_DATA.map((item, key: number) => (
              <SwiperSlide key={item.id} style={{ height: '60px' }} onClick={() => handleClickSlide(key)}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  gap={1}
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '3px',
                    ...(activePosition === key
                      ? { backgroundColor: '#A5BBBE' }
                      : { backgroundImage: 'linear-gradient(to bottom, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))' }),
                  }}
                >
                  <Typography
                    variant="h3"
                    color={activePosition === key ? themeGlobal.palette.common.black : themeGlobal.palette.common.white}
                  >
                    {item.day}
                  </Typography>
                  <Stack>
                    <Typography
                      variant="overline"
                      color={
                        activePosition === key ? themeGlobal.palette.common.black : themeGlobal.palette.common.white
                      }
                    >
                      {item.month} {item.year}
                    </Typography>
                    <Typography
                      variant="overline"
                      color={
                        activePosition === key ? themeGlobal.palette.common.black : themeGlobal.palette.common.white
                      }
                    >
                      {item.days}
                    </Typography>
                  </Stack>
                </Stack>
              </SwiperSlide>
            ))}
          </SwiperComponent>
          <Stack
            direction="row"
            alignItems="center"
            sx={{
              width: 23,
              height: '100%',
              borderRadius: '3px',
              backgroundImage: 'linear-gradient(to bottom, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))',
              cursor: 'pointer',
            }}
            onClick={handleSwiperNext}
          >
            <NavigateNextIcon sx={{ color: themeGlobal.palette.common.white }} />
          </Stack>
        </Stack>
        <Stack pl={3} pr={3}>
          <TableContainer sx={{ marginBottom: '20px' }}>
            <Table sx={{ minWidth: 450 }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell width="25%">REGION</StyledTableCell>
                  <StyledTableCell align="left">EVENT</StyledTableCell>
                  <StyledTableCell align="left">TIME</StyledTableCell>
                  <StyledTableCell align="left">PERIOD</StyledTableCell>
                  <StyledTableCell align="left">&nbsp;</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TABLE_DATA.map((item) => (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell>{item.region}</StyledTableCell>
                    <StyledTableCell>{item.event}</StyledTableCell>
                    <StyledTableCell>{item.time}</StyledTableCell>
                    <StyledTableCell>{item.period}</StyledTableCell>
                    <StyledTableCell>
                      <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                        <Stack>
                          <IconButton sx={{ width: '13px', height: '13px' }}>
                            <NotificationsIcon
                              sx={{ width: '17px', height: '17px', color: themeGlobal.palette.common.white }}
                            />
                          </IconButton>
                        </Stack>
                        <Checkbox
                          size="small"
                          sx={{
                            color: '#A4C7D4',
                            '&.Mui-checked': {
                              color: '#A4C7D4',
                            },
                          }}
                        />
                      </Stack>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </PartComponent>
    </Stack>
  );
}
