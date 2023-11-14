import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Grid,
  Menu,
  MenuProps,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Typography,
  styled,
  tableCellClasses,
  useTheme,
  Table,
} from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import ForwardIcon from '@mui/icons-material/Forward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ControllerMenu, MoreSettingMenu, PartComponent } from '../../components';
import useResponsive from '../../hooks/useResponsive';

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

export default function News() {
  const router = useNavigate();
  const themeGlobal = useTheme();
  const isMdDown = useResponsive('down', 'md');
  const isSmDown = useResponsive('down', 'sm');
  const isLgDown = useResponsive('down', 'lg');

  const [menuController, setMenuController] = useState<HTMLElement | null>(null);
  const [menuMoreSetting, setMenuMoreSetting] = useState<HTMLElement | null>(null);

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
  };

  const handleCloseMenu = (index: string) => {
    if (index === 'controller') setMenuController(null);
    if (index === 'moreSetting') setMenuMoreSetting(null);
  };

  return (
    <>
      <Stack px={{ sm: 2, xxs: 1 }} pt={{ sm: 2, xxs: 1 }}>
        <PartComponent
          backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
          {...(isSmDown ? { padding: '8px' } : {})}
        >
          <Stack padding={2}>
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <Typography variant="h5" color={themeGlobal.palette.common.white}>
                Today is Wednesday, August 23, 2023
              </Typography>
              {!isMdDown && (
                <Tooltip title="Info" arrow>
                  <Stack sx={{ cursor: 'pointer' }}>
                    <img src="/icons/info.svg" alt="" />
                  </Stack>
                </Tooltip>
              )}
            </Stack>
            <Typography fontSize={15} fontWeight={400} lineHeight={1.8} color={themeGlobal.palette.common.white}>
              Welcome to Kaizu`s Financial Fables: Where bear markets become unicorns overnight! Today`s tale:{' '}
              <span style={{ color: '#3BA594', fontWeight: 'bold' }}>Stocks soar</span>&nbsp; as if sprinkled with pixie
              dust, Bitcoin glitters like never before, and your portfolio`s ready for an all-night binger. Stay tuned
              for an <span style={{ color: '#3BA594', fontWeight: 'bold' }}>Chinese economic rollercoaster</span>&nbsp;
              followed by the apocalypse. Join the fiesta! 🎉
            </Typography>
          </Stack>
        </PartComponent>
      </Stack>
      <Stack padding={isSmDown ? 1 : 2}>
        <Grid container spacing={2}>
          <Grid item md={6} xxs={12}>
            <PartComponent
              backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
              {...(isSmDown ? { padding: '8px' } : {})}
            >
              <Stack
                direction={{ xs: 'row', xxs: 'column' }}
                alignItems={{ xs: 'center', xxs: 'flex-start' }}
                justifyContent="space-between"
                mb={4}
              >
                <Typography variant="caption" color={themeGlobal.palette.common.white} mb={{ xxs: 1 }}>
                  #Makro
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
                <Table sx={{ minWidth: 450 }}>
                  <TableBody>
                    {NEWS.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          cursor: 'pointer',
                        }}
                        onClick={() => router(`/news/${item.id}`)}
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
          <Grid item md={6} xxs={12}>
            <PartComponent
              backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
              {...(isSmDown ? { padding: '8px' } : {})}
            >
              <Stack
                direction={{ xs: 'row', xxs: 'column' }}
                alignItems={{ xs: 'center', xxs: 'flex-start' }}
                justifyContent="space-between"
                mb={4}
              >
                <Typography variant="caption" color={themeGlobal.palette.common.white} mb={{ xxs: 1 }}>
                  @Bloomberg
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
                <Table sx={{ minWidth: 450 }}>
                  <TableBody>
                    {NEWS.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          cursor: 'pointer',
                        }}
                        onClick={() => router(`/news/${item.id}`)}
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
          <Grid item md={6} xxs={12}>
            <PartComponent
              backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
              {...(isSmDown ? { padding: '8px' } : {})}
            >
              <Stack
                direction={{ xs: 'row', xxs: 'column' }}
                alignItems={{ xs: 'center', xxs: 'flex-start' }}
                justifyContent="space-between"
                mb={4}
              >
                <Typography variant="caption" color={themeGlobal.palette.common.white} mb={{ xxs: 1 }}>
                  #Crypto
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
                <Table sx={{ minWidth: 450 }}>
                  <TableBody>
                    {NEWS.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          cursor: 'pointer',
                        }}
                        onClick={() => router(`/news/${item.id}`)}
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
          <Grid item md={6} xxs={12}>
            <PartComponent
              backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
              {...(isSmDown ? { padding: '8px' } : {})}
            >
              <Stack
                direction={{ xs: 'row', xxs: 'column' }}
                alignItems={{ xs: 'center', xxs: 'flex-start' }}
                justifyContent="space-between"
                mb={4}
              >
                <Typography variant="caption" color={themeGlobal.palette.common.white} mb={{ xxs: 1 }}>
                  @CryptoSlate
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
                <Table sx={{ minWidth: 450 }}>
                  <TableBody>
                    {NEWS.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          cursor: 'pointer',
                        }}
                        onClick={() => router(`/news/${item.id}`)}
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
          <Grid item md={6} xxs={12}>
            <PartComponent
              backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
              {...(isSmDown ? { padding: '8px' } : {})}
            >
              <Stack
                direction={{ xs: 'row', xxs: 'column' }}
                alignItems={{ xs: 'center', xxs: 'flex-start' }}
                justifyContent="space-between"
                mb={4}
              >
                <Typography variant="caption" color={themeGlobal.palette.common.white} mb={{ xxs: 1 }}>
                  #Bitcoin
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
                <Table sx={{ minWidth: 450 }}>
                  <TableBody>
                    {NEWS.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          cursor: 'pointer',
                        }}
                        onClick={() => router(`/news/${item.id}`)}
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
          <Grid item md={6} xxs={12}>
            <PartComponent
              backgroundImage="linear-gradient(to top, rgba(14, 29, 36, 1), rgba(22, 44, 54, 1))"
              {...(isSmDown ? { padding: '8px' } : {})}
            >
              <Stack
                direction={{ xs: 'row', xxs: 'column' }}
                alignItems={{ xs: 'center', xxs: 'flex-start' }}
                justifyContent="space-between"
                mb={4}
              >
                <Typography variant="caption" color={themeGlobal.palette.common.white} mb={{ xxs: 1 }}>
                  #China
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
                <Table sx={{ minWidth: 450 }}>
                  <TableBody>
                    {NEWS.map((item) => (
                      <TableRow
                        key={item.id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                          cursor: 'pointer',
                        }}
                        onClick={() => router(`/news/${item.id}`)}
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
