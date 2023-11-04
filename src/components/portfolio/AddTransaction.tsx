import { useState } from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
  FormControl,
  InputBase,
  alpha,
  IconButton,
  InputLabel,
  Grid,
  Button,
  Paper,
  Stack,
  styled,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface AddTransactionProps {
  setModalTransaction: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddTransaction({ setModalTransaction }: AddTransactionProps) {
  const themeGlobal = useTheme();

  const [selectView, setSelectView] = useState<string>('Buy');

  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      border: 0,
      '&.Mui-disabled': {
        border: 0,
      },
      '&:not(:first-of-type)': {
        borderRadius: theme.shape.borderRadius,
      },
      '&:first-of-type': {
        borderRadius: theme.shape.borderRadius,
      },
    },
    '& .Mui-selected': {
      backgroundColor: '#0b171d !important',
    },
  }));

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
      color: '#fff',
    },
    '& .MuiInputBase-input': {
      width: '100%',
      borderRadius: 4,
      position: 'relative',
      backgroundColor: '#0b171d',
      border: 'none',
      fontSize: '15px',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  const handleView = (_: React.MouseEvent<HTMLElement>, view: string) => {
    setSelectView(view);
  };

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: '#1f3440',
          }}
        >
          <StyledToggleButtonGroup size="small" value={selectView} exclusive onChange={handleView}>
            <ToggleButton value="Buy" aria-label="left aligned" sx={{ width: '150px' }}>
              <Typography variant="body2" color={themeGlobal.palette.common.white}>
                Buy
              </Typography>
            </ToggleButton>
            <ToggleButton value="Sell" aria-label="left aligned" sx={{ width: '150px' }}>
              <Typography variant="body2" color={themeGlobal.palette.common.white}>
                Sell
              </Typography>
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Paper>
        <IconButton onClick={() => setModalTransaction(false)}>
          <CloseIcon sx={{ color: themeGlobal.palette.common.white, width: '30px', height: '30px' }} />
        </IconButton>
      </Stack>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#fff !important' }}>
          Cryptocurrency Transaction
        </InputLabel>
        <BootstrapInput
          fullWidth
          id="bootstrap-input"
          placeholder="Search for Asset"
          sx={{ '& .MuiInputBase-input': { paddingLeft: '32px' } }}
        />
        <Stack position="absolute" sx={{ top: '35px', left: '8px' }}>
          <SearchIcon sx={{ color: themeGlobal.palette.common.white, width: '21px', height: '21px' }} />
        </Stack>
      </FormControl>
      <Grid container>
        <Grid item md={6} sx={{ paddingRight: '16px' }}>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#fff !important' }}>
              Quantity
            </InputLabel>
            <BootstrapInput fullWidth id="bootstrap-input" placeholder="1.00" />
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#fff !important' }}>
              Purchase Price
            </InputLabel>
            <BootstrapInput fullWidth id="bootstrap-input" placeholder="$28,888" />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} sx={{ paddingRight: '16px' }}>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#fff !important' }}>
              Date
            </InputLabel>
            <BootstrapInput
              id="bootstrap-input"
              placeholder="Aur 16, 2023"
              sx={{ '& .MuiInputBase-input': { paddingLeft: '32px' } }}
            />
            <Stack position="absolute" sx={{ top: '34px', left: '8px' }}>
              <CalendarMonthIcon sx={{ color: themeGlobal.palette.common.white, width: '21px', height: '21px' }} />
            </Stack>
          </FormControl>
        </Grid>
        <Grid item md={6}>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#fff !important' }}>
              Fee
            </InputLabel>
            <BootstrapInput fullWidth id="bootstrap-input" placeholder="$1.05" />
          </FormControl>
        </Grid>
      </Grid>
      <FormControl variant="standard">
        <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#fff !important' }}>
          Total Spent
        </InputLabel>
        <BootstrapInput fullWidth id="bootstrap-input" placeholder="$28,888" />
      </FormControl>
      <Button variant="contained" sx={{ backgroundColor: '#1982e5' }}>
        Add Transaction
      </Button>
    </Stack>
  );
}
