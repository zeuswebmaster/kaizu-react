import { Stack, Typography, Button, Tooltip, styled } from '@mui/material';

import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarIcon from '@mui/icons-material/Star';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';

export default function DrawerItem() {
  const StyledButton = styled(Button)(() => ({
    backgroundColor: '#263c48',
    padding: '4px 8px',
    minWidth: 'auto',
    '& span': {
      marginRight: '-3px',
    },
    '&:hover': {
      backgroundColor: '#2d4551',
    },
  }));

  return (
    <Stack
      sx={{
        width: 450,
        height: '100%',
        backgroundImage: 'linear-gradient(to right, rgba(20, 42, 53, 1), rgba(40, 72, 86, 1))',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: '100%',
          backgroundImage: 'linear-gradient(to right, rgba(10, 21, 26, 1), rgba(19, 35, 42, 1))',
          padding: '20px 30px',
        }}
      >
        <Stack>
          <Stack
            sx={{
              width: '45px',
              marginBottom: '5px',
            }}
          >
            <img src="/icons/kaizu.svg" alt="" />
          </Stack>
          <Typography fontSize={14} color="#fff" fontWeight={500}>
            Predictive Intel Report
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Tooltip title="Expand" arrow>
            <StyledButton
              variant="contained"
              startIcon={<OpenInFullIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
          <Tooltip title="Info" arrow>
            <StyledButton
              variant="contained"
              startIcon={<InfoOutlinedIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
          <Tooltip title="Save report" arrow>
            <StyledButton
              variant="contained"
              startIcon={<StarIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
          <Tooltip title="Refresh" arrow>
            <StyledButton
              variant="contained"
              startIcon={<RefreshIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
          <Tooltip title="More" arrow>
            <StyledButton
              variant="contained"
              startIcon={<MoreHorizIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
          <Tooltip title="Close" arrow>
            <StyledButton
              variant="contained"
              startIcon={<CloseIcon sx={{ color: '#cfd2d3', width: '16px', height: '16px' }} />}
            />
          </Tooltip>
        </Stack>
      </Stack>
      <Stack sx={{ padding: '20px 50px' }}>
        <Typography fontSize={14} color="#67777e" mt={1}>
          BITCOIN PRICE
        </Typography>
        <Typography variant="h3" color="#fff" mt={1}>
          Bullish Scenario
        </Typography>
      </Stack>
    </Stack>
  );
}
