import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuProps,
  Stack,
  Typography,
  styled,
  useTheme,
  Button,
  TableCell,
  tableCellClasses,
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableHead,
} from '@mui/material';

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { PartComponent, MoreSettingMenu } from '../../components';

const ASSETS = [
  {
    id: 1,
    symbol: 'GOLD',
    name: 'GOLD',
    price: 1920,
    market: 12.667,
    hourlyValue: 25710506,
    hourly: -1.04,
    week: -1.04,
    day: -1.04,
    year: -1.04,
    type: 'Stock',
    favority: '0',
    icon: '/images/gold.png',
  },
  {
    id: 2,
    symbol: 'AAPL',
    name: 'Apple',
    price: 174,
    market: 2.736,
    hourlyValue: 2387678,
    hourly: 0.48,
    week: 0.48,
    day: 0.48,
    year: 0.48,
    type: 'Crypto',
    favority: '1',
    icon: '/images/apply.png',
  },
  {
    id: 3,
    symbol: 'MSFT',
    name: 'Microsoft',
    price: 316.88,
    market: 2.346,
    hourlyValue: 270778,
    hourly: -0.16,
    week: -0.16,
    day: -0.16,
    year: -0.16,
    type: 'Metal',
    favority: '0',
    icon: '/images/microsoft.png',
  },
  {
    id: 4,
    symbol: '2222.SR',
    name: 'Saudi Aramco',
    price: 9.35,
    market: 2.261,
    hourlyValue: 7690,
    hourly: 3.38,
    week: 3.38,
    day: 3.38,
    year: 3.38,
    type: 'Crypto',
    favority: '0',
    icon: '/images/saudi.png',
  },
  {
    id: 5,
    symbol: 'GOOG',
    name: 'Alphabet',
    price: 130.46,
    market: 1.653,
    hourlyValue: 5706,
    hourly: 0.061,
    week: 0.061,
    day: 0.061,
    year: 0.061,
    type: 'Bond',
    favority: '0',
    icon: '/images/google.png',
  },
  {
    id: 6,
    symbol: 'AMZN',
    name: 'Amazon',
    price: 133.98,
    market: 1.374,
    hourlyValue: 2387678,
    hourly: -1.04,
    week: -1.04,
    day: -1.04,
    year: -1.04,
    type: 'Stock',
    favority: '1',
    icon: '/images/amazon.png',
  },
  {
    id: 7,
    symbol: 'SILVER',
    name: 'SILVER',
    price: 22.74,
    market: 1.28,
    hourlyValue: 2387678,
    hourly: 0.48,
    week: 0.48,
    day: 0.48,
    year: 0.48,
    type: 'Crypto',
    favority: '0',
    icon: '/images/silver.png',
  },
  {
    id: 8,
    symbol: 'NVDA',
    name: 'Nvidia',
    price: 433.44,
    market: 1.07,
    hourlyValue: 2387678,
    hourly: -0.16,
    week: -0.16,
    day: -0.16,
    year: -0.16,
    type: 'Metal',
    favority: '0',
    icon: '/images/nvidia.png',
  },
  {
    id: 9,
    symbol: 'BRK-B',
    name: 'Berkshire Hathaway',
    price: 353.19,
    market: 771.81,
    hourlyValue: 2387678,
    hourly: 3.38,
    week: 3.38,
    day: 3.38,
    year: 3.38,
    type: 'Crypto',
    favority: '0',
    icon: '/images/berkshire.png',
  },
  {
    id: 10,
    symbol: 'META',
    name: 'Meta Platforms',
    price: 285.09,
    market: 730.6,
    hourlyValue: 2387678,
    hourly: 0.061,
    week: 0.061,
    day: 0.061,
    year: 0.061,
    type: 'Bond',
    favority: '0',
    icon: '/images/meta.png',
  },
];

export default function Assets() {
  const router = useNavigate();
  const themeGlobal = useTheme();

  const [menuMoreSetting, setMenuMoreSetting] = useState<HTMLElement | null>(null);

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
    padding: '15px',
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

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, index: string) => {
    if (index === 'moreSetting') setMenuMoreSetting(event.currentTarget);
  };

  const handleCloseMenu = (index: string) => {
    if (index === 'moreSetting') setMenuMoreSetting(null);
  };

  return (
    <Stack padding={2}>
      <PartComponent padding="0" backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))">
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ padding: '22px 26px' }}>
          <Stack>
            <Typography variant="h4" color={themeGlobal.palette.common.white} mb={1}>
              All Assets -
            </Typography>
            <Typography variant="caption" color={themeGlobal.palette.grey[200]}>
              Market Cap: $90.764 T / 3,564 Assets
            </Typography>
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
                    <FilterAltOutlinedIcon />
                  </Stack>
                </>
              }
              sx={{
                backgroundColor: '#334D5B',
                color: themeGlobal.palette.grey[200],
                fontSize: '11px',
                width: 80,
                height: 30,
                padding: 0,
                '&:hover': {
                  backgroundColor: '#2d4551',
                },
              }}
            >
              Filter
            </Button>
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
        <TableContainer sx={{ marginBottom: '70px' }}>
          <Table sx={{ minWidth: 450 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">#</StyledTableCell>
                <StyledTableCell align="left">SYMBOL/NAME</StyledTableCell>
                <StyledTableCell align="center">PRICE</StyledTableCell>
                <StyledTableCell align="center">MARKET CAP</StyledTableCell>
                <StyledTableCell align="center">24H VOLUME</StyledTableCell>
                <StyledTableCell align="center">24H %</StyledTableCell>
                <StyledTableCell align="center">7D %</StyledTableCell>
                <StyledTableCell align="center">30D %</StyledTableCell>
                <StyledTableCell align="center">1Y %</StyledTableCell>
                <StyledTableCell align="center">TYPE</StyledTableCell>
                <StyledTableCell align="center">&nbsp;</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ASSETS.map((item) => (
                <TableRow key={item.id} sx={{ cursor: 'pointer' }} onClick={() => router(`/studio/assets/${item.id}`)}>
                  <StyledTableCell align="center">{item.id}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Stack direction="row" alignItems="center" spacing={2} sx={{ width: '100%' }}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                          width: 25,
                          height: 25,
                          borderRadius: '100%',
                          backgroundColor: themeGlobal.palette.common.white,
                        }}
                      >
                        <img src={item.icon} alt="" />
                      </Stack>
                      <Stack textAlign="left">
                        <Typography variant="caption">{item.symbol}</Typography>
                        <Typography fontSize={10}>{item.name}</Typography>
                      </Stack>
                    </Stack>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    $
                    {parseFloat(item.price.toString())
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    $
                    {parseFloat(item.market.toString())
                      .toFixed(3)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    T
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    $
                    {parseFloat(item.hourlyValue.toString())
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ color: item.hourly < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main }}
                  >
                    {parseFloat(item.hourly.toString())
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    %
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ color: item.week < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main }}
                  >
                    {parseFloat(item.week.toString())
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    %
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ color: item.day < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main }}
                  >
                    {parseFloat(item.day.toString())
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    %
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    sx={{ color: item.year < 0 ? themeGlobal.palette.error.main : themeGlobal.palette.info.main }}
                  >
                    {parseFloat(item.year.toString())
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    %
                  </StyledTableCell>
                  <StyledTableCell align="center">{item.type}</StyledTableCell>
                  <StyledTableCell align="center">
                    {item.favority === '0' && (
                      <StarBorderIcon
                        sx={{
                          width: 14,
                          height: 14,
                        }}
                      />
                    )}

                    {item.favority === '1' && (
                      <StarIcon
                        sx={{
                          width: 14,
                          height: 14,
                          color: themeGlobal.palette.warning.main,
                        }}
                      />
                    )}
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PartComponent>
    </Stack>
  );
}
